'use client';

import { DataTable } from '@/components/ui/data-table';
import React from 'react';
import { columns } from './column';
import { demoData } from './data';

const Test = () => {
  return <DataTable columns={columns()} data={demoData} />;
};

export default Test;
