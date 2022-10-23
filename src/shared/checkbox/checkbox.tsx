import React, {useEffect, useState} from 'react';
import './checkbox.sass'

const CheckBox = ({data, setData, type, path, text}: any) => {

  const [value, setValue] = useState('')
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    setData(value, type)
  }, [value])

  const changeChecked = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <section className='checkbox'>
        <input checked={isChecked} className='checkbox-input' id={type} type={type}/>
        <label onClick={() => changeChecked()} className='checkbox-label' htmlFor={type}>
        </label>
        <span className='text'>{text}</span>
      </section>
    </>
  );
};

export default CheckBox;
