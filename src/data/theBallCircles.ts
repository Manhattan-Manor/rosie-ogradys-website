import enOne from "../assets/images/circles/en/the-ball/1-1mm.png";
import esOne from "../assets/images/circles/es/the-ball/1-1mm.png";
import enTwo from "../assets/images/circles/en/the-ball/1-2mm.png";
import esTwo from "../assets/images/circles/es/the-ball/1-2mm.png";
import enThree from "../assets/images/circles/en/the-ball/1-3mm.png";
import esThree from "../assets/images/circles/es/the-ball/1-3mm.png";
import enFour from "../assets/images/circles/en/the-ball/1-4mm.png";
import esFour from "../assets/images/circles/es/the-ball/1-4mm.png";
import i18next from "i18next";
const lang = i18next.language;

const theBallCircles = [
  {
    img: lang === "en" ? enOne : esOne,
    alt: "12ft diameter ball",
  },
  {
    img: lang === "en" ? enTwo : esTwo,
    alt: "5.386 tons",
  },
  {
    img: lang === "en" ? enThree : esThree,
    alt: "32,256 lights",
  },
  {
    img: lang === "en" ? enFour : esFour,
    alt: "16 million colors",
  },
];

export default theBallCircles;
