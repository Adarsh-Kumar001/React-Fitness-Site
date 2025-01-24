import React, {useContext} from 'react';
import BodyPart from './BodyPart'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'

const ExerciseCategoryList = ({data ,bodyPart, setBodyPart}) => {

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <div onClick={() => scrollPrev()} className="right-arrow left-arrow w-10 h-48 mr-5 hover:cursor-pointer hover:bg-blue-800 rounded-xl p-1 mt-10 flex justify-center content-center ml-3 max-lg:mr-3 max-lg:hidden">
        <img className='my-auto' src={LeftArrowIcon} alt="right-arrow" />
      </div>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <div onClick={() => scrollNext()} className="left-arrow w-10 h-48 mr-5 hover:cursor-pointer hover:bg-blue-800 rounded-xl p-1 mt-10 flex justify-center content-center ml-3 max-lg:hidden">
        <img className='my-auto' src={RightArrowIcon} alt="right-arrow" />
      </div>
    );
  };
  
  
  return (
    
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item)=>(
            
        
         <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
         
    
            
  ))}
    </ScrollMenu>
    
  );
}

export default ExerciseCategoryList

