import React from 'react'
import { post } from '../plugins/http';

const SingleBox = ({ item, index, setBoxes }) => {

  const checkBox = async () => {
    const secret = localStorage.getItem('secret');
    const res = await post('update', { index, secret });
    console.log('res-click', res);
    setBoxes(res.data);
  };

  return (
    <div onClick={checkBox} className='box'>
      {item}
    </div>
  )
}

export default SingleBox;
