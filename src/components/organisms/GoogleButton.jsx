export default function GoogleButton() {
  return (
    <button 
      className="w-full 
                 mt-3 sm:mt-4       
                 bg-[#333333] 
                 p-2 sm:p-3         
                 rounded-lg 
                 text-white 
                 flex items-center justify-center 
                 hover:bg-[#444444] 
                 text-xs sm:text-sm 
                 transition"
    >
      <img 
        src="/assets/google-logo.png" 
        alt="Google" 
        className="w-4 h-4 sm:w-5 sm:h-5 mr-2" 
      />
      Masuk dengan Google
    </button>
  );
}