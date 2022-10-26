import React from 'react';
import './block.sass'

const Block = ({blocker, color, header, left, text, custom}) : any => {

  if (blocker && window.innerWidth <= 768) {
      return null
  }

  if(custom) {
    return (
      <>
        <div style={{backgroundColor: color, flexDirection: 'row', alignItems: 'flex-end', marginRight: '0'}} className='block'>
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
      <div style={{backgroundColor: color}} className={`block ${left ? 'block-left' : ''}`}>
        <p className='title'>{header}</p>
        <h2 className='text'>{text}</h2>
      </div>
    </>
  );
};

export default Block;
