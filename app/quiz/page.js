'use client';
import Footer from '@/components/Footer';
import Quiz from '@/components/Quiz';
import WithAuth from '@/components/WithAuth';
const Home = () => {
  return (
    <div className=" relative z-10  flex justify-between items-center max-[800px]:justify-center flex-col w-full min-h-screen   overflow-hidden">
      <Quiz />
      {/* <Footer /> */}
    </div>
  );
};

export default WithAuth(Home);
