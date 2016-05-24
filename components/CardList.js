'use strict';
import React,{PropTypes} from 'react'
import Card from './Card'

const CardList = ({viewListState,cards,goBack,onClick}) =>(
  <section className={viewListState}>
    <header className='header flex vertical-middle'>
      <i className='iconfont icon-btn icon-back icon-middle' onClick={() =>goBack()}></i>
      <span className='ml15'>帖子</span>
    </header>
    <div className='content mt48' >
        {
          cards.map(card =>
            <Card key={card.id} {...card} onClick={() => onClick()} />
          )
        }
    </div>
  </section>
)


CardList.propTypes = {

}


export default CardList
