import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>

      {/* Container divs texto e foto */}
      <div className="flex px-44 py-30 justify-between items-center">
        {/* Container texto */}
        <div className="flex-column pr-50">
          <h1 className="text-5xl">Daniel é um <span className="text-[#C778DD]">Dev Backend</span> com Experiência na área <span className="text-[#C778DD]">DevSecOps</span></h1>
          <h2 className="text-2xl text-[#ABB2BF]">Dedicado, focado em construir APIs escaláveis e soluções seguras.</h2>
          <button className="p-1 border-[1px] border-[#C778DD] text-2xl">Contate-me !!</button>
        </div>
        {/* Container foto minha */}
        <div className="">
          <Image 
            src="/daniel.png" 
            alt="Foto daniel"
            width={900}
            height={0}
          />

        </div>
      </div>
      <Footer/>
    </div>
  );
}
