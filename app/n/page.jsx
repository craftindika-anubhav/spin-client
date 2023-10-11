import Email from '@/components/n/EnterEmail';
import Footer from '@/components/n/Footer';

export default function Home() {
  return (
    <div className=" relative z-10 flexBetween flex-col w-full h-screen  pt-5   overflow-x-hidden">
      <Email />
      <Footer />
    </div>
  );
}
