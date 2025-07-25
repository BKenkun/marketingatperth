import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const handleWhatsAppClick = () => {
  const message = encodeURIComponent("Hi! I'm interested in your $100 digital marketing campaign for my Perth business. Can you tell me more?");
  window.open(`https://api.whatsapp.com/send?phone=61456534558&text=${message}`, '_blank');
};