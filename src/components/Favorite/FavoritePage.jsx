import React, { useEffect, useState } from 'react';

import checkbox from '../../assets/img/Checkbox.png';

function Favorite() {
  //전역상태관리를 통해 이름 동적으로 바꿀예정
  const [favoriteList,setFavoriteList] = useState([]);
  const [selectedItems,setSelectedItems] = useState([null]);
  useEffect(()=>{
    async function fetchFavoriteList(){
      try{
        const response = await fetch('http://localhost:8080/api/categories/read-all');
        if(!response.ok){
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFavoriteList(data);
        console.log(favoriteList);
      }
      catch(error){
        console.error('error fetching: ',error);
      }
      
    }
    fetchFavoriteList();
  },[favoriteList])

  const dummydata=[
    '라이프스타일',
    '경제/금융',
    '어학/외국어',
    '요리/베이킹',
    '운동/헬스',
    '사진/영상',
    '프로그래밍',
    '마케팅',
    '디자인',
    '영상/마인드셋'
  ]

  function handleFavoriteClick(item){
    setSelectedItems((prevItems)=>{
      if(prevItems.includes(item)){
        return prevItems.filter((selected)=>selected!==item)
      }
      else{
        return [...prevItems,item]
      }
    })
  }
  function handleFavoriteSubmit(event){
    event.preventDefault();
    //api 호출
  }
  return (
    <form onSubmit={handleFavoriteSubmit}>
      <h2 className='favorite-header'>이승민님이 관심있는 분야는 ?</h2>
      <ul className='favorite-wrap'>
        {dummydata.map((dummy)=> 
        <li key={dummy} className={`favorite-li ${selectedItems.includes(dummy) ? 'selected' : ''}`} onClick={() => handleFavoriteClick(dummy)}>
          {dummy}
          {selectedItems.includes(dummy)&&<img src={checkbox} alt='checkbox' className='checkbox'/> }
          
          </li>)}
        
      </ul>
      <button type="submit" className='checkbutton'>확인</button>
    </form>
  )
}

export default Favorite