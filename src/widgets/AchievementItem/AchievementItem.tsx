import React from 'react';
import './AchievementItem.sass'

const AchievementItem = ({data}) => {
  return (
    <>
      <div className='achievementItem'>
        <div style={{backgroundColor: data.color, boxShadow: `0px 4px 0px 0px ${data.shadowColor}`}} className='achievementItem-block'>
          <span className='achievementItem-block-text'>LEVEL {data.level}</span>
        </div>
        <div className='achievementItem-container'>
          <div className='achievementItem-info'>
            <h4 className='achievementItem-title'>{data.title}</h4>
            <p className='achievementItem-subtitle'>{data.subtitle}</p>
          </div>
          <div className='achievementItem-progress'>
            <div className='achievementItem-progress-bar'></div>
            <div style={{width: data.currentProgress * (100 / data.progress) + 'px'}} className='achievementItem-progress-barIn'></div>
            <span className='achievementItem-progress-text'>{data.currentProgress}/{data.progress}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AchievementItem;
