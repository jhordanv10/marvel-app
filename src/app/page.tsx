import Image from "next/image";
import homeImage from "@assets/images/ironMan.png";

export default function Home() {
  return (
    <main className="h-screen">
      <Image src={homeImage} alt="imageHome" className="mx-auto " />
    </main>
  );
}
