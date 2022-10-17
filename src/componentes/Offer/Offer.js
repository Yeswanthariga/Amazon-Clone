import * as React from "react";
import "./Offer.css";

export default function Offer() {
  return (
    <div className="offers-container">
      <div className="footerwear-offer">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Footwear_Shoes-372-232._SY232_CB607259282_.jpg"
          alt="deocr"
        />
      </div>
      <div className="wearable-offer">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Watches-372-232._SY232_CB607259282_.jpg"
          alt="docor"
        />
      </div>
      <div className="fashion-offer">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Event/Jupiter22/GW/Phase3/PC-QC/MF/Clothing-372-232._SY232_CB607259282_.jpg"
          alt="docor"
        />
      </div>
    </div>
  );
}
