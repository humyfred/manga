'use strict';

let datas = [{
  id:0,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:1,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:2,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:3,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:4,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:5,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:6,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:7,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:8,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:9,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:10,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  content:'hahahaha',
  imgSrc:'http://img01.ishuhui.com/yz/515/yzs.png',
  title:'你好吗三个字',
  reply:44,
  views:23112
}];
let idx = 11;

const PostList = (state = [], action) => {
  switch (action.type) {
    case 'POST_ADD':
        return [
          ...state,
          {
            id:idx++,
            chapter:'世经上的连环画',
            imgSrc:'http://img01.ishuhui.com/op/shao825/ops.png',
            resource:'http://www.ishuhui.com/post/375945',
            title:'草帽少年 第825话'
          }
        ]
    default:
      return datas;
  }
}

export default PostList
