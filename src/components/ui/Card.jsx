import { cn } from '@/lib/utils';

export function Card({ children, className, hover = false, ...props }) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-zinc-200 bg-white shadow-sm',
        hover && 'transition hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn('px-6 py-5 border-b border-zinc-100', className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn('px-6 py-5', className)} {...props}>
      {children}
    </div>
  );
}