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
      className="fixed right-[22px] bottom-[78px] max-md:right-4 max-md:bottom-[70px] w-14 h-14 max-md:w-[50px] max-md:h-[50px] rounded-full bg-[#25D366] text-white inline-flex items-center justify-center text-[26px] max-md:text-[22px] shadow-[0_10px_30px_rgba(37,211,102,0.4)] z-[998] animate-lc-pulse hover:text-white hover:scale-105"
      aria-label="Chat with us on WhatsApp"
    >
      <i className="fa fa-whatsapp"></i>
    </a>
  );
}
