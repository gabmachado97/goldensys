import React, { useRef } from "react";

import Image from 'next/image'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

  
const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

interface SolutionsCardProps {
    styleProps: {
      backgroundImage: any;
      title: string;
      msg: string;
      sources: any[];
    };
  //children: React.ReactNode;
}
  

const TiltCard: React.FC<SolutionsCardProps> = ({ styleProps }) => {
    const { backgroundImage, title, msg, sources } = styleProps;


    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ref.current) return [0, 0];

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };


    return (
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transformStyle: "preserve-3d",
            transform, 
          }}
          className="relative bg-no-repeat bg-[length:100%_100%] h-460 w-380 rounded-xl bg-gradient-to-br from-indigo-300 to-violet-300"
        >
         <Image className="w-full h-full" src={backgroundImage} 
                width={360} height="462" alt="bgImage" 
                style={{
                    transformStyle: "preserve-3d",
                     
                  }}/>

        
          <div
            style={{
              transform: "translateZ(75px)",
              transformStyle: "preserve-3d",
            }}
            className="absolute inset-4 flex items-end justify-start rounded-xl border-2 border-white shadow-lg"
          >

        {sources.map((logo, index) => (
            <Image className="md:max-w-none absolute right-5 transform animate-float" src={logo} width={40} height="44" alt="Element" style={{ top: `${90 - index * 10}%` }}/>
        ))}


        <div className="flex flex-col">
            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className="custom-label ml-5 text-white text-4xl font-bold"
            >
              {title}
            </p>

            <p
              style={{
                transform: "translateZ(50px)",
              }}
              className="custom-label mb-2 text-white text-lg"
            >
              {msg}
            </p>
        </div>
          </div>
        </motion.div>
      );
}

export default TiltCard