import Image from 'next/image';
import BgImg from '@images/main-bg1.jpg';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="relative hidden lg:block lg:w-[60%]">
        <Image
          src={BgImg}
          alt="Office background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-orange-500/20" />
      </div>
      {children}
    </div>
  );
}
