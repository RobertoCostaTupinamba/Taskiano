import { memo } from "react";

function LogoFC() {
  return (
    <svg fill="none" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#b)">
        <path
          d="m14.709 6.7102e-7c-1.1072-0.030251-2.2272 0.30533-3.1562 1.0957-2.9163 2.1292-2.2556 7.17 1.1094 8.4785 3.2656 1.6189 7.4592-1.3695 6.9961-4.9844-0.1405-2.6835-2.5135-4.5233-4.9492-4.5898h-1e-4zm8.4863 8.1562c-0.3036-0.00234-0.6254 0.07093-0.9707 0.24219-0.929 0.65104-1.2854 1.8805-1.9707 2.7773-0.5483 1.1405-1.6842 2.2056-2.2168 3.1328-1.6319 0.1341-3.2641 0.284-4.8965 0.4043-1.3029 0.0117-3.236 0.2116-3.0938 1.9746 0.0837 0.83 0.6818 1.662 1.5234 1.8457 2.9952-0.1374 5.9883-0.4712 8.9824-0.6914l4.0762 5.3926c0.6268 0.6772 1.0747 1.6001 1.7246 2.2559l-5.0312 4.4199c-0.1652 0.1204-0.2756 0.2258-0.3555 0.3242-0.7136 0.5724-1.1309 1.4997-0.7656 2.623l4.5137 9.7246-13.186 5.2929c-1.1375 0.6167-2.4118 0.7495-3.6504 0.373-1.7107-0.7284-3.879 0.8281-3.2988 2.7208 0.19417 1.5169 1.6756 2.6675 3.1836 2.0527l39.912-15.674c2.6152-0.412 1.4945-4.6401-0.9746-3.5898l-17.506 7.0253-3.4297-7.4297c3.2902-2.7592 6.4337-5.6898 9.6582-8.5254 1.0185-1.1353 0.5356-2.8337-0.4902-3.8281-1e-4 -0.0099 3e-4 -0.0192 0-0.0293l-0.8379-1.0059c3.6302-0.0264 7.2605-0.0536 10.891-0.08 0.0527 0.0183 0.1101 0.0308 0.168 0.0429 0.0047 0.2871 9e-3 0.5743 0.0136 0.8614 0.2998 1.3931 0.6698 0.0367 0.6153-0.836 1.0617-0.101 2.1669-0.8394 0.7246-1.5078l-0.7911 0.0058c0.0179-0.7272-0.026-1.4047-0.6035-0.957 0.0053 0.3203 0.0104 0.6406 0.0157 0.9609l-12.217 0.0899-1.287-1.5449 15.633-0.1133c0.0523 0.0182 0.1106 0.0309 0.1679 0.043 0.0047 0.2871 0.0089 0.5742 0.0137 0.8613 0.2996 1.3927 0.6714 0.0387 0.6172-0.834 1.0617-0.101 2.167-0.8413 0.7246-1.5098-0.2643 0.0019-0.5287 0.0039-0.793 0.0059 0.0178-0.7265-0.0245-1.4042-0.6015-0.957 0.0053 0.3203 0.0103 0.6406 0.0156 0.9609-5.6529 0.0412-11.306 0.0838-16.959 0.125l-4.166-5c-0.8157-0.98874-1.7664-2.4157-3.082-2.4258l3e-4 3.8e-4z"
          fill="url(#a)"
        />
      </g>
      
      <defs>
        <linearGradient
          id="a"
          x1="21.943"
          x2="25.077"
          y1="8.2722"
          y2="46.508"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BD93F9" offset="0" />
          <stop stopColor="#FFB86C" offset="1" />
        </linearGradient>

        <clipPath id="b">
          <rect width="54" height="54" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
}

const Logo = memo(LogoFC);
export default Logo;
