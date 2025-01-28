'use client';

import { CustomButton } from '@/components/ui/custom-button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import UserManagementForm from './user-management-form';
import { DataTable } from '@/components/ui/data-table';
import { columns } from './column';
import { useGetUsers } from '../../hooks/useGetUser';
import { useContext, useEffect } from 'react';
import { MyContext } from '@/app/providers/user-provider';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  role: 'Admin' | 'User';
}

export default function UserManagementList() {
  const { data, isLoading } = useGetUsers('');
  const { text, setText } = useContext(MyContext);

  useEffect(() => {
    setText('bilal');
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between rounded-lg bg-white p-4">
        <h1 className="bg-clip-text text-3xl font-bold text-black">
          User Management
        </h1>
        <div className="flex gap-2">
          <CustomButton variant="outline">Export</CustomButton>

          <Sheet>
            <SheetTrigger asChild>
              <CustomButton variant="default">Create</CustomButton>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-slate-700 bg-background sm:w-[600px]"
            >
              <SheetHeader>
                <SheetTitle className="text-2xl text-orange-500">
                  Create User
                </SheetTitle>
              </SheetHeader>
              <UserManagementForm />
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <DataTable columns={columns} data={(data || []) as User[]} />
    </div>
  );
}
