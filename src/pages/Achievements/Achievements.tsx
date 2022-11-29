import React from 'react';
import './Achievements.sass'
import Header from "../../widgets/header/Header";
import Hello from "../../shared/hello/Hello";
import NavBar from "../../widgets/navBar/NavBar";
import AchievementItem from "../../widgets/AchievementItem/AchievementItem";

const Achievements = () => {

  const achievementsList = [
    {
      title: 'Worker',
      subtitle: 'Work a certain number of hours',
      level: '1',
      color: '#53D780',
      shadowColor: '#56AB73',
      currentProgress: '30',
      progress: '100',
    },{
      title: 'Commentator',
      subtitle: 'Add comments to days',
      level: '4',
      color: '#E3C761',
      shadowColor: '#BDA963',
      currentProgress: '7',
      progress: '10',
    },{
      title: 'Weekend work',
      subtitle: 'Work on the weekend',
      level: '2',
      color: '#85BDFF',
      shadowColor: '#5582AB',
      currentProgress: '2',
      progress: '4',
    },{
      title: 'Fire worker',
      subtitle: 'Dial a work streak',
      level: '1',
      color: '#FF8585',
      shadowColor: '#C56666',
      currentProgress: '18',
      progress: '30',
    },
  ]

  return (
    <>
      <div className='container'>
        <Header />
        <section className='mainPage'>
          <Hello text={'Achievements'}/>
          <section className='achievements-container'>
            <section className='achievements'>
              {
                achievementsList.map((item, index) => {
                  return (
                    <AchievementItem key={index} data={item}/>
                  )
                })
              }
            </section>
            <section className='right-block'>
              <NavBar />
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default Achievements;
