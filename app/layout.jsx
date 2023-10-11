import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
export const metadata = {
  title: 'Sementy Shop',
  description: 'Welcome to Spin the Wheel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
