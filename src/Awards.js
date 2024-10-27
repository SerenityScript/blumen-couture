import awardWhite from "./awardWhite.png";
import awardBlack from "./awardBlack.png";
import awardColors from "./awardColors.png";

function Awards() {
  return (
    <div>
      <h3 className="HeadingGold">Auszeichnungen erhalten</h3>
      <div className="Awards">
        <img src={awardWhite} alt="Auszeichnung" className="AwardImg" />
        <img src={awardBlack} alt="Auszeichnung" className="AwardImg" />
        <img src={awardColors} alt="Auszeichnung" className="AwardImg" />
      </div>
    </div>
  )
}

export default Awards;