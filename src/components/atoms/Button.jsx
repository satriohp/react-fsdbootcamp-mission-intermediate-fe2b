export default function Button({ children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={`w-full bg-[#444444] hover:bg-[#555555] text-white font-semibold 
                  rounded-lg py-2 sm:py-3  
                  text-sm sm:text-base    
                  transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}