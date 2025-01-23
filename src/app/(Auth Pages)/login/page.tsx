'use client';

import { Button } from '@/components/ui/button';
import { InputField } from '@/components/ui/input-field';
import { PasswordInput } from '@/components/ui/input-password';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { loginValidationSchema } from '@/validations/login.validation-schema';
import Logo from '@images/calendax-logo-07.png';
import { Field, Form, Formik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import { useLogin } from './hooks/useLogin';

export default function Login() {
  const { loginHandler } = useLogin();

  const mutation = loginHandler();

  const handleSubmit = async (values: any) => {
    mutation.mutate(values);
  };
  return (
    <div className="flex w-full flex-col justify-center bg-orange-100 p-8 md:p-12 lg:w-[40%] lg:p-16">
      <div className="mx-auto w-full max-w-[400px]">
        <div className="mb-8">
          <Image src={Logo} alt="Logo" width={225} height={96} />
        </div>

        <p className="mb-6 text-sm text-gray-400">
          Please sign-in to your account and continue to the dashboard.
        </p>

        <Formik
          initialValues={{
            username: '',
            password: '',
            remember: false,
          }}
          validationSchema={loginValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, handleChange, handleBlur, touched, errors }) => (
            <Form className="space-y-4">
              {/* Email Field */}
              <div className="space-y-2">
                <InputField
                  name="username"
                  label="Email"
                  type="email"
                  placeholder="admin@Dummy.com"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.username && errors.username
                      ? errors.username
                      : undefined
                  }
                />
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <PasswordInput
                  label="Password"
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.password && errors.password
                      ? errors.password
                      : undefined
                  }
                />
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Field
                    type="checkbox"
                    name="remember"
                    className="border-gray-800 data-[state=checked]:bg-orange-500"
                  />
                  <Label
                    htmlFor="remember"
                    className="text-xs leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </Label>
                </div>

                <Link
                  href="#"
                  className="text-xs text-orange-500 hover:text-orange-400"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-orange-500 text-sm hover:bg-orange-600"
                disabled={mutation.isPending}
              >
                {mutation.isPending ? (
                  <LoadingSpinner className="" />
                ) : (
                  'Sign in'
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
