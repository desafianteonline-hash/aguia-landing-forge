import WhatsAppIcon from "@/components/WhatsAppIcon";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppCTAButtonProps {
  children: React.ReactNode;
  message?: string;
  className?: string;
}

const WhatsAppCTAButton = ({ children, message, className = "" }: WhatsAppCTAButtonProps) => {
  return (
    <a
      href={getWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-12 py-6 text-base font-medium text-white transition-all duration-500 hover:scale-105 md:px-12 md:py-6 ${className}`}
      style={{
        fontFamily: "'Unbounded', sans-serif",
        background: "radial-gradient(57.68% 100% at 47.82% 0%, #FDBA74 0%, #EA580C 100%)",
        boxShadow:
          "0px -27px 80px 0px rgba(234, 88, 12, 0.22), 0px -9.855px 29.201px 0px rgba(234, 88, 12, 0.15), 0px -4.785px 14.177px 0px rgba(234, 88, 12, 0.12), 0px -2.346px 6.95px 0px rgba(234, 88, 12, 0.10), 0px -0.927px 2.748px 0px rgba(234, 88, 12, 0.07)",
      }}
    >
      {/* Shine effect */}
      <span
        className="pointer-events-none absolute bottom-0 h-[160%] w-[90px] select-none"
        style={{
          background: "linear-gradient(10deg, #FED7AA 12.81%, rgba(254, 215, 170, 0.00) 66.66%)",
          transform: "translateX(-50%) skew(-25deg)",
          filter: "blur(4px)",
          animation: "shinery 3s infinite ease-in-out",
        }}
      />
      {/* Border ring */}
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none rounded-full"
        style={{
          width: "calc(100% + 6px)",
          height: "calc(100% + 6px)",
          border: "5px solid rgba(173, 173, 173, 0.25)",
        }}
      />
      <WhatsAppIcon className="relative z-10 h-5 w-5 md:h-6 md:w-6" />
      <span className="relative z-10">{children}</span>

      {/* Hover overlay */}
      <span
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(90deg, #3B82F6 0%, #1D4ED8 100%)",
        }}
      />
    </a>
  );
};

export default WhatsAppCTAButton;
