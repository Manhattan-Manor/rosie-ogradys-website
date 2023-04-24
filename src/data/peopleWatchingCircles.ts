import enOne from "../assets/images/circles/en/people-watching/2-1mm.png";
import esOne from "../assets/images/circles/es/people-watching/2-1mm.png";
import enTwo from "../assets/images/circles/en/people-watching/2-2mm.png";
import esTwo from "../assets/images/circles/es/people-watching/2-2mm.png";
import enThree from "../assets/images/circles/en/people-watching/2-3mm.png";
import esThree from "../assets/images/circles/es/people-watching/2-3mm.png";
import enFour from "../assets/images/circles/en/people-watching/2-4mm.png";
import esFour from "../assets/images/circles/es/people-watching/2-4mm.png";
import i18next from "i18next";

const lang = i18next.language;

const peopleWatchingCircles = [
  {
    img: lang === "en" ? enOne : esOne,
    alt: "+1 billion in the world",
  },
  {
    img: lang === "en" ? enTwo : esTwo,
    alt: "+100 million in the usa",
  },
  {
    img: lang === "en" ? enThree : esThree,
    alt: "+1 million times square",
  },
  {
    img: lang === "en" ? enFour : esFour,
    alt: "+400 people manhattan manor",
  },
];

export default peopleWatchingCircles;
