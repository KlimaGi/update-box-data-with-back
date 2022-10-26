import React, { useState, useEffect, useContext } from 'react';
import MainContext from '../context/main-context';
import { get } from '../plugins/http';
import SingleBox from './single-box';

const Profile = () => {
  const { user, setUser } = useContext(MainContext);
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    const userData = async () => {
      let secretI = localStorage.getItem('secret');
      const res = await get(`data/${secretI}`);
      console.log('res-profile', res);
      if (!res.error) {
        setBoxes(res.data);
      }
    }
    userData();
  }, []);


  return (
    <div className='container'>
      {
        boxes.length > 0 && boxes.map((item, i) => <SingleBox
          setBoxes={setBoxes}
          item={item}
          index={i}
          key={i}
        />)
      }

    </div>
  )
}

export default Profile;
