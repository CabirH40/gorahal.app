// Extender la interfaz Window para incluir gtag
interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
  }