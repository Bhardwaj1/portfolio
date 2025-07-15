import './globals.css';

export const metadata = {
  title: 'Gaurav Bhardwaj | Portfolio',
  description: 'Frontend Developer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
