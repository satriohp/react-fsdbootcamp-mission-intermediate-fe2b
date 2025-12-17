export default function TextField({ label, id, type = "text", placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs sm:text-sm text-white/60">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#333333] border-none text-white 
                   p-2 sm:p-3 
                   rounded-lg mt-1 focus:ring focus:ring-blue-600 outline-none"
      />
    </div>
  );
}