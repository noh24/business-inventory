import iphone14pro from "./../assets/iphone14pro.jpg";
import iphone14plus from "./../assets/iphone14plus.jpg";
import iphone13mini from "./../assets/iphone13mini.jpg";
import iphoneSE from "./../assets/iphoneSE.jpg";
import iphone12 from "./../assets/iphone12.jpg";
import { v4 as uuid } from "uuid";

const data = [
  {
    name: "iPhone14 Pro & Pro Max",
    price: "80",
    year: "2012",
    photo: iphone14pro,
    quantity: 10,
    id: uuid(),
  },
  {
    name: "iPhone14 & Plus",
    price: "8",
    photo: iphone14plus,
    quantity: 10,
    id: uuid(),
  },
  {
    name: "iPhone13 & Mini",
    price: "80",
    photo: iphone13mini,
    quantity: 10,
    id: uuid(),
  },
  {
    name: "iPhoneSE",
    price: "80",
    photo: iphoneSE,
    quantity: 10,
    id: uuid(),
  },
  {
    name: "iPhone12",
    price: "80",
    photo: iphone12,
    quantity: 10,
    id: uuid(),
  },
];
export default data;