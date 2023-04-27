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

const getCircles = (locale: string) => {
  return [
    {
      img: locale === "en" ? enOne : esOne,
      alt: "5 hours premium bar",
    },
    {
      img: locale === "en" ? enTwo : esTwo,
      alt: "5 course gourmet dinner",
    },
    {
      img: locale === "en" ? enThree : esThree,
      alt: "DJ music & dancing after party",
    },
    {
      img: locale === "en" ? enFour : esFour,
      alt: "Amenities photo booth & more",
    },
    {
      img: locale === "en" ? enFive : esFive,
      alt: "Street live view of the ball drop",
    },
    {
      img: locale === "en" ? enSix : esSix,
      alt: "View of the street and crowds",
    },
  ];
};

export default getCircles;
