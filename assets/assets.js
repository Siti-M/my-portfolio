import user_image from './user-image.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import { faHtml5, faCss3Alt, faPhp, faJs, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const assets = {
    user_image,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    faArrowRight
};

export const workData = [
    {
        title: ' Inventory Management System',
        description: [
            'Web-based system for optimizing network infrastructure management.',
            'Integrated mapping tool for precise asset tracking and visualization.'
        ],
        bgImage: '/work-1.png',
        detail:['CodeIgniter 3', 'PostgreSQL', 'HTML/CSS', 'Leaflet.js'],
    },
    {
        title: 'Notes App (Backend)',
        description: [
            'a RESTful Notes-App built with Hapi framework, enabling Create, Read, Update, and Delete (CRUD) operations.',
            'Deployed on AWS for scalability, with API functionality verified via Postman'
        ],
        bgImage: '/work-2.png',
        detail:['Hapi.js', 'Node.js','JavaScript', 'REST API', 'Postman'],
    },
    {
        title: 'Malaria App Detection',
        description: [
            'Detect the presence of malaria parasites in blood smear images.',
            'Analys blood smear images using machine learning tecniques with 93.25% accuracy.'
        ],
        bgImage: '/work-3.png',
        detail:['Python', 'Streamlit'],
    },
];

export const skills = [
    { title: 'HTML', icon: faHtml5 },
    { title: 'CSS', icon: faCss3Alt },
    { title: 'PHP', icon: faPhp },
    { title: 'JavaScript', icon: faJs },
    { title: 'Python', icon: faPython },
    { title: 'MySql', icon: faDatabase },
  ];
  
  export const education = [
    "Bachelor's Degree in Information Technology",
    "UPN Veteran Yogyakarta",
    "Graduated: 2024",
    "GPA: 3.57/4.00",
  ];
  
  export const certification = [
    {
      title: "Cloud Practitioner Essentials (Belajar Dasar AWS Cloud) - Dicoding",
      link: "https://dicoding.com/certificates/07Z64W0MRPQR",
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript - Dicoding",
      link: "https://dicoding.com/certificates/N9ZO97V9YXG5",
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript - Dicoding",
      link: "https://dicoding.com/certificates/N9ZO97V9YXG5",
    },
    {
      title: "Belajar Dasar AI - Dicoding",
      link: "https://www.dicoding.com/certificates/2VX3K14KJXYQ",
    },
    {
      title: "Software Development: Database Programming - BNSP (LSP TIK)",
      link: "#", 
    },
];
  