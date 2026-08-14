import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';

export function Modal({ open, onClose, title, children, className }) {
  const overlayRef = useRef();

  useEffect(() => {
    const handleEsc = (e) => e.key === 'Escape' && onClose?.();
    if (open) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={(e) => e.target === overlayRef.current && onClose?.()}
    >
      <div className={cn(
        'relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white shadow-xl',
        className
      )}>
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose} className="btn-ghost !p-1.5">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-6 py-5">
          {children}
        </div>
      </div>
    </div>
  );
}