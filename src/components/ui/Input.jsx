import { cn } from '@/lib/utils';

export function Input({ label, error, className, id, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(
          'input-field',
          error && 'ring-2 ring-red-500 border-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}

export function Select({ label, error, children, className, id, ...props }) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}
      <select
        id={id}
        className={cn('input-field', error && 'ring-2 ring-red-500 border-red-500', className)}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-xs text-red-600 mt-1">{error}</p>
      )}
    </div>
  );
}