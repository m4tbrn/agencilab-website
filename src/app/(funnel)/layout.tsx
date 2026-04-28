import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function FunnelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="preconnect" href="https://app.iclosed.io" />
      <link rel="dns-prefetch" href="https://app.iclosed.io" />
      <link rel="preconnect" href="https://fast.vidalytics.com" />
      <link rel="dns-prefetch" href="https://fast.vidalytics.com" />
      {children}
    </>
  );
}
