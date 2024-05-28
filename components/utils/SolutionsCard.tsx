
import React from 'react';


import Arrow from '@/public/images/general/Arrow';
import ClipPath from '@/public/images/general/ClipPath';
import Image from 'next/image'
import { isNamedExportBindings } from 'typescript';


interface SolutionsCardProps {
    styleProps: {
      idService: string;
      title: string;
      text: string;
      backgroundUrl: any;
      iconUrl: any;
      imageUrl: any;
      whatWeDo: string;
      whyUs: string;
      platforms: any[];
    };
  //children: React.ReactNode;
}

const SolutionsCard: React.FC<SolutionsCardProps> = ({ styleProps }) => {
  const { idService, title, text, backgroundUrl, iconUrl, imageUrl, whatWeDo, whyUs, platforms } = styleProps;


  return (
  
    <div data-aos="flip-up" data-aos-duration="1500" className="flex flex-wrap gap-10 mb-10 relative clip-path-[polygon(0%_0%,_100%_0%,_calc(100%-40px)_40px,_0%_100%)]">
      <div
              className="bg-white hover:bg-gray-900 block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem] [transform-style:preserve-3d] transition-all duration-500 delay-200 hover:[transform:rotateY(180deg)] group"
              style={{
                clipPath: "url(#services)",
                 backgroundImage: `url(${backgroundUrl.src}`,
                
              }}
              key={idService}
            >
              <div id='sumaryCard' className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none transition-opacity duration-700 group-hover:opacity-0">
                  <h5 className="h4 mb-3">{title}</h5>
                  <p className="body-2 mb-6 text-n-3">{text}</p>
                  <div className="flex items-center mt-auto">
                    <Image
                      src={iconUrl}
                      width={48}
                      height={48}
                      alt={title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                      Ver mais
                    </p>
                    <Arrow />
                  </div>
              </div>


                {/* <div className="bg-yellow-400 absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" /> */}


                  <div className="absolute inset-0 [transform:rotateY(180deg)] opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    {imageUrl && (
                      <Image
                        src={imageUrl}
                        width={380}
                        height={362}
                        alt={title}
                        className="w-full h-full z-1 object-cover transition-opacity duration-500 group-hover:opacity-10"
                      />
                    )}

                <div id='backCard' className="absolute inset-0 flex flex-col z-10 p-[2.4rem] pointer-events-none">
                    <h5 className="h7 mb-2 text-white font-bold">O que fazemos?</h5>
                    <p className="body-2 mb-4 text-n-1 text-gray-300 text-sm">{whatWeDo}</p>
                    <h5 className="h7 mb-2 text-white font-bold">Por que nós?</h5>
                    <p className="body-2 mb-4 text-n-1 text-gray-300 text-sm">{whyUs}</p>
                    <h5 className="h7 mb-2 text-white font-bold">O que usamos?</h5>
                    <div className="flex gap-4">
                    {platforms.map((logo, index) => (
                          <Image
                            key={index}
                            src={logo}
                            width={27}
                            height={25}
                            alt={idService}
                          />
                    ))}
                    </div>
                  </div>

                  
              </div>

              


            </div>
            <ClipPath />
      
    </div>
  );
};

export default SolutionsCard;