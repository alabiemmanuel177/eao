import Image from "next/image";

export default function Project() {
  return (
    <div className="max-w-[1200px] items-center flex w-full flex-col mt-12 custom-below-1024:max-w-[92%]">
      <h1 className="font-LufgaBold text-[48px] tracking-[-0.03em] m-0 p-0 leading-[1.2em] font-normal slide-up1">
        Projects
      </h1>
      <p className="text-[#666666] text-center font-LufgaMedium text-[16px] mt-[20px] tracking-[-0.02em] leading-[1.4em] font-normal slide-up1">
        Every line of code is a step in a journey, where imagination meets logic
        <br /> to create the extraordinary. - Emmanuel Alabi Olasubomi
      </p>
      <div
        className="h-[330px] w-[796px] mt-[20px] rounded-[12px] custom-below-1280:w-[1120px] custom-below-1024:w-full"
        style={{
          border: "1px solid rgb(196, 196, 196)",
          backgroundSize: "16px 16px",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(180, 180, 180, 0.8) 0px, rgba(180, 180, 180, 0.8) 1px, rgba(255, 255, 255, 0.2) 0px, rgba(255, 255, 255, 0.2) 50%)",
        }}
      >
        <img
          decoding="async"
          sizes="min(min(min(100vw, 1200px) - 80px, 1800px), 1200px)"
          srcSet="https://framerusercontent.com/images/bvIIcaS56A8LIA3YQF2ExckSBYk.png?scale-down-to=512 512w,https://framerusercontent.com/images/bvIIcaS56A8LIA3YQF2ExckSBYk.png?scale-down-to=1024 1024w,https://framerusercontent.com/images/bvIIcaS56A8LIA3YQF2ExckSBYk.png 1680w"
          src="https://framerusercontent.com/images/bvIIcaS56A8LIA3YQF2ExckSBYk.png"
          alt=""
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            objectPosition: "center",
            objectFit: "cover",
            imageRendering: "auto",
          }}
          className="slide-up1"
        />
      </div>
      <div className="w-full flex items-center flex-col mt-[100px]">
        <div className="max-w-[1120px] w-full bg-[#e8ecef] flex items-center h-[51.2px] px-[32px] py-[16px] rounded-[8px]">
          <p className="text-16px font-LufgaMedium">Search</p>
        </div>
        <div className="w-full flex-wrap flex flex-row max-w-[1120px] mt-4">
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">All</p>
          </div>
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">
              Machine Learning / Artificial Intelligence
            </p>
          </div>
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">
              Backend / Microservice Systems
            </p>
          </div>
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">
              Frontend & UI Development
            </p>
          </div>
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">
              Full Stack Development
            </p>
          </div>
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">Mobile Development</p>
          </div>
          <div className="rounded-[8px] px-[16px] py-[12px] border-2 border-[#d1d1d1] border-solid mr-[20px] mb-4 hover:text-white hover:bg-black cursor-pointer">
            <p className="font-LufgaMedium text-[16px]">
              Libraries / Packages / Modules / Framework
            </p>
          </div>
        </div>

        <div className="max-w-[1200px] w-full flex items-center flex-col custom-below-1280:w-[1120px] custom-below-1024:w-full">
          <div className="mt-[70px]">
            <h1 className="font-LufgaBold text-[28px]">Acadu</h1>
            <p className="font-LufgaMedium text-[20px] text-[#666666]">
              Leveraged stochastic processes on networks using differential
              equations to determine disease susceptibility rates and recovery
              probabilities, employing sophisticated mathematical and
              epidemiological models for better analysis and modelling of
              infectious diseases spread.
            </p>
            <div className="flex flex-row font-LufgaMedium text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] custom-below-375:mt-4 text-[#002ee6] mt-8">
              <p className="mr-4">
                <a href="https://github.com/alabiemmanuel177/acadu">Demo</a>
              </p>
              <p>
                <a href="https://github.com/alabiemmanuel177/acadu">Github</a>
              </p>
            </div>
            <div className="flex flex-row font-LufgaBold text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] text-[#666666]">
              <p className="mr-4">Javascript</p>
              <p className="mr-4">Solidity</p>
              <p className="mr-4">Framer Motion</p>
            </div>
          </div>
          <div className="mt-[70px]">
            <h1 className="font-LufgaBold text-[28px]">Acadu</h1>
            <p className="font-LufgaMedium text-[20px] text-[#666666]">
              Leveraged stochastic processes on networks using differential
              equations to determine disease susceptibility rates and recovery
              probabilities, employing sophisticated mathematical and
              epidemiological models for better analysis and modelling of
              infectious diseases spread.
            </p>
            <div className="flex flex-row font-LufgaMedium text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] custom-below-375:mt-4 text-[#002ee6] mt-8">
              <p className="mr-4">
                <a href="https://github.com/alabiemmanuel177/acadu">Demo</a>
              </p>
              <p>
                <a href="https://github.com/alabiemmanuel177/acadu">Github</a>
              </p>
            </div>
            <div className="flex flex-row font-LufgaBold text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] text-[#666666]">
              <p className="mr-4">Javascript</p>
              <p className="mr-4">Solidity</p>
              <p className="mr-4">Framer Motion</p>
            </div>
          </div>
          <div className="mt-[70px]">
            <h1 className="font-LufgaBold text-[28px]">Acadu</h1>
            <p className="font-LufgaMedium text-[20px] text-[#666666]">
              Leveraged stochastic processes on networks using differential
              equations to determine disease susceptibility rates and recovery
              probabilities, employing sophisticated mathematical and
              epidemiological models for better analysis and modelling of
              infectious diseases spread.
            </p>
            <div className="flex flex-row font-LufgaMedium text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] custom-below-375:mt-4 text-[#002ee6] mt-8">
              <p className="mr-4">
                <a href="https://github.com/alabiemmanuel177/acadu">Demo</a>
              </p>
              <p>
                <a href="https://github.com/alabiemmanuel177/acadu">Github</a>
              </p>
            </div>
            <div className="flex flex-row font-LufgaBold text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] text-[#666666]">
              <p className="mr-4">Javascript</p>
              <p className="mr-4">Solidity</p>
              <p className="mr-4">Framer Motion</p>
            </div>
          </div>
          <div className="mt-[70px]">
            <h1 className="font-LufgaBold text-[28px]">Acadu</h1>
            <p className="font-LufgaMedium text-[20px] text-[#666666]">
              Leveraged stochastic processes on networks using differential
              equations to determine disease susceptibility rates and recovery
              probabilities, employing sophisticated mathematical and
              epidemiological models for better analysis and modelling of
              infectious diseases spread.
            </p>
            <div className="flex flex-row font-LufgaMedium text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] custom-below-375:mt-4 text-[#002ee6] mt-8">
              <p className="mr-4">
                <a href="https://github.com/alabiemmanuel177/acadu">Demo</a>
              </p>
              <p>
                <a href="https://github.com/alabiemmanuel177/acadu">Github</a>
              </p>
            </div>
            <div className="flex flex-row font-LufgaBold text-[20px] custom-below-375:text-[16px] custom-below-325:text-[14px] text-[#666666]">
              <p className="mr-4">Javascript</p>
              <p className="mr-4">Solidity</p>
              <p className="mr-4">Framer Motion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
