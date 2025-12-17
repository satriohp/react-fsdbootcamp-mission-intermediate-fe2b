import Title from "../atoms/Title";
import Subtitle from "../atoms/Subtitle";

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/assets/view-3d-cinema-theatre-room.jpg')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 bg-[#1C1C1C] text-white 
                      p-6 sm:p-8 md:p-10  /* Responsif Padding */
                      rounded-xl shadow-2xl w-full 
                      max-w-xs sm:max-w-sm  /* Responsif Max Width */
                      mx-4"> 
        
        <div className="flex justify-center mb-6">
          <img 
            src="/assets/Logo.png"
            alt="Chill Logo"
            className="h-8 sm:h-10 object-contain" 
          />
        </div>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
      </div>
    </div>
  );
}