export default function IconButton({ children, className = "", ...rest }) {
  return (
    <button
      {...rest}
      className={`flex items-center justify-center rounded-full p-2 bg-white/10 hover:bg-white/20 transition ${className}`}
    >
      {children}
    </button>
  );
}
