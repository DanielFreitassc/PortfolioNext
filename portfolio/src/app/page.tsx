import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header"
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header/>

      {/* Container divs texto e foto */}
      <div className="flex flex-col lg:flex-row px-25 max-[999px]:px-5 py-10 lg:py-30 justify-between items-center">
        {/* Container texto */}
        <div className="flex flex-col pr-12 max-[999px]:pr-0 max-w-[50%] max-[999px]:max-w-[100%]">
          <h1 className="text-[3.6rem] max-[999px]:text-[1.5rem]">
            Daniel é um <span className="text-[#C778DD]">Dev Backend</span> com Experiência na área <span className="text-[#C778DD]">DevSecOps</span>
          </h1>
          <h2 className="text-2xl max-[999px]:text-[1rem]text-[#ABB2BF]">
            Dedicado, focado em construir APIs escaláveis e soluções seguras.
          </h2>
          <button className="my-10 p-1 w-50 border-[1px] border-[#C778DD] text-[1.2rem]">
            Contate-me !
          </button>
        </div>
        {/* Container imagem*/}
        <div className="flex flex-col items-center max-w-[50%] max-[999px]:max-w-[100%]">
          <Image 
            src="/daniel.png" 
            alt="Foto daniel"
            width={400}
            height={0}
            className="w-full h-auto"
          />
          <div className="flex items-center justify-center text-[1.2rem] max-[999px]:text-[1rem] text-[#ABB2BF] mx-10 max-[999px]:mx-1 gap-x-2 p-1.5 border-[1px] border-brand-gray">
            <div className="relative h-4 w-4">
              <Image
                src="/Rectangle.png"
                alt="Foto de quadrado"
                fill
                className="object-contain"
              />
            </div>
            Atuamente trabalhando em <span className="text-[#C778DD]">CSIRT/SATC</span>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
