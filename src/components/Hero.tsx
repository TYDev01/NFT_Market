import React, { useState, useEffect } from 'react';
import style from '../Color.module.css';

// Import images with type annotations
import ape1 from '../assets/arts/ape1.png';
import ape2 from '../assets/arts/0.jpeg';
import ape3 from '../assets/arts/1.jpeg';
import ape4 from '../assets/arts/2.jpeg';

const Hero: React.FC = () => {
  // Type the state as number
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  
  // Type the images array as string[] (assuming webpack will handle image imports as strings)
  const images: string[] = [ape1, ape2, ape3, ape4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='pt-25 pb-25 bg-[#0d0611]'>
      <div className='flex items-center justify-around'>
        <div className=''>
          <h2 className={`${style.adFont} text-white`}>
            Discover, <br /> Collect & Sell <br />Extraordinary <br /> NFTs
          </h2>
        </div>
        <div className={style.imgContainer}>
          <img 
            src={images[currentImageIndex]} 
            className={style.imgSize} 
            alt="NFT Collection" 
            loading="lazy" // Added lazy loading
          />
          <h2 className="text-white">Test</h2> {/* Added text color */}
        </div>
      </div>
    </div>
  );
};

export default Hero;