import bucket1 from "./assets/project-thumbnails/bucket/bucket1.png";
import bucket2 from "./assets/project-thumbnails/bucket/bucket2.png";
import bucket3 from "./assets/project-thumbnails/bucket/bucket3.png";
import bucket4 from "./assets/project-thumbnails/bucket/bucket4.png";

import finguard1 from "./assets/project-thumbnails/finguard/finguard1.png";
import finguard2 from "./assets/project-thumbnails/finguard/finguard2.png";
import finguard3 from "./assets/project-thumbnails/finguard/finguard3.png";
import finguard4 from "./assets/project-thumbnails/finguard/finguard4.png";

import homiest1 from "./assets/project-thumbnails/homiest/homiest1.png";
import homiest2 from "./assets/project-thumbnails/homiest/homiest2.png";
import homiest3 from "./assets/project-thumbnails/homiest/homiest3.png";
import homiest4 from "./assets/project-thumbnails/homiest/homiest4.png";
import homiest5 from "./assets/project-thumbnails/homiest/homiest5.png";
import homiest6 from "./assets/project-thumbnails/homiest/homiest6.png";
import homiest7 from "./assets/project-thumbnails/homiest/homiest7.png";

import plug1 from "./assets/project-thumbnails/plug/plug1.png";
import plug2 from "./assets/project-thumbnails/plug/plug2.png";
import plug3 from "./assets/project-thumbnails/plug/plug3.png";

import sms1 from "./assets/project-thumbnails/SMS/sms1.png";
import sms2 from "./assets/project-thumbnails/SMS/sms2.png";
import sms3 from "./assets/project-thumbnails/SMS/sms3.png";
import sms4 from "./assets/project-thumbnails/SMS/sms4.png";
import sms5 from "./assets/project-thumbnails/SMS/sms5.png";
import sms6 from "./assets/project-thumbnails/SMS/sms6.png";

import portfolio from "./assets/project-thumbnails/portfolio/portfolio.png";
import tictactoe from "./assets/project-thumbnails/tictactoe/tictactoe.png";

export const projects = [
  {
    title: "Homiest",
    description:
      "This a home service platform for hiring and recieving services at the comfort of your home. Users can hire service men and pay on hourly basis. I levereged ReactJs at the frontend for web, React Native for mobile version, StripeJS as payment gateway, NodeJS/Express for the server and MongoDB as database.",
    media: [
      homiest1,
      homiest2,
      homiest3,
      homiest4,
      homiest5,
      homiest6,
      homiest7,
    ],
    link: "https://github.com/mahdi7905/homiest",
  },
  {
    title: "Caplug",
    description:
      "This an e-commerce platform for traditional hausa caps. Users can view products, mark them as favorites, add products to cart and checkout later, checkout products. I levereged ReactJs at the frontend for web, StripeJS as payment gateway, NodeJS/Express for the server and MongoDB as database.",
    media: [plug1, plug2, plug3],
    link: "https://github.com/mahdi7905/plug",
  },
  {
    title: "FinGuard",
    description:
      "This a platform that is meant to help it's users monitor their finance and expenditure. Users have the functionalities such as registering income, saving some amount from income, creating budgets for each month, registering expenses with reciepts, see history, records and analytics of all forms of transactions. I levereged ReactJs at the frontend for web, NodeJS/Express for the server and MongoDB as database.",
    media: [finguard1, finguard2, finguard3, finguard4],
    link: "https://github.com/mahdi7905/FinGuard",
  },
  {
    title: "SMS",
    description:
      "SMS is a school management system that I built for some school that I used to teach with the purpose of easying workload on the staff, data collection and analytics in order to boost performance of students, staff and provide parents with insight of their children's performance to achieve higher efficiency.",
    media: [sms1, sms2, sms3, sms4, sms5, sms6],
    link: "https://github.com/mahdi7905/school-management-software",
  },
  {
    title: "Bucket",
    description:
      "As the name of the project implies, this project serves the purpose of helping it's users to create bucket lists and todo's with steps, timeframes and progress meter. It exists in both web and mobile platforms.",
    media: [bucket1, bucket2, bucket3, bucket4],
    link: "https://github.com/mahdi7905/bucket-main",
  },
  {
    title: "Tictactoe",
    description:
      "This project might look simple. But actually there tons of logic and conditions to set. This is one of my early projects and it opend my eyes to problem solving and algorithm development. I quite enjoy it.",
    media: [tictactoe],
    link: "https://github.com/mahdi7905/tic-tac-toe",
  },
  {
    title: "My portfolio",
    description:
      "This really is not a huge project. I built this to showcase my experience and catalogue of projects.",
    media: [portfolio],
    link: "https://github.com/mahdi7905/my-portfolio",
  },
];
