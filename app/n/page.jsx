// import Email from '@/components/n/EnterEmail';
// import Footer from '@/components/n/Footer';

// export default function Home() {
//   return (
//     <div className=" relative z-10 flexBetween flex-col w-full h-screen  pt-5   overflow-x-hidden">
//       <Email />
//       <Footer />
//     </div>
//   );
// }

'use client';
import Footer from '@/components/n/Footer';
import Quiz from '@/components/n/Quiz';
import WithAuth from '@/components/n/WithAuth';
const Home = () => {
  return (
    <div className=" relative z-10  flex justify-between items-center max-[800px]:justify-center flex-col w-full min-h-screen   overflow-hidden">
      <Quiz />
      <Footer />
    </div>
  );
};

export default Home;
