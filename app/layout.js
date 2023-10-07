import Footer from '@/components/Footer';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
