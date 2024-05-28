
import Image from 'next/image'

import mail from '@/public/images/contact/email.svg';
import wpp from '@/public/images/contact/wpp.svg';

export default function Contact() {
  return (
    <section id="contact">
      <div className="bg-gray-900 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative  rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden">
            <div className="relative flex flex-col lg:flex-row justify-between">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl lg:pr-8">
                <div data-aos-duration="1500" data-aos="zoom-y-out">
                  <h3 className="h2 text-white mb-2">Gostou do que viu?</h3>
                  <p className="text-gray-300 text-xl mb-6">Vamos conversar e desenvolver a sua solução <span className="font-bold text-white">juntos</span>.</p>
                </div>

                <div className="flex">
                  <div className="" data-aos-duration="3000" data-aos="zoom-out-right">
                    <Image
                        src={mail}
                        width={60}
                        height={60}
                        alt={"Email"}
                      />

                    <p className="text-gray-500 text-xs mt-3 font-bold">e-mail</p>
                    <p className="text-white text-sm font-bold">gabriel.heat97@gmail.com</p>

                  </div>

                  <div className="ml-8" data-aos-duration="3000" data-aos-offset="100" data-aos="zoom-out-left">
                    <Image
                        src={wpp}
                        width={46}
                        height={46}
                        alt={"Wpp"}
                        className="mt-1"
                      />

                    <p className="text-gray-500 text-xs mt-5 font-bold">telefone</p>
                    <p className="text-white text-sm font-bold">(47) 99759-1885</p>

                  </div>

                </div>

              </div>

              {/* CTA form */}
              <div className="w-full lg:w-1/2" data-aos-duration="3000" data-aos="fade-left"> {/* Adjusted width to take up half of the container */}
                <form className="flex flex-col lg:flex-col justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                  <input type="name" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 text-white placeholder-gray-500" placeholder="Seu nome..." aria-label="Seu nome..." />
                  <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 text-white placeholder-gray-500" placeholder="Seu email…" aria-label="Seu email…" />
                  <input type="phone" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 text-white placeholder-gray-500" placeholder="Seu telefone..." aria-label="Seu telefone..." />
                  <textarea rows={5} className="form-input h-32 w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-4 text-white placeholder-gray-500" placeholder="Mensagem…" aria-label="Mensagem…" />{/* <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Subscribe</a> */}
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 shadow" href="#0">Enviar</a>
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
