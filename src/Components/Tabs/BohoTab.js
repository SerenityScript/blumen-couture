import { imagesBohoTab } from "../../data/data";
import TabImages from "./TabImages";

const BohoTab = () => {
  const images = imagesBohoTab;

  return (
    <div className="HeadingCont TabsMainContainer">
      <TabImages images={images} />
    </div>
  );
};

export default BohoTab;