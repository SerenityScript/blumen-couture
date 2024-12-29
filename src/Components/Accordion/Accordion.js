import { AccordionItem } from "./AccordionItem";
import { listAccordion } from "../../data/data";
import "./style.css";

export const Accordion = () => {
  return (
    <div>
      {listAccordion.map((item, index) =>
        <AccordionItem key={index} title={item.title} content={item.content} image={item.image} />
      )}
    </div>
  )
}