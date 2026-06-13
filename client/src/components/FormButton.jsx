export default function FormButton({ children, type = 'submit', variant = 'primary', disabled = false, className = '' }) {
  const baseStyles = 'w-full rounded-lg py-2.5 text-sm font-medium transition disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-slate-950 text-white hover:bg-slate-800',
    secondary: 'border border-slate-300 text-slate-900 hover:bg-slate-100',
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
