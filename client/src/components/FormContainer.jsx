import { Link } from 'react-router-dom';

export default function FormContainer({ title, description, children, footerText, footerLink, footerLinkLabel }) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="space-y-6 rounded-2xl bg-white p-8 shadow-sm">
          <div className="space-y-2 text-center">
            <Link to="/" className="inline-block text-2xl font-semibold text-slate-900 hover:text-slate-700">
              TaskFlow
            </Link>
            <h1 className="text-2xl font-semibold text-slate-950">{title}</h1>
            {description && <p className="text-sm text-slate-600">{description}</p>}
          </div>

          {children}

          {footerText && (
            <p className="text-center text-sm text-slate-600">
              {footerText}{' '}
              <Link to={footerLink} className="font-medium text-indigo-600 hover:text-indigo-700">
                {footerLinkLabel}
              </Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
