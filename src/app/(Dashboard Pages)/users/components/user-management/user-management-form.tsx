'use client';

import { Formik, Form } from 'formik';
import { Button } from '@/components/ui/button';
import { SeatOrganizationSchema } from '@/validations/seat-organization.validation-schema';
import { InputField } from '@/components/ui/input-field';
import { CustomSelect } from '@/components/ui/custom-select';
import MultipleSelector from '@/components/ui/multi-select';
import { FormField } from '@/components/ui/form-field';

export default function UserManagementForm() {
  const roles = [
    { value: 'role1', label: 'role 1' },
    { value: 'role2', label: 'role 2' },
    { value: 'role3', label: 'role 3' },
  ];
  const initialValues = {
    role: '',
    events: '',
    fname: '',
    lname: '',
    email: '',
    phoneNumber: '',
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log('Form Data:', values);
  };

  return (
    <div className="space-y-6">
      <Formik
        initialValues={initialValues}
        validationSchema={SeatOrganizationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue,
        }) => (
          <Form className="space-y-6">
            {/* Custom Select for Event */}

            {/* Input for Seat Name */}
            <div>
              <InputField
                label="First Name"
                name="fname"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter First name"
                required
                error={touched.fname && errors.fname ? errors.fname : undefined}
              />
            </div>
            <div>
              <InputField
                label="Last Name"
                name="lname"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Last name"
                required
                error={touched.lname && errors.lname ? errors.lname : undefined}
              />
            </div>

            {/* Input for Available Seats */}
            <div>
              <InputField
                label="Email"
                name="email"
                type="number"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Email"
                required
                error={touched.email && errors.email ? errors.email : undefined}
              />
            </div>

            {/* Input for Reserved Seats */}
            <div>
              <InputField
                label="Phone Number"
                name="phoneNumber"
                type="tel"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter Phone Number"
                required
                error={
                  touched.phoneNumber && errors.phoneNumber
                    ? errors.phoneNumber
                    : undefined
                }
              />
            </div>
            <div>
              <CustomSelect
                label="Role"
                value={values.role}
                onValueChange={(value) => setFieldValue('role', value)}
                options={roles}
                required
                error={touched.role && errors.role ? errors.role : undefined}
              />
              {/* {touched.event && errors.event && (
                <p className="text-sm text-red-500">{errors.event}</p>
              )} */}
            </div>
            {/* <div>
              <FormField label="Events" required>
                <MultipleSelector
                  defaultOptions={OPTIONS}
                  placeholder="Select frameworks you like..."
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                />
              </FormField>
            </div> */}

            {/* Submit Button */}
            <div className="flex justify-end pt-4">
              <Button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
