import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-[1200px] items-center flex w-full flex-col custom-below-1024:max-w-[92%]">
      <div className="w-full flex flex-col items-center slide-up">
        <h1 className="font-LufgaBold text-[48px] tracking-[-0.03em] m-0 p-0 leading-[1.2em] font-normal custom-below-425:text-[28px] custom-below-425:mt-6">
          Emmanuel Alabi Olasubomi
        </h1>
      </div>
      <div className="flex flex-row max-w-[800px] w-full justify-between items-start mt-[70px] custom-below-425:mt-14 custom-below-425:flex-col slide-up">
        <div
          className="h-[490px] w-[300px] custom-below-425:mb-14"
          style={{
            border: "1px solid rgb(196, 196, 196)",
            backgroundSize: "16px 16px",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0px, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 50%)",
          }}
        ></div>
        <div className="w-[400px] custom-below-1024:w-[368px] slide-up">
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            I am a software engineer and founder with a background in computer
            science and a passion for creating innovative software solutions. I
            hold a BSc (Hons) in Software Engineering from{" "}
            <Link target="_blank" href="https://babcock.edu.ng">
              <span className="text-[#002ee6] font-LufgaMedium text-[18px] custom-below-425:text-[16px] cursor-pointer hover:line-through">
                Babcock University,
              </span>
            </Link>
            where I developed a robust foundation in full-stack and mobile
            development, system architecture, and cloud computing.
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Currently, I work extensively with scalable backend systems
            (API/Microservices/DB) and have deep expertise in Fullstack
            Development for both web and mobile platforms, including Native,
            React Native, and SwiftUI. My projects emphasize impressive UI, high
            performance, and scalable backend systems, with some applications
            integrating advanced technologies such as machine learning.
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Another of many technical skillsets is Fullstack Development - (Web
            + Mobile - Native, ReactNatve & SwiftUI) - creating impressive (UI),
            Fast (Performance) and Scalable (Backend) applications, some even
            integrated with machine learning systems.{" "}
            <Link target="_blank" href="https://github.com/alabiemmanuel177/">
              <span className="text-[#002ee6] font-LufgaMedium text-[18px] custom-below-425:text-[16px] cursor-pointer hover:line-through">
                @alabiemmanuel177
              </span>
            </Link>
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Looking ahead, I am eager to dive deeper into the fields of Machine
            Learning and Cyber Security, continually expanding my skill set and
            exploring new technological frontiers.
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            When I&apos;m not coding, I enjoy playing soccer, FIFA, and
            swimming. I am always eager to learn about the latest advancements
            in technology and continuously improve my skills.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
