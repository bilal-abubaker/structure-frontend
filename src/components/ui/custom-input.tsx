'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function CustomInput({ className, ...props }: CustomInputProps) {
  return (
    <Input className={cn('border-slate-200 bg-white', className)} {...props} />
  );
}
