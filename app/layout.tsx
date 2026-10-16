import React from 'react';

export const metadata = {
  title: 'RUTAN KELAS IIB SIBUHUAN',
  description: 'Portal Resmi Pelayanan Publik Rutan Kelas IIB Sibuhuan',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
