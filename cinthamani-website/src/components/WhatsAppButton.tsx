import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/914428153842"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="whatsapp-float"
    >
      <MessageCircle size={28} color="#ffffff" fill="#ffffff" strokeWidth={0} />
    </a>
  );
}
