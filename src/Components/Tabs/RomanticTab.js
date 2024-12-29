import { imagesRomanticTab } from "../../data/data";
import TabImages from "./TabImages";

const RomanticTab = () => {
  const images = imagesRomanticTab;

  return (
    <div className="HeadingCont TabsMainContainer">
      <TabImages images={images} />
    </div>
  );
};

export default RomanticTab;