// import Quiz from "@/components/Quiz";
// export default function Home() {
//   return (
//     <div className="main_bg w-screen">
//       <Quiz />
//     </div>
//   );
// }
"use client";
import Quiz from "@/components/Quiz";
import WithAuth from "@/components/WithAuth";
const Home = () => {
  return (
    <div className="main_bg w-screen">
      <Quiz />
    </div>
  );
};

export default WithAuth(Home);
