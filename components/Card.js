'use strict';
import React,{PropTypes} from 'react'


const Card = ({imgSrc,title,reply,views,onClick}) =>(
    <div className='md-cardWrapper' onClick={onClick}>
        <img  className='avatar' src={imgSrc}/>
        <div className='cardName'>
          <span className='title'>{title}</span>
          <span className='other'>{reply}/{views}</span>
        </div>
    </div>
)


Card.propTypes = {
}


export default Card
