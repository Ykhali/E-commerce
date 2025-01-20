import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          possimus voluptate expedita culpa, adipisci iusto iure laborum harum
          reprehenderit est id exercitationem sed quisquam asperiores iste alias
          ducimus neque voluptatibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Praesentium corrupti, excepturi quod, repellat
          quibusdam culpa alias pariatur adipisci esse temporibus obcaecati,
          perspiciatis deleniti. Quos perferendis a veritatis repellat, maxime
          quidem.
        </p>
        <p>
          E-commerce websiters typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors).Each product usually has its own dedicated page
          with relevant information
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
