import React from 'react';
import { AiOutlineMobile } from 'react-icons/ai';
import { BsTerminal } from 'react-icons/bs';
import { GoBrowser, GoChecklist } from 'react-icons/go';

const careerInfo = [
  {
    id: 1,
    icon: <AiOutlineMobile />,
    title: 'Desarrollo Móvil',
    description:
      'Este es un camino con el que me he cruzado muchas veces en mi carrera y de a poco se ha ido convirtiendo en una de mis áreas de desarrollo favoritas.',
    knowledgeList: 'Ionic, Flutter, Typescript, JavaScript, Dart, Cordova',
  },
  {
    id: 2,
    icon: <GoBrowser />,
    title: 'Desarrollo Frontend',
    description:
      'Probablemente es el área en la que más he trabajado como desarrollador de software y por ello, es el área en la más tengo expertise.',
    knowledgeList:
      'HTML5, CSS3, JavaScript, TypeScript, JQuery, Angular, ReactJs, Redux, C#, ASP.NET, Chat.js',
  },
  {
    id: 3,
    icon: <BsTerminal />,
    title: 'Desarrollo Backend',
    description:
      'Es mi campo de desarrollo favorito, según yo, es donde ocurre la magia, la creatividad siendo aplicada a detalles imperceptibles pero fundamentales.',
    knowledgeList:
      'JavaScript, NodeJs, ExpressJs, TypeScript, Nest, Python, Django, Java, SprintBoot, PHP, Laravel, C#, ASP.NET, MongoDB, MySQL, PostgreSQL.',
  },
  {
    id: 4,
    icon: <GoChecklist />,
    title: 'Otros',
    description:
      'Herramientas complementarias: despliegue de software, inteligencia artifical, análisis de datos, manejo de versiones, etc.',
    knowledgeList:
      'Terminal, Python, Pandas, MatPlotLib, Tensorflow, SKLearn, PowerBI, Tableau, Docker, Git, Github, Gitlab, C, CKAN, SAP',
  },
];

export default careerInfo;
