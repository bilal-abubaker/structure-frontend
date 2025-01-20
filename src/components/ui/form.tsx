'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerProps,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
  UseFormStateReturn,
} from 'react-hook-form';

// import { cn } from '@lib/cn';
// import { Label } from '@ui/components/label';
import { Input } from './input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './select';
import { SelectTriggerProps, SelectValueProps } from '@radix-ui/react-select';
import { Label } from './label';
import { cn } from '@/lib/utils';

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={cn('space-y-2', className)} {...props} />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = 'FormItem';

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label
      ref={ref}
      className={cn(error && 'text-red-500 dark:text-red-900', className)}
      htmlFor={formItemId}
      {...props}
    />
  );
});
FormLabel.displayName = 'FormLabel';

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
FormControl.displayName = 'FormControl';

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
      className={cn('text-sm text-slate-500 dark:text-slate-400', className)}
      {...props}
    />
  );
});
FormDescription.displayName = 'FormDescription';

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
      className={cn(
        'text-sm font-medium text-red-500 dark:text-red-900',
        className,
      )}
      {...props}
    >
      {body}
    </p>
  );
});
FormMessage.displayName = 'FormMessage';

// ** Input **
export const FormFieldInput = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label?: string;
  labelProps?: Omit<
    LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>,
    'ref'
  > &
    React.RefAttributes<HTMLLabelElement>;
  description?: string;
  input?: React.InputHTMLAttributes<HTMLInputElement>;
}) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        {...props}
        render={({ field }) => (
          <FormItem>
            {props.label ? (
              <FormLabel {...props.labelProps}>{props.label}</FormLabel>
            ) : null}
            <FormControl>
              <Input {...props.input} {...field} />
            </FormControl>
            {props.description ? (
              <FormDescription>{props.description}</FormDescription>
            ) : null}
            <FormMessage />
          </FormItem>
        )}
      />
    </FormFieldContext.Provider>
  );
};

FormFieldInput.displayName = 'FormFieldInput';

// ** Select **
export const FormFieldSelect = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  children,
  ...props
}: Omit<ControllerProps<TFieldValues, TName>, 'render'> & {
  label?: React.ReactNode;
  labelProps?: Omit<
    LabelPrimitive.LabelProps & React.RefAttributes<HTMLLabelElement>,
    'ref'
  > &
    React.RefAttributes<HTMLLabelElement>;
  trigger?: Omit<
    SelectTriggerProps & React.RefAttributes<HTMLButtonElement>,
    'ref'
  > &
    React.RefAttributes<HTMLButtonElement>;
  value?: SelectValueProps & React.RefAttributes<HTMLSpanElement>;
  description?: string;
  children: React.ReactNode;
}) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller
        {...props}
        render={({ field }) => (
          <FormItem>
            {props.label ? (
              <FormLabel {...props.labelProps}>{props.label}</FormLabel>
            ) : null}
            <FormControl>
              <Select onValueChange={field.onChange} {...field}>
                <SelectTrigger {...props.trigger}>
                  <SelectValue {...props.value} />
                </SelectTrigger>
                <SelectContent>
                  {React.Children.map(children, (child, index) => child)}
                </SelectContent>
              </Select>
            </FormControl>
            {props.description ? (
              <FormDescription>{props.description}</FormDescription>
            ) : null}
            <FormMessage />
          </FormItem>
        )}
      />
    </FormFieldContext.Provider>
  );
};

FormFieldSelect.displayName = 'FormFieldSelect';

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
