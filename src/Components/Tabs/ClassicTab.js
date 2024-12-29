import { imagesClassicTab } from "../../data/data";
import TabImages from "./TabImages";

const ClassicTab = () => {
  const images = imagesClassicTab;

  return (
    <div className="HeadingCont TabsMainContainer">
      <TabImages images={images} />
    </div>
  );
};

export default ClassicTab;