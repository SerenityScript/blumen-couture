import { useState } from "react";

export const AccordionItem = ({ title, content, image }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={isOpen ? "activeAccordion" : "defaultAccordion"} onClick={handleIsOpen}>
          {title}
      </div>
      {
        isOpen && (
          <div className="ContentContainer">
            <div className="AccordionImgCont">
              <img src={image} alt="Description" className="AccordionImg"/>
            </div>
            <div className="AccordionContentCont">
              <div className="content">{content}</div>
            </div>

          </div>
        )
      }
    </div>
  )
}