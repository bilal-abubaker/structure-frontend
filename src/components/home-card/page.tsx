// 'use client';

// import { useState } from 'react';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { AppointmentHeader } from '@/components/appointment-header';
// import { ProgressSteps } from '@/components/progress-steps';
// import { EventSidebar } from '@/components/event-sidebar';
// import { TimeSlot } from '@/components/time-slot';
// import { AppointmentForm } from '@/components/appointment-form';
// import { ArrowLeft } from 'lucide-react';
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select';
// import HomeLayout from '@/app/(Home Pages)/layout';

// const steps = [
//   'Choose date & time',
//   'Add you information',
//   'Verify your contact',
//   'Review Details',
// ];

// // Sample date options
// const dateOptions = [
//   { value: '2024-11-20', label: 'Wednesday, 20th November 2024' },
//   { value: '2024-11-21', label: 'Thursday, 21st November 2024' },
//   { value: '2024-11-22', label: 'Friday, 22nd November 2024' },
// ];

// // Sample time slots (you would typically fetch these from an API based on the selected date)
// const timeSlotsByDate = {
//   '2024-11-20': [
//     { startTime: '09:00 AM', endTime: '09:15 AM', seats: 5 },
//     { startTime: '09:15 AM', endTime: '09:30 AM', seats: 5 },
//     { startTime: '09:30 AM', endTime: '09:45 AM', seats: 5 },
//   ],
//   '2024-11-21': [
//     { startTime: '10:00 AM', endTime: '10:15 AM', seats: 5 },
//     { startTime: '10:15 AM', endTime: '10:30 AM', seats: 5 },
//     { startTime: '10:30 AM', endTime: '10:45 AM', seats: 5 },
//   ],
//   '2024-11-22': [
//     { startTime: '11:00 AM', endTime: '11:15 AM', seats: 5 },
//     { startTime: '11:15 AM', endTime: '11:30 AM', seats: 5 },
//     { startTime: '11:30 AM', endTime: '11:45 AM', seats: 5 },
//   ],
// };

// export default function AppointmentScheduler() {
//   const [currentStep, setCurrentStep] = useState(0);
//   const [selectedDate, setSelectedDate] = useState<string>();
//   const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>();

//   const handleNext = () => {
//     if (currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleNext();
//   };

//   const handleDateChange = (date: string) => {
//     setSelectedDate(date);
//     setSelectedTimeSlot(undefined);
//   };

//   return (
//     <HomeLayout>
//       <Card className="mx-auto grid h-[700px] w-full grid-cols-1 overflow-hidden md:grid-cols-[300px_1fr] lg:w-[80%] lg:grid-cols-[350px_1fr]">
//         <EventSidebar
//           title="Acme Diabetes Screening"
//           location="28260 Franklin Rd"
//           address="Southfield, MI 48034"
//           dateRange="Wednesday, 20th November 2024 to"
//           timeRange="November 30, 2024 12:00 AM to 05:00 PM"
//           selectedDate={selectedDate}
//         />

//         <div className="overflow-y-auto p-6">
//           <ProgressSteps steps={steps} currentStep={currentStep} />

//           {currentStep === 0 ? (
//             <div className="space-y-6">
//               <div>
//                 <h3 className="mb-4 text-lg font-medium">
//                   Select Date for Appointment
//                 </h3>
//                 <Select onValueChange={handleDateChange} value={selectedDate}>
//                   <SelectTrigger className="w-full">
//                     <SelectValue placeholder="Select a date" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {dateOptions.map((option) => (
//                       <SelectItem key={option.value} value={option.value}>
//                         {option.label}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>

//               {selectedDate && (
//                 <div>
//                   <h3 className="mb-4 text-lg font-medium">
//                     Select Time for Appointment
//                   </h3>
//                   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                     {timeSlotsByDate[selectedDate].map((slot, index) => (
//                       <TimeSlot
//                         key={index}
//                         startTime={slot.startTime}
//                         endTime={slot.endTime}
//                         seats={slot.seats}
//                         isSelected={selectedTimeSlot === `${index}`}
//                         onClick={() => setSelectedTimeSlot(`${index}`)}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : currentStep === 1 ? (
//             <AppointmentForm onSubmit={handleFormSubmit} />
//           ) : null}

//           <div className="mt-8 flex justify-between">
//             {currentStep > 0 && (
//               <Button
//                 variant="outline"
//                 onClick={handleBack}
//                 className="flex items-center gap-2"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//                 Back
//               </Button>
//             )}
//             <Button
//               className="ml-auto bg-blue-900 hover:bg-blue-800"
//               onClick={currentStep === 1 ? undefined : handleNext}
//               type={currentStep === 1 ? 'submit' : 'button'}
//               disabled={
//                 currentStep === 0 && (!selectedDate || !selectedTimeSlot)
//               }
//             >
//               Next
//             </Button>
//           </div>
//         </div>
//       </Card>
//     </HomeLayout>
//   );
// }
