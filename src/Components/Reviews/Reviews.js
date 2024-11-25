import { useState } from "react";
import { persons } from "./persons";
import "./styleReviews.css";
import left from "./left.png";
import right from "./right.png";
import coma from "./coma.png";

export const Reviews = () => {
  const [person, setPerson] = useState(0);
  const { review, name, image } = persons[person];


  const previousPerson = () => {
    setPerson((person) => (person - 1 + persons.length) % persons.length);
  };

  const nextPerson = () => {
    setPerson((person) => (person + 1) % persons.length);
  };

  return (
    <div className="ReviewsMainCont">
      <div>
        <button onClick={previousPerson}><img className="ReviewsImgBtn" src={left} alt="Previous" /></button>
      </div>
      <div className="ReviewsContentCont">
        <p className="ParCursive ReviewPar">{review}</p>
        <p className="ParStandart ReviewName">{name}</p>
        <div className="ReviewsImgCont">
          <img src={image} alt="Person" />
        </div>
        <div className="CommentCont">
          <img src={coma} alt="Person" />
        </div>
        <div className="ReviewLineCont">
          {persons.map((_, index) => (
            <div
              key={index}
              className={`ReviewLine ${index === person ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
      <div>
        <button onClick={nextPerson}><img className="ReviewsImgBtn" src={right} alt="Next" /></button>
      </div>
      
      
    </div>
  )
};

