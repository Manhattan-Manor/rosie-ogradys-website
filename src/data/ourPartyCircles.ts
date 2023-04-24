import enOne from "../assets/images/circles/en/our-party/3-1mm.png";
import esOne from "../assets/images/circles/es/our-party/3-1mm.png";
import enTwo from "../assets/images/circles/en/our-party/3-2mm.png";
import esTwo from "../assets/images/circles/es/our-party/3-2mm.png";
import enThree from "../assets/images/circles/en/our-party/3-3mm.png";
import esThree from "../assets/images/circles/es/our-party/3-3mm.png";
import enFour from "../assets/images/circles/en/our-party/3-4mm.png";
import esFour from "../assets/images/circles/es/our-party/3-4mm.png";
import esFive from "../assets/images/circles/es/our-party/3-5mm.png";
import enFive from "../assets/images/circles/en/our-party/3-5mm.png";
import esSix from "../assets/images/circles/es/our-party/3-6mm.png";
import enSix from "../assets/images/circles/en/our-party/3-6mm.png";
import i18next from "i18next";

const lang = i18next.language;

const ourPartyCircles = [
  {
    img: lang === "en" ? enOne : esOne,
    alt: "5 hours premium bar",
  },
  {
    img: lang === "en" ? enTwo : esTwo,
    alt: "5 course gourmet dinner",
  },
  {
    img: lang === "en" ? enThree : esThree,
    alt: "DJ music & dancing after party",
  },
  {
    img: lang === "en" ? enFour : esFour,
    alt: "Amenities photo booth & more",
  },
  {
    img: lang === "en" ? enFive : esFive,
    alt: "Street live view of the ball drop",
  },
  {
    img: lang === "en" ? enSix : esSix,
    alt: "View of the street and crowds",
  },
];

export default ourPartyCircles;
