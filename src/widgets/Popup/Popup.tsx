import React, {useState} from 'react';
import './Popup.sass'
import Form from "../../shared/form/Form";
import Button from "../../shared/button/Button";
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../../entities/firebase/Firebase";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {setData} from "../../entities/reducers/userSlice/userSlice";

const Popup = ({setOpen, open}) => {

  const [text, setText] = useState(0)
  const dispath = useDispatch()

  const value = useSelector((state: any) => state.user.data)

  const closePopup = (e) => {
    console.log(e)
    if (e.target.className === "popup-container" || e.target.className === "popup-header-close" || e.target.localName === "svg" || e.target.localName === "rect") {
      setOpen(!open)
    }
  }

  const submitHandler = async (e) => {
    console.log(value)
    if (text > 20 && text <= 60) {
      setOpen(!open)
      dispath(setData({...value, limitDay: text}))
      await updateDoc(doc(db, 'users', value.uid), {
        limitDay: text
      })
    }
  }

  return (
    <>
      <div onClick={(e) => closePopup(e)} className="popup-container">
        <div className='popup-block'>
          <header className='popup-header'>
            <h4 className='popup-header-title'>Select number of hours</h4>
            <div onClick={(e) => closePopup(e)} className='popup-header-close'>
              <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="12.0208" y="1" width="1.35" height="17" transform="rotate(45 12.0208 1)" fill="#999999"/>
                <rect y="1.70709" width="1.35" height="17" transform="rotate(-45 0 1.70709)" fill="#999999"/>
              </svg>
            </div>
          </header>
          <Form path={'number'} setData={setText} className='popup-input' type="number"/>
          <Button click={submitHandler} className='popup-button' text={'Submit'}/>
        </div>
      </div>
    </>
  );
};

export default Popup;
