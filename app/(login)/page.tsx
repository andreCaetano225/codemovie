import Image from "next/image";
import { FormLogin } from "../../components/formLogin";

export default function Home() {
  return (
    <div className=" h-[85%] bg-black relative">
      <div className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/bg-movies.png"
          alt="Background"
          fill
          className="object-cover z-0"
          priority
        />
        <div className="absolute inset-0  bg-gradient-to-b from-black/70 via-black/70 to-black" />
        <FormLogin />
      </div>
    </div>
  );
}
