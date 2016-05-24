import React from 'react'

const Loading = ({showState}) =>(
    <div className={showState+' square flex flex-verti-center flex-hori-center'} >
    	<i className='iconfont icon-spinner icon-big '></i>
    	<p>加载中...</p>
    </div>
)

export default Loading