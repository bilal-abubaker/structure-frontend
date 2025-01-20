import { Table } from '@tanstack/react-table';

export type DataTablePaginationMode = 'client' | 'server';
export type DataTablePageSizeOptions = number[];

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  paginationMode?: DataTablePaginationMode;
  pageSizeOptions?: DataTablePageSizeOptions;
}
