import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function PageWrapper({ children }: Props) {
  return (
    <main className="mx-auto h-[calc(100%-60px)] w-[96%] bg-white pt-[60px] 2xl:w-[1440px]">
      {children}
    </main>
  );
}
