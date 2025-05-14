"use server"

import { z } from "zod"

// Actualizar el esquema del formulario para incluir el campo de teléfono
const formSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يكون أكثر من حرفين" }),
  email: z.string().email({ message: "البريد الإلكتروني غير صالح" }),
  phone: z
    .string()
    .refine((val) => !val || val.startsWith("+") || val.startsWith("00"), {
      message: "يجب أن يبدأ رقم الهاتف بـ + أو 00",
    })
    .optional(),
  subject: z.string().min(3, { message: "الموضوع يجب أن يكون أكثر من 3 أحرف" }),
  message: z.string().min(10, { message: "الرسالة يجب أن تكون أكثر من 10 أحرف" }),
  package: z.string().optional(),
})

// Actualizar la función sendMessage para incluir el teléfono en el mensaje de Telegram
export async function sendMessage(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = (formData.get("phone") as string) || "لم يتم تحديد رقم هاتف"
    const subject = formData.get("subject") as string
    const message = formData.get("message") as string
    const packageName = (formData.get("package") as string) || "لم يتم تحديد عرض"

    // Validate form data
    const result = formSchema.safeParse({
      name,
      email,
      phone,
      subject,
      message,
      package: packageName,
    })

    if (!result.success) {
      return { success: false, error: result.error.flatten().fieldErrors }
    }

    // Send message to Telegram
    const telegram_token = "6771313174:AAGSrlGl7LnJg1ewGlaS6QO5fpL5OVXJNWg"
    const telegram_group = "-1002175706144"

    const telegramMessage = `
🔔 رسالة جديدة من موقع رحال ترافل:

👤 الاسم: ${name}
📧 البريد الإلكتروني: ${email}
📱 رقم الهاتف: ${phone}
📝 الموضوع: ${subject}
🎯 العرض المطلوب: ${packageName}

📄 الرسالة:
${message}
  `

    const telegramResponse = await fetch(`https://api.telegram.org/bot${telegram_token}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegram_group,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    })

    const telegramData = await telegramResponse.json()

    if (!telegramData.ok) {
      return {
        success: false,
        error: { server: ["حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى لاحقاً"] },
      }
    }

    return { success: true }
  } catch (error) {
    console.error("Error sending message:", error)
    return {
      success: false,
      error: { server: ["حدث خطأ أثناء إرسال الرسالة، يرجى المحاولة مرة أخرى لاحقاً"] },
    }
  }
}
