export default function About() {
  return (
    <div className="max-w-[1200px] items-center flex w-full flex-col custom-below-1024:max-w-[92%]">
      <div className="w-full flex flex-col items-center">
        <h1 className="font-LufgaBold text-[48px] tracking-[-0.03em] m-0 p-0 leading-[1.2em] font-normal custom-below-425:text-[28px] custom-below-425:mt-6">
          Emmanuel Alabi Olasubomi
        </h1>
      </div>
      <div className="flex flex-row max-w-[800px] w-full justify-between items-center mt-[70px] custom-below-425:mt-14 custom-below-425:flex-col">
        <div
          className="h-[490px] w-[300px] custom-below-425:mb-14"
          style={{
            border: "1px solid rgb(196, 196, 196)",
            backgroundSize: "16px 16px",
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0px, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 50%)",
          }}
        ></div>
        <div className="w-[400px] custom-below-1024:w-[368px]">
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            I am a software engineer with a background in computer science and
            mathematics. I am currently a undergraduate student at Morgan State
            University, pursuing a Bachelors degree in Computer Science with a
            focus on Artificial Intelligence and Deep Learning.
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Currently, I mainly work with Core ML + Scalable Backend Systems
            (API/MicroServices/DB).
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Another of many technical skillsets is Fullstack Development - (Web
            + Mobile - Native, ReactNatve & SwiftUI) - creating impressive (UI),
            Fast (Performance) and Scalable (Backend) applications, some even
            integrated with machine learning systems.
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Big fan of opensource development, i have built several libraries,
            modules, packages & tools, in database, networking systems,
            algorithms, web-frameworks & machine learning/ai fields all
            opensourced Github - @teddyoweh↗
          </p>
          <p className="mb-[10px] font-LufgaMedium text-[#666666] text-[16px]">
            Die hard ping pong player and leetcode solver.
          </p>
        </div>
      </div>
    </div>
  );
}
