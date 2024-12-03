import awardWhite from "../../Assets/awardWhite.png";
import awardBlack from "../../Assets/awardBlack.png";
import awardColors from "../../Assets/awardColors.png";

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