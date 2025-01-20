// 'use client';

// import { Button } from '@/components/ui/button';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// // import { usePagination } from '@/contexts/AppContext';

// export default function Pagination() {
// //   const { currentPage, totalPages, setCurrentPage } = usePagination();

//   const renderPageNumbers = () => {
//     const pages = [];

//     if (totalPages <= 7) {
//       // Show all pages if total pages are 7 or less
//       for (let i = 1; i <= totalPages; i++) {
//         pages.push(
//           <Button
//             key={`page-${i}`}
//             variant={currentPage === i ? 'default' : 'outline'}
//             onClick={() => setCurrentPage(i)}
//           >
//             {i}
//           </Button>,
//         );
//       }
//       return pages;
//     }

//     // Always show first page
//     pages.push(
//       <Button
//         key="page-1"
//         variant={currentPage === 1 ? 'default' : 'outline'}
//         onClick={() => setCurrentPage(1)}
//       >
//         1
//       </Button>,
//     );

//     // Calculate middle pages
//     let startPage: number;
//     let endPage: number;

//     if (currentPage <= 3) {
//       startPage = 2;
//       endPage = 4;
//       pages.push(
//         ...Array.from({ length: endPage - startPage + 1 }, (_, idx) => (
//           <Button
//             key={`page-${startPage + idx}`}
//             variant={currentPage === startPage + idx ? 'default' : 'outline'}
//             onClick={() => setCurrentPage(startPage + idx)}
//           >
//             {startPage + idx}
//           </Button>
//         )),
//       );
//       pages.push(
//         <Button key="ellipsis-1" variant="ghost" disabled>
//           ...
//         </Button>,
//       );
//     } else if (currentPage >= totalPages - 2) {
//       pages.push(
//         <Button key="ellipsis-1" variant="ghost" disabled>
//           ...
//         </Button>,
//       );
//       startPage = totalPages - 3;
//       endPage = totalPages - 1;
//       pages.push(
//         ...Array.from({ length: endPage - startPage + 1 }, (_, idx) => (
//           <Button
//             key={`page-${startPage + idx}`}
//             variant={currentPage === startPage + idx ? 'default' : 'outline'}
//             onClick={() => setCurrentPage(startPage + idx)}
//           >
//             {startPage + idx}
//           </Button>
//         )),
//       );
//     } else {
//       pages.push(
//         <Button key="ellipsis-1" variant="ghost" disabled>
//           ...
//         </Button>,
//       );
//       startPage = currentPage - 1;
//       endPage = currentPage + 1;
//       pages.push(
//         ...Array.from({ length: endPage - startPage + 1 }, (_, idx) => (
//           <Button
//             key={`page-${startPage + idx}`}
//             variant={currentPage === startPage + idx ? 'default' : 'outline'}
//             onClick={() => setCurrentPage(startPage + idx)}
//           >
//             {startPage + idx}
//           </Button>
//         )),
//       );
//       pages.push(
//         <Button key="ellipsis-2" variant="ghost" disabled>
//           ...
//         </Button>,
//       );
//     }

//     // Always show last page
//     pages.push(
//       <Button
//         key={`page-${totalPages}`}
//         variant={currentPage === totalPages ? 'default' : 'outline'}
//         onClick={() => setCurrentPage(totalPages)}
//       >
//         {totalPages}
//       </Button>,
//     );

//     return pages;
//   };

//   if (totalPages <= 1) return null;

//   return (
//     <div className="flex flex-col items-center space-y-4">
//       {/* <div className="text-sm text-muted-foreground">
//         Page {currentPage} of {totalPages}
//       </div> */}

//       <div className="flex items-center space-x-2">
//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
//           disabled={currentPage === 1}
//         >
//           <ChevronLeft className="h-4 w-4" />
//         </Button>

//         <div className="flex items-center space-x-2">{renderPageNumbers()}</div>

//         <Button
//           variant="outline"
//           size="icon"
//           onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
//           disabled={currentPage === totalPages}
//         >
//           <ChevronRight className="h-4 w-4" />
//         </Button>
//       </div>
//     </div>
//   );
// }
