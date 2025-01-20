'use client';

import * as React from 'react';
import { Label } from './label';
import { Input } from './input';
import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'tel' | string;
  label?: string; // Optional label
  required?: boolean; // Optional required prop
  name?: string;
  error?: string; // Optional error message
}

const InputField = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, name, type = 'text', label, required, error, ...props },
    ref,
  ) => {
    const validatePhoneNumber = (value: string) => {
      const phoneNumberPattern = /^(1?\d{10})$/; // Allows 10 or 11 digits
      return phoneNumberPattern.test(value)
        ? undefined
        : 'Invalid phone number format';
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (type === 'tel') {
        const error = validatePhoneNumber(e.target.value);
        if (error) {
          console.error(error); // Handle error
        }
      }
    };

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <Label htmlFor={props.id}>
            {label}
            {required && <span style={{ color: 'red' }}> *</span>}
          </Label>
        )}
        <Input
          id={name}
          type={type}
          placeholder={label}
          ref={ref}
          // required={required}
          onBlur={handleBlur}
          className={cn('border-slate-200 bg-white', className)}
          {...props}
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

InputField.displayName = 'InputField';

export { InputField };
