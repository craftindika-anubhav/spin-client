import Email from "@/components/EnterEmail";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" relative z-10 flexBetween flex-col w-full h-screen    overflow-x-hidden">
      <Email />
      <Footer />
    </div>
  );
}
