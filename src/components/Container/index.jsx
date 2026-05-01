export default function Container({ children, className = "" }) {
  return (
    <div className={`w-full max-w-335 mx-auto px-4 sm:px-6 md:px-5 ${className}`}>
      {children}
    </div>
  );
}