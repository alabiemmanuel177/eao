"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-[25px] max-w-[1200px] items-start flex w-full flex-col mt-[60px] mb-[80px] custom-below-425:mt-[30px] custom-below-1024:max-w-[92%]">
      <h1 className="font-LufgaBold text-[28px]">Contact Me</h1>
      <div className="mt-[20px]">
        <h2 className="font-LufgaBold text-[#666666] text-[20px] text-wrap custom-below-425:text-[16px]">
          Email
          <Link
            href="mailto:alabiemmanuel177@gmail.com"
            target="_blank"
            className="ml-[20px] custom-below-425:ml-2"
          >
            <span className="text-[#002ee6] font-LufgaMedium text-[18px] custom-below-425:text-[16px] cursor-pointer hover:line-through">
              alabiemmanuel177@gmail.com
            </span>
          </Link>
          {/* <Link
            href="mailto:alabi1845@student.babcock.edu.ng"
            target="_blank"
            className="ml-[20px]"
          >
            <span className="text-[#002ee6] font-LufgaMedium text-[18px] cursor-pointer hover:line-through">
              alabi1845@student.babcock.edu.ng
            </span>
          </Link> */}
        </h2>
      </div>
      <div className="mt-[15px]">
        <h2 className="font-LufgaBold text-[#666666] text-[20px] custom-below-425:text-[16px]">
          Socials
          <Link
            href="https://github.com/alabiemmanuel177"
            target="_blank"
            className="ml-[20px] custom-below-425:ml-2"
          >
            <span className="text-[#002ee6] font-LufgaMedium text-[18px] custom-below-425:text-[16px] cursor-pointer hover:line-through">
              Github
            </span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/emmanuel-alabi-5474501a9"
            target="_blank"
            className="ml-[20px] custom-below-425:ml-2"
          >
            <span className="text-[#002ee6] font-LufgaMedium text-[18px] custom-below-425:text-[16px] cursor-pointer hover:line-through">
              LinkedIn
            </span>
          </Link>
          <Link
            href="https://x.com/ManlikeEmma_"
            target="_blank"
            className="ml-[20px] custom-below-425:ml-2"
          >
            <span className="text-[#002ee6] font-LufgaMedium text-[18px] custom-below-425:text-[16px] cursor-pointer hover:line-through">
              Twitter
            </span>
          </Link>
        </h2>
      </div>
    </footer>
  );
}
