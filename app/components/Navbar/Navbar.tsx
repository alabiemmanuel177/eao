"use client";
export default function Nav() {
  return (
    <nav className="py-[25px] max-w-[1200px] items-start flex w-full custom-below-1024:max-w-[92%] slide-up">
      <div className="logo">
        <p className="text-[24px] font-LufgaBlack">EAO</p>
        <p className="text-[16px] font-LufgaMedium font-normal text-[#666666] leading-[1.4em]">
          Software Engineer
        </p>
      </div>
    </nav>
  );
}
