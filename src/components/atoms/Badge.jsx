export default function Badge({ children }) {
  return (
    <span className="absolute top-2 left-2 bg-[#0F1E93] text-white text-[10px] font-semibold px-2 py-1 rounded-md uppercase">
      {children}
    </span>
  );
}
