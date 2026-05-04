export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-335 mx-auto px-2.5 sm:px-6 md:px-[10px] ${className}`}>
      {children}
    </div>
  );
}