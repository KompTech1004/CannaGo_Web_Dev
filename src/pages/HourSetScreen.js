import React, { useState, useEffect, useReducer } from 'react'
import GoBackButton from '../components/GoBackButton'
import clip from '../images/clip.png'
import greenPhone from '../images/greenPhone.png'
import maple from '../images/maple.png'
import arrow from '../images/arrow.svg'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function HourSetScreen() {
  const options = [
    'Closed', 'Opened'
  ];

  const [timeData, setTimeData] = useState([
    { id: 1, day: 'Sun', openStatus: '', fromTime: '', toTime: '' },
    { id: 2, day: 'Mon', openStatus: '', fromTime: '', toTime: '' },
    { id: 3, day: 'Tues', openStatus: '', fromTime: '', toTime: '' },
    { id: 4, day: 'Wed', openStatus: '', fromTime: '', toTime: '' },
    { id: 5, day: 'Thurs', openStatus: '', fromTime: '', toTime: '' },
    { id: 6, day: 'Fri', openStatus: '', fromTime: '', toTime: '' },
    { id: 7, day: 'Sat', openStatus: '', fromTime: '', toTime: '' }
  ])
  const _onSelect = (option, i) => {
    console.log('===>', option);
    console.log('==i==>', i);
    let copy = [...timeData];
    copy[i]['openStatus']=option.value;
    setTimeData(copy)
  }
  useEffect(() => {
    console.log('----------------');
  }, [timeData])
  return (
    <section className="sethour-section">
      <div className="checkout-form-cont">
        <div className="back-cont goback-position"><GoBackButton /></div>
      </div>
      <h2 className="mt90 mb90">Please enter your daily hours of operation</h2>
      <div className="time-container-box">
        {
          timeData.map((item, index) => (
            <div key={index} className="time-container">
              <Dropdown options={options}
                onChange={(val) => _onSelect(val, index)}
                value={item.openStatus}
                placeholder="Select"
                arrowClosed={<img src={arrow} alt="arrow" className="arrow-closed" />}
                arrowOpen={<img src={arrow} alt="arrow" className="arrow-opened" />}
                className="dropdown-body"
              />
              <h2>{item.day}</h2>
              <div className="time-item">
                <input style={{color: item.openStatus === 'Closed' ? 'red' : 'black'}} type="time" className="timepicker" disabled={item.openStatus === 'Closed' && true} />
                <img src={arrow} alt="arrow" className="arrow-closed1" />
              </div>
              <h2>To</h2>
              <div className="time-item">
                <input type="time" className="timepicker" disabled={item.openStatus === 'Closed' && true} value="03" />
                <img src={arrow} alt="arrow" className="arrow-closed1" />
              </div>
            </div>
          ))
        }

      </div>
      <div className="clipArea"><img src={clip} alt="clip" className="clip" /></div>
      <div className="greenArea">
        <img src={greenPhone} alt="green" className="greenPhone-rotate" />
      </div>
      <div className="greenAreaCopyDispensaries">
        <img src={greenPhone} alt="green" className="greenPhoneCopyDispensaries-rotate" />
      </div>
      <div className="mapleAreaDispensaries">
        <img src={maple} alt="green" className="maple" />
      </div>
    </section>
  )
}
