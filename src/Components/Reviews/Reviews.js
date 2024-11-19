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
    <div className="MainCont">
      <div className="BtnCont">
        <button onClick={previousPerson}><img className="ImgBtn" src={left} alt="Previous" /></button>
      </div>
      <div className="ContentCont">
        <p className="ParCursive">{review}</p>
        <p className="ParStandart">{name}</p>
        <div className="ImgCont">
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
      <div className="BtnCont">
        <button onClick={nextPerson}><img className="ImgBtn" src={right} alt="Next" /></button>
      </div>
      
      
    </div>
  )
};

