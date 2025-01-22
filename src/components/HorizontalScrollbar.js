import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <div onClick={() => scrollPrev()} className="right-arrow left-arrow w-10 h-48 mr-5 hover:cursor-pointer hover:bg-blue-800 rounded-xl p-1 mt-40 flex justify-center content-center ml-3">
        <img className='my-auto' src={LeftArrowIcon} alt="right-arrow" />
      </div>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <div onClick={() => scrollNext()} className="left-arrow w-10 h-48 mr-5 hover:cursor-pointer hover:bg-blue-800 rounded-xl p-1 mt-40 flex justify-center content-center ml-3">
        <img className='my-auto' src={RightArrowIcon} alt="right-arrow" />
      </div>
    );
  };

  const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <div key={item.id || item}>
          {bodyParts ? <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExerciseCard exercise={item} /> }
        </div>
      ))}
    </ScrollMenu>
  );
  
  export default HorizontalScrollbar;

