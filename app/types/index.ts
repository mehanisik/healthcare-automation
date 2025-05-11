export interface NavItem {
  label: string
  href: string
  isExternal?: boolean
}

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  content: string
  author: string
  role: string
  company: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
