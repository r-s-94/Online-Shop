import apple from "./assets/apples.jpg";
import pear from "./assets/pears.jpg";
import grape from "./assets/grapes.jpg";
import pc from "./assets/pc.jpg";
import car from "./assets/car.jpg";
import fitness from "./assets/fitness.jpg";

export interface Article {
  name: string;
  img: string;
  id: number;
  price: number;
  description: string;
  itemStockTotal: number;
  quantity: number;
  declination: string;
}

export const articles: Article[] = [
  {
    name: "Apfel",
    img: apple,
    id: 1,
    price: 2,
    description: "lecker knackig ",
    itemStockTotal: 5,
    quantity: 0,
    declination: "Der",
  },
  {
    name: "Birne",
    img: pear,
    id: 2,
    price: 2,
    description: "fruchtig frisch",
    itemStockTotal: 5,
    quantity: 0,
    declination: "Die",
  },
  {
    name: "Weintrauben",
    img: grape,
    id: 3,
    price: 2,
    description: "Ausgereift und saftig",
    itemStockTotal: 5,
    quantity: 0,
    declination: "Die",
  },
  {
    name: "Computer",
    img: pc,
    id: 4,
    price: 750,
    description: "Hochleistungsfähig und schnell",
    itemStockTotal: 10,
    quantity: 0,
    declination: "Der",
  },
  {
    name: "Auto",
    img: car,
    id: 5,
    price: 50000,
    description: "Ein Auto das spaß macht und Fun bringt. Ford Mustan",
    itemStockTotal: 5,
    quantity: 0,
    declination: "Das",
  },
  {
    name: "Fitnessgerät",
    img: fitness,
    id: 6,
    price: 1000,
    description: "Ein fitter Körper ist ein straker und gesunder Körper.",
    itemStockTotal: 10,
    quantity: 0,
    declination: "Das",
  },
];
