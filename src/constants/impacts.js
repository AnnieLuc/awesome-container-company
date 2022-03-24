import Ovals from "../images/ovals-impact.svg";
import Rectangles from "../images/rectangles-impact.svg";

const impacts = [
  {
    image: <img src={Rectangles} alt="" />,
    cardHeader: "For Businesses",
    cardContent: [
      "Save at least 50% on supply cost",
      "Save 50-60 hours per week of manager's labor cost: no inventory management, no reordering, no restocking",
      "Save real estate cost for storage",
      "Government helps Subsidize Up to 70%",
    ],
  },
  {
    image: <img src={Ovals} alt="" />,
    cardHeader: "For Users",
    cardContent: [
      " Remove all chemicals going into food: plastics, BPA, PFAS and other 'forever chemicals' used to hold compostable packaging together",
      "Gamification: reward for returned containers",
      " Sustainability sells: users feel good about helping the planet",
    ],
  },
];

export default impacts;
