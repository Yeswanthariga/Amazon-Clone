import * as React from "react";
import "./Diwali.css";

const DiwaliListItems = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81shaXfqv5L._AC_SY200_.jpg"
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/51Iu8b7RfjS._AC_SY200_.jpg"
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81shaXfqv5L._AC_SY200_.jpg"
  },
  {
    id: 4,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/61viEJrXMvL._AC_SX184_.jpg"
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/I/914IhehOiML._AC_UL320_.jpg"
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/I/51Iu8b7RfjS._AC_SY200_.jpg"
  },
  {
    id: 7,
    img:
      "https://images-eu.ssl-images-amazon.com/images/I/61viEJrXMvL._AC_SX184_.jpg"
  }
];

export default function Diwali() {
  return (
    <div className="diwali-container">
      <div className="diwali-header">Diwali Decor</div>
      <div className="diwali-inner-container">
        <div className="diwali-product-list">
          {DiwaliListItems.map((DiwaliListItems) => {
            return (
              <div className="diwali-product-item">
                <img src={DiwaliListItems.img} width={200} height={200} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
