export default function Home() {
  return (
    <div className="max-w-[1200px] items-start flex w-full flex-col mt-10 custom-below-1024:max-w-[92%] custom-below-425:mt-6 custom-below-375:mt-0 bottomnav slide-up">
      <div>
        <h1 className="font-LufgaBold text-[48px] tracking-[-0.03em] m-0 p-0 leading-[1.2em] font-normal custom-below-425:text-[32px]">
          Emmanuel <br /> Alabi
          <br />
          Olasubomi
        </h1>
      </div>
      <p className="text-[#666666] font-LufgaBold text-[35px] mt-[20px] font-normal custom-below-425:text-[20px]">
        Knowledge is accumulated, intelligence is refined, and understanding is perpetually evolving.
      </p>
      <p className="text-[#666666] font-LufgaMedium text-[20px] mt-[20px] tracking-[-0.02em] leading-[1.4em] font-normal custom-below-425:text-[16px]">
        Software Engineer - Building Models, Backend +
        Infrastructure Systems & Web + Mobile Apps.
      </p>
      <p className="text-[#666666] font-LufgaMedium text-[20px] mt-[20px] tracking-[-0.02em] leading-[1.4em] font-normal custom-below-425:text-[16px]">
         CEO of{" "}
        <span className="text-[#002ee6] cursor-pointer hover:line-through">
          Techgate
        </span>
        , Founder of{" "}
        <span className="text-[#002ee6] cursor-pointer hover:line-through">
          Acadu
        </span>
        , Tech Consultant to{" "}
        <span className="text-[#002ee6] cursor-pointer hover:line-through">
          RoyalGate
        </span>
      </p>
    </div>
  );
}
