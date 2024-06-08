"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Projects", to: "/projects" },
    { name: "Blog", to: "/blog" },
  ];
  return (
    <nav className="flex items-center max-w-[1200px] w-full justify-center opacity-[1] bottom-4 fixed custom-below-1024:max-w-[92%]">
      <div
        className="max-w-[520px] w-full bg-[#121212] h-[72px] rounded-2xl gap-[40px] flex flex-col overflow-hidden p-[20px] items-center content-center justify-center"
        style={{
          backdropFilter: "blur(10px)",
          boxShadow:
            "rgba(0, 0, 0, 0.15) 0px 0.706592px 0.706592px -0.625px, rgba(0, 0, 0, 0.144) 0px 1.80656px 1.80656px -1.25px, rgba(0, 0, 0, 0.138) 0px 3.62176px 3.62176px -1.875px, rgba(0, 0, 0, 0.127) 0px 6.8656px 6.8656px -2.5px, rgba(0, 0, 0, 0.105) 0px 13.6468px 13.6468px -3.125px, rgba(0, 0, 0, 0.05) 0px 30px 30px -3.75px, rgba(14, 63, 126, 0.04) 0px 0px 4px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(0, 0, 0, 0.25) 0px 8px 16px 0px, rgba(150, 150, 150, 0.15) 0px 0px 1px 1px inset",
        }}
      >
        <div className="opacity-[1] flex flex-row items-center content-center justify-between w-full gap-[20px]">
          <ul className="flex opacity-[1] content-center items-center justify-around m-0 p-0 relative flex-1 flex-row">
            {links.map((link) => (
              <Link href={link.to} key={link.name}>
                <span
                  className={`${
                    pathname === link.to ? "text-white" : "text-[#666666]"
                  } hover:text-[#fff] font-GraphikMedium text-[18px] cursor-pointer hover:line-through`}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
