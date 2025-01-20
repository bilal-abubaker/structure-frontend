'use client';
import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  SortingState,
  Table as TanstackTable,
  useReactTable,
} from '@tanstack/react-table';

import { useState } from 'react';
import { Skeleton } from './skeleton';
import { DataTablePageSizeOptions, DataTablePaginationMode } from './type';
import { Input } from './input';
import { cn } from '@/lib/utils';
// import { DataTablePagination } from './data-table-pagination';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  className?: string;
  loading?: boolean;
  paginationMode?: DataTablePaginationMode;
  pageSizeOptions?: DataTablePageSizeOptions;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  loading = false,
  paginationMode = 'client',
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 10,
  });
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...(paginationMode === 'client' && {
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
    }),
    manualSorting: true,
    isMultiSortEvent: () => true,
    state: {
      pagination,
      sorting,
      columnVisibility,
      rowSelection,
    },
    enableMultiSort: true,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    manualPagination: true,
    enableRowSelection: true,
  });

  const { rows } = table?.getRowModel();

  return (
    <div
      className={cn(
        'overflow-hidden rounded-lg border border-slate-200 bg-white',
        className
      )}
    >
      <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span className="text-slate-600">Search:</span>
          <Input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-slate-200 bg-white"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
          <table className="w-full">
            <thead className="sticky top-0 z-10 border-slate-200 bg-slate-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header, _index) => (
                    <th
                      key={header.id || _index}
                      className="px-4 py-3 text-left text-sm font-semibold text-slate-600"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <NotMemoizedTableBody table={table} rows={rows} loading={loading} />
          </table>
        </div>

        {/* Move Pagination Below Table */}
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <DataTablePagination table={table} pageSizeOptions={pageSizeOptions} /> */}
      </div>
    </div>
  );
}

function NotMemoizedTableBody<TData>({
  table,
  loading = false,
  rows,
}: {
  table: TanstackTable<TData>;
  loading?: boolean;
  rows: Row<TData>[];
}) {
  return (
    <tbody className="divide-y divide-slate-200">
      {loading ? (
        <>
          {Array.from({ length: table.getState().pagination.pageSize }).map(
            (_, rowIndex) => (
              <tr key={`skeleton-row-${rowIndex}`}>
                {Array.from({ length: table.getAllColumns().length }).map(
                  (_, colIndex) => (
                    <td key={`skeleton-cell-${colIndex}`} className="px-6 py-4">
                      <div className="flex flex-col space-y-2">
                        <Skeleton className="h-4 w-3/4 rounded" />
                        <Skeleton className="h-4 w-1/2 rounded" />
                      </div>
                    </td>
                  )
                )}
              </tr>
            )
          )}
        </>
      ) : rows?.length ? (
        rows.map((row) => (
          <tr
            key={row.id}
            className="hover:bg-gray-50"
            data-state={row.getIsSelected() && 'selected'}
          >
            {row.getVisibleCells().map((cell, _index) => (
              <td key={cell.id || _index} className="px-4 py-3 text-slate-600">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={table.getAllColumns().length}
            className="whitespace-nowrap px-6 py-4 text-center text-sm text-gray-500"
          >
            No results.
          </td>
        </tr>
      )}
    </tbody>
  );
}
