'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from './label';

interface CustomSelectProps {
  label?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  // className?: string;
  error?: string; // Optional error message
  // helperText?: string; // Error message text
  disabled?: boolean;
  required?: boolean;
}

export function CustomSelect({
  value,
  onValueChange,
  options,
  placeholder = 'Select option',
  label,
  error,
  required,
  disabled = false,
}: CustomSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <Label htmlFor={label}>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger
          className={`w-full border p-2 text-sm ${
            error ? 'border-red-500' : 'border-gray-300'
          } rounded-md shadow-sm focus:border-indigo-500 focus:outline-none ${
            disabled ? 'cursor-not-allowed bg-gray-200 text-gray-500' : ''
          }`}
          disabled={disabled}
        >
          <SelectValue placeholder={placeholder}>
            {value || placeholder}
          </SelectValue>
        </SelectTrigger>
        <SelectContent className="absolute mt-1 rounded-md border border-gray-300 bg-white shadow-lg">
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
