import instagramData from './instagramData';
import InstaImage from './InstaImage';
import './styleInstagram.css';

const Instagram = () => {
  return (
    <div className='InstagramMainCont'>
        <p className="ParStandart">Folgen Sie uns auf</p>
        <h3 className="HeadingGold">INSTAGRAM</h3>
      
        <div className="InstaFeed">
          {instagramData.map((image) => (
            <InstaImage key={image.id} src={image.src} alt={image.alt} />
          ))}
        </div>
      
        <p className="ParGold">@blumen_couture</p>
      </div>
  )
}

export default Instagram;