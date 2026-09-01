import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nuestro amor cumple veinticinco',
  description: 'Invitación a nuestra celebración de bodas de plata · 20 de diciembre de 2026',
  openGraph: {
    title: 'Nuestro amor cumple veinticinco',
    description: '20 · 12 · 2026 · Ciudad Guzmán, Jalisco',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
