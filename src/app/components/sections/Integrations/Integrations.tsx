import { LogoMarquee } from "./LogoMarquee";
import { Mona_Sans } from "next/font/google";

const MonaSans = Mona_Sans({ subsets: ["latin"] });

const Integrations = () => {
  return (
    <section className={`${MonaSans.className} bg-white  px-4`}>
      <div className="max-w-12xl mx-auto text-center">
        <h2 className="text-[18px]  font-[400] text-gray-800 tracking-tight">
          Connect with{" "}
          <span className="text-[#E11D48] font-[500]">1300+ powerful integrations</span>{" "}
          effortlessly.
        </h2>
        
        <div className="mt-6">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
};

export default Integrations;