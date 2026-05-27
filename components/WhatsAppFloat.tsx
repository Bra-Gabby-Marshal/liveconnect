"use client";

interface WhatsAppFloatProps {
  whatsappNumber: string;
}

export default function WhatsAppFloat({ whatsappNumber }: WhatsAppFloatProps) {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="lc-whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa fa-whatsapp"></i>
    </a>
  );
}