// 'use client';

// import { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { cn } from '@/lib/utils';

// interface Column {
//   key: string;
//   label: string;
//   render?: (value: any, row: any) => React.ReactNode;
// }

// interface DataTableProps {
//   columns: Column[];
//   data: any[];
//   selectable?: boolean;
//   actions?: (row: any) => React.ReactNode;
//   className?: string;
// }

// export function DataTable({
//   columns,
//   data,
//   selectable = false,
//   actions,
//   className,
// }: DataTableProps) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

//   const toggleAllRows = (checked: boolean) => {
//     if (checked) {
//       setSelectedRows(new Set(data.map((_, index) => index)));
//     } else {
//       setSelectedRows(new Set());
//     }
//   };

//   const toggleRow = (index: number) => {
//     const newSelected = new Set(selectedRows);
//     if (newSelected.has(index)) {
//       newSelected.delete(index);
//     } else {
//       newSelected.add(index);
//     }
//     setSelectedRows(newSelected);
//   };

//   return (
//     <div
//       className={cn(
//         'overflow-hidden rounded-lg border border-slate-200 bg-white',
//         className,
//       )}
//     >
//       <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row">
//         <div className="flex items-center gap-2">
//           <span className="text-slate-600">Search:</span>
//           <Input
//             type="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border-slate-200 bg-white"
//             placeholder="Search..."
//           />
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
//           <table className="w-full">
//             <thead className="sticky top-0 z-10 border-y border-slate-200 bg-slate-50">
//               <tr>
//                 {selectable && (
//                   <th className="px-4 py-3 text-left">
//                     <input
//                       type="checkbox"
//                       className="rounded border-slate-300"
//                       checked={selectedRows.size === data.length}
//                       onChange={(e) => toggleAllRows(e.target.checked)}
//                     />
//                   </th>
//                 )}
//                 {columns.map((column) => (
//                   <th
//                     key={column.key}
//                     className="px-4 py-3 text-left text-sm font-semibold text-slate-600"
//                   >
//                     {column.label}
//                   </th>
//                 ))}
//                 {actions && (
//                   <th className="px-4 py-3 text-left text-sm font-semibold text-slate-600">
//                     Actions
//                   </th>
//                 )}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200">
//               {data.map((row, index) => (
//                 <tr key={index} className="hover:bg-slate-50">
//                   {selectable && (
//                     <td className="px-4 py-3">
//                       <input
//                         type="checkbox"
//                         className="rounded border-slate-300"
//                         checked={selectedRows.has(index)}
//                         onChange={() => toggleRow(index)}
//                       />
//                     </td>
//                   )}
//                   {columns.map((column) => (
//                     <td key={column.key} className="px-4 py-3 text-slate-600">
//                       {column.render
//                         ? column.render(row[column.key], row)
//                         : row[column.key]}
//                     </td>
//                   ))}
//                   {actions && <td className="px-4 py-3">{actions(row)}</td>}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import React, { useState } from 'react';
// import { Input } from '@/components/ui/input';
// import { cn } from '@/lib/utils';

// export interface ColumnDef<T> {
//   accessorKey?: keyof T;
//   header: React.ReactNode | ((column: any) => React.ReactNode);
//   cell?: (cellProps: { row: T }) => React.ReactNode;
//   id?: string; // Optional for columns like 'actions' without accessorKey
// }

// interface DataTableProps<T> {
//   columns: ColumnDef<T>[];
//   data: T[];
//   selectable?: boolean;
//   className?: string;
//   onRowSelect?: (selectedRows: T[]) => void;
// }

// export function DataTable<T>({
//   columns,
//   data,
//   selectable = false,
//   className,
//   onRowSelect,
// }: DataTableProps<T>) {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

//   const toggleAllRows = (checked: boolean) => {
//     if (checked) {
//       const allRows = new Set(data.map((_, index) => index));
//       setSelectedRows(allRows);
//       onRowSelect?.(Array.from(allRows).map((index) => data[index]));
//     } else {
//       setSelectedRows(new Set());
//       onRowSelect?.([]);
//     }
//   };

//   const toggleRow = (index: number) => {
//     const newSelected = new Set(selectedRows);
//     if (newSelected.has(index)) {
//       newSelected.delete(index);
//     } else {
//       newSelected.add(index);
//     }
//     setSelectedRows(newSelected);
//     onRowSelect?.(Array.from(newSelected).map((i) => data[i]));
//   };

//   const filteredData = data.filter((row: any) =>
//     Object.values(row).some((value) =>
//       String(value).toLowerCase().includes(searchTerm.toLowerCase()),
//     ),
//   );

//   return (
//     <div
//       className={cn(
//         'overflow-hidden rounded-lg border border-slate-200 bg-white',
//         className,
//       )}
//     >
//       <div className="flex flex-col justify-between gap-4 p-4 sm:flex-row">
//         <div className="flex items-center gap-2">
//           <span className="text-slate-600">Search:</span>
//           <Input
//             type="search"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border-slate-200 bg-white"
//             placeholder="Search..."
//           />
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
//           <table className="w-full">
//             <thead className="sticky top-0 z-10 border-y border-slate-200 bg-slate-50">
//               <tr>
//                 {selectable && (
//                   <th className="px-4 py-3 text-left">
//                     <input
//                       type="checkbox"
//                       className="rounded border-slate-300"
//                       checked={selectedRows.size === filteredData.length}
//                       onChange={(e) => toggleAllRows(e.target.checked)}
//                     />
//                   </th>
//                 )}
//                 {columns.map((column, index) => (
//                   <th
//                     key={index}
//                     className="px-4 py-3 text-left text-sm font-semibold text-slate-600"
//                   >
//                     {typeof column.header === 'function'
//                       ? column.header({ column })
//                       : column.header}
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-200">
//               {filteredData.map((row, index) => (
//                 <tr key={index} className="hover:bg-slate-50">
//                   {selectable && (
//                     <td className="px-4 py-3">
//                       <input
//                         type="checkbox"
//                         className="rounded border-slate-300"
//                         checked={selectedRows.has(index)}
//                         onChange={() => toggleRow(index)}
//                       />
//                     </td>
//                   )}
//                   {columns.map((column, colIndex) => {
//                     const cellContent = column.cell
//                       ? column.cell({ row })
//                       : column.accessorKey
//                         ? String(row[column.accessorKey as keyof T])
//                         : null;

//                     return (
//                       <td key={colIndex} className="px-4 py-3 text-slate-600">
//                         {cellContent}
//                       </td>
//                     );
//                   })}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
