import serviceIcon1 from '@/public/images/services/icon-1.svg';
import serviceIcon2 from '@/public/images/services/icon-2.svg';
import serviceIcon3 from '@/public/images/services/icon-3.svg';
import serviceIcon4 from '@/public/images/services/icon-4.svg';
import serviceIcon5 from '@/public/images/services/icon-5.svg';
import card1 from '@/public/images/services/card-1.svg';
import serviceImage1 from '@/public/images/services/photovoltaic-image.jpg';
import serviceImage2 from '@/public/images/services/transmission-line.jpg';
import serviceImage3 from '@/public/images/services/industry.jpg';
import serviceImage4 from '@/public/images/services/library.jpg';
import serviceImage5 from '@/public/images/services/programming.jpg';

import elipseLogo from '@/public/images/logos/elipse.png';
import sageLogo from '@/public/images/logos/sage.png';
import pythonLogo from '@/public/images/logos/python.png';
import javascriptLogo from '@/public/images/logos/javascript.png';
import qtLogo from '@/public/images/logos/qt.png';
import reactLogo from '@/public/images/logos/react.png';
import vbaLogo from '@/public/images/logos/vba.png';
import excelLogo from '@/public/images/logos/excel.png';
import etcLogo from '@/public/images/logos/etc.svg';

export const services = [
  {
    idService: "0",
    title: "SCADA Geradoras",
    text: "Desenvolvemos o SCADA para a sua usina ou subestação de acordo com as suas especificações. Utilizando um software de sua escolha ou que melhor se adeque aos requerimentos e orçamento.",
    backgroundUrl: card1,
    iconUrl: serviceIcon1,
    imageUrl: serviceImage1,
    whatWeDo: "Criamos, ampliamos ou utilizamos nosso padrão para o SCADA do seu projeto",
    whyUs: "Dominamos as principais plataformas do mercado. Podemos criar bibliotecas liberadas para você, assim você não ficará preso a um integrador para atualizações",
    platforms: [sageLogo, elipseLogo],
  },
  {
    idService: "1",
    title: "SCADA Transmissoras e Distribuidoras",
    text: "Seja um novo SCADA, ou ampliação com novos elementos, podemos te auxiliar no desenvolvimento dele para a sua subestação.",
    backgroundUrl: card1,
    iconUrl: serviceIcon2,
    imageUrl: serviceImage2,
    whatWeDo: "Criamos, ampliamos ou utilizamos nosso padrão para o SCADA do seu projeto",
    whyUs: "Dominamos as principais plataformas do mercado. Podemos criar bibliotecas liberadas para você, assim você não ficará preso a um integrador para atualizações",
    platforms: [sageLogo, elipseLogo],
  },
  {
    idService: "2",
    title: "SCADA Indústria",
    text: "Desenvolvemos o SCADA para a subestação da sua fábrica/indústria.",
    backgroundUrl: card1,
    iconUrl: serviceIcon3,
    imageUrl: serviceImage3,
    whatWeDo: "Criamos, ampliamos ou utilizamos nosso padrão para o SCADA do seu projeto",
    whyUs: "Dominamos as principais plataformas do mercado. Podemos criar bibliotecas liberadas para você, assim você não ficará preso a um integrador para atualizações",
    platforms: [sageLogo, elipseLogo],
  },
  {
    idService: "3",
    title: "Bibliotecas Elipse",
    text: "Você teve alguma ideia para sua aplicação Elipse? Precisa atualizá-lo para o tornar mais moderno e amigável? Ou até mesmo criar um padrão para futuros projetos? Nós fazemos para você.",
    backgroundUrl: card1,
    iconUrl: serviceIcon4,
    imageUrl: serviceImage4,
    whatWeDo: "Desenvolvemos as bibliotecas para a sua aplicação Elipse. ",
    whyUs: "Teve alguma ideia para seu projeto? Nós desenvolvemos ela e prestamos todo o suporte em como utilizá-la.",
    platforms: [elipseLogo],
  },
  {
    idService: "4",
    title: "Aplicações Customizadas",
    text: "Criamos uma aplicação para tirar do papel alguma ideia sua para melhorar o fluxo do trabalho, juntos entendemos a situação e decidimos a melhor forma de torná-la real.",
    backgroundUrl: card1,
    iconUrl: serviceIcon5,
    imageUrl: serviceImage5,
    whatWeDo: "Desenvolvemos uma solução utilizando a arquitetura/linguagem/software mais adequado ao problema",
    whyUs: "Teve alguma ideia de aplicação? Precisa automatizar algum serviço manual e monótono? Nós te auxiliamos no processo",
    platforms: [pythonLogo, javascriptLogo, reactLogo, qtLogo, vbaLogo, excelLogo, etcLogo],
  },
]