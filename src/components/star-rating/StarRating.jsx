import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ noOfStars }) {

const [rating, setRating] = useState(0);
const[hover, setHover] = useState(0);
  
  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        return 
        <FaStar
          key={index}
          onClick={}
          onMouseMove={}
          onMouseLeave={}
          size={}
         />;
      })}
    </div>
  );
}
