import React from 'react';
import './block.sass'

const Block = ({color, header, text, custom}) : any => {

  if(custom) {
    return (
      <>
        <div style={{backgroundColor: color, flexDirection: 'row', alignItems: 'flex-end'}} className='block'>
          <div className='block-container'>
            <p className='title'>{header}</p>
            <h2 className='text'>{text}</h2>
          </div>
          <button className='block-btn'></button>
        </div>
      </>
    );
  }

  return (
    <>
      <div style={{backgroundColor: color}} className='block'>
        <p className='title'>{header}</p>
        <h2 className='text'>{text}</h2>
      </div>
    </>
  );
};

export default Block;
