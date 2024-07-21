import {FaHome,FaUser,FaFolderOpen,FaEnvelopeOpen,FaGraduationCap,FaCode} from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg'
import Work2 from'./assets/project-3.jpeg'
import Work3 from'./assets/project-2.jpeg'
import Work4 from'./assets/project-4.jpg'


import Theme1 from'./assets/purple.png';
import Theme2 from'./assets/red.png'
import Theme3 from'./assets/blueviolet.png';
import Theme4 from'./assets/blue.png';
import Theme5 from'./assets/goldenrod.png';
import Theme6 from'./assets/magenta.png';
import Theme7 from'./assets/yellowgreen.png';
import Theme8 from'./assets/orange.png';
import Theme9 from'./assets/green.png';
import Theme10 from'./assets/yellow.png';

export const links=[
    {
        id:1,
        name:'Home',
        icon:<FaHome className='nav__icon'/>,
        path:'/'
    },

    {
        id:2,
        name:'About',
        icon:<FaUser className='nav__icon'/>,
        path:'/about'
    },
    
    {
        id:3,
        name:'Portfolio',
        icon:<FaFolderOpen className='nav__icon'/>,
        path:'/portfolio'
    },

    
    {
        id:4,
        name:'Contact',
        icon:<FaEnvelopeOpen className='nav__icon'/>,
        path:'/contact'
    } 
];


export const personalInfo=[
    {
        id:1,
        title:'First Name : ',
        description:"Manish",
    },
    {
        id:2,
        title:'Last Name: ',
        description:"Kumar",
    },
    {
        id:3,
        title:'Age : ',
        description:'21 Years',
    },
    {
        id:4,
        title:'Nationality : ',
        description:'India'
    },
    {
        id:5,
        title:'Address : ',
        description:'Bihar'
    },
    {
        id:6,
        title:'Phone : ',
        description:'+91 9262556583'
    },
    {
        id:7,
        title:'Email : ',
        description:'mk7367884@gmail.com'
    },
    {
        id:7,
        title:'LinkedIn : ',
        description:'www.linkedin.com/in/manishkumar77'
    },
    {
        id:8,
        title:'Languages : ',
        description:'Hindi, English'
    },
    
];
export const stats=[
    {
        id:1,
        no:"5+",
        title:'Completed Project'
    },
    {
        id:2,
        no:"1 Month",
        title:'Virtual Internship'
    },
];

export const skills=[
    {
        id:1,
        title:"Html",
        percentage:'79',
    },
    {
        id:2,
        title:"Css",
        percentage:'75',
    },
    {
        id:3,
        title:"Javscript",
        percentage:'89',
    },
    {
        id:4,
        title:"React",
        percentage:'82',
    },
    {
        id:5,
        title:"MongoDB",
        percentage:'84',
    },
    {
        id:6,
        title:"NodeJs",
        percentage:'80',
    },
];


export const resume=[
    {
        id:1,
        category:"Education",
        icon:<FaGraduationCap/>,
        year:'2018',
        title:'10th<span> D.A.V Public School Cantonment Area Gaya</span>'
    },

    {
        id:2,
        category:"Education",
        icon:<FaGraduationCap/>,
        year:'2020',
        title:'Intermediate <span> R.l.S.Y.Inter College Gaya</span>'
    },

    {
        id:3,
        category:"Certification",
        icon:<FaGraduationCap/>,
        year:'2022',
        title:'Coursera<span> Introduction to Cloud Computing</span>'
    },
    {
        id:4,
        category:"Certification",
        icon:<FaGraduationCap/>,
        year:'2023',
        title:'BHARAT INTERN<span> FUll Stack Web Development</span>'
    },

    
];

export const portfoli=[
    {
        id:1,
        img:Work1,
        title:'Landing page',
        details:[
            {
                icon:<FiFileText/>,
                title:'project : ',
                desc:'WebPage'
            },
            {
                icon:<FaCode/>,
                title:'Language : ',
                desc:'React js'
            },
        ]

    },
    {
        id:2,
        img:Work2,
        title:'Weather App',
        details:[
            {
                icon:<FiFileText/>,
                title:'project : ',
                desc:'Website'
            },
            {
                icon:<FaCode/>,
                title:'Language : ',
                desc:'React js,Weather Api'
            },
        ],
        
    },
    {
        id:3,
        img:Work3,
        title:'Dice Game',
        details:[
            {
                icon:<FiFileText/>,
                title:'project : ',
                desc:'Dice Game '
            },
            {
                icon:<FaCode/>,
                title:'Language : ',
                desc:'ReactJs'
            },
        ],
        
    },

    {
        id:4,
        img:Work4,
        title:'Project Management Tool',
        details:[
            {
                icon:<FiFileText/>,
                title:'project : ',
                desc:'Project Management Tool with admin panel'
            },
            {
                icon:<FaCode/>,
                title:'Language : ',
                desc:'NodeJs,MongoDb,Html,Css'
            },
        ],
        
    },

];

export const themes=[
    {
        id:1,
        img:Theme1,
        color:'hsl(252, 35%,51%)'
    },
    {
        id:2,
        img:Theme2,
        color:'hsl(4, 93%, 54%)'
    },
    {
        id:3,
        img:Theme3,
        color:'hsl(271,76%,53%)'
    },
    {
        id:4,
        img:Theme4,
        color:'hsl(225,73%,57%)'
    },
    {
        id:5,
        img:Theme5,
        color:'hsl(43,74%,49%)'
    },
    {
        id:6,
        img:Theme6,
        color:'hsl(339,81%,66%)'
    },
    {
        id:7,
        img:Theme7,
        color:'hsl(80,61%,50%)'
    },
    {
        id:8,
        img:Theme8,
        color:'hsl(19,96%,52%)'
    },
    {
        id:9,
        img:Theme9,
        color:'hsl(120, 100%, 50%)'
    },
    {
        id:10,
        img:Theme10,
        color:'hsl(52, 94.48818897637796%, 49.80392156862745%)'
    },
];



