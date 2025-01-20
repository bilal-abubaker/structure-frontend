import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { Suspense } from 'react';
import Loading from './loading';
import Head from 'next/head';

export const metadata = {
  title: 'CalenDax',
  description: 'Event Management System',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/public/images/calendax-logo-07.png" />
      </Head>
      <div className="min-h-screen bg-[hsl(var(--background))]">
        <Sidebar />
        <div
          className="transition-all duration-200 ease-in-out lg:pl-64 data-[sidebar-collapsed=true]:lg:pl-16"
          data-sidebar-collapsed="false"
        >
          <Header />
          <main className="p-4 lg:p-6">
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </main>
        </div>
      </div>
    </>
  );
}
