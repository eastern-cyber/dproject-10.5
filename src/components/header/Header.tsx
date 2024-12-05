import Image from "next/image";
import dProjectIcon from "@public/Logo_DProject.svg";
import { title } from "process";

// type HeaderProps = {
//     title: string;
//     subtitle: string;
// }

// export function Header(props: HeaderProps) {
//     return (
//         <header className="flex flex-col items-center mb-20 md:mb-20">
//           <Image 
//             src={dProjectIcon} 
//             alt="dProject" 
//             width={160}
//           />
//           <p>&nbsp;</p>
//           <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
//             {props.title}
//           </h1>
//           <p>
//             {props.subtitle}
//           </p>
//         </header>
//       )
// }

export function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={dProjectIcon}
        alt="dProject"
        className="size-[150px] md:size-[150px] mb-[35px] md:mb-[20px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        <span className="inline-block text-blue-500"> dProject </span>
        &nbsp;&nbsp;
        <span className="inline-block -skew-x-6"> Login </span>
        &nbsp;&nbsp;
        <span className="text-zinc-300 inline-block mx-1"> + </span>
        &nbsp;&nbsp;
        <span className="inline-block -skew-x-6"> Register </span>
      </h1>

      <p className="text-zinc-300 text-base">
        ใช้เบอร์โทรศัทพ์มือถือรับ{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
          OTP
        </code>เพื่อเข้าใช้งาน{" "}
        
      </p>
    </header>
  );
}