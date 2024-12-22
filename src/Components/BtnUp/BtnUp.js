import { useEffect, useState } from 'react';
import './styleBtnUp.css';
import arrowUp from '../../Assets/up-arrow.png';

const BtnUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && ( <button onClick={() => window.scrollTo({ top: 0})} className={`BtnUp ${isVisible ? "visible" : ""}`}>
        <img src={arrowUp} className='BtnUpIcon' alt='Arrow up' />
      </button>)}
    </div>
  )
}

export default BtnUp;