'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Eye, Edit, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { User } from './user-management-list';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'userId',
    header: '#',
    cell: ({ row }) => <div>{row.index + 1}</div>, // Row number
  },
  {
    accessorKey: 'name',
    header: 'First Name',
    cell: ({ row }) => <div>{row.original.name}</div>,
  },

  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => <div>{row.original.email}</div>,
  },
  {
    accessorKey: 'phone',
    header: 'Phone Number',
    cell: ({ row }) => <div>{row.original.phone}</div>,
  },
  {
    accessorKey: 'username',
    header: 'Role',
    cell: ({ row }) => <div>{row.original.username}</div>,
  },
  {
    accessorKey: 'action',
    header: 'Action',
    cell: ({ row }) => (
      <div className="flex space-x-2">
        <Button variant="ghost" size="sm">
          <Eye className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm">
          <Edit className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="sm" className="text-red-600">
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    ),
  },
];
