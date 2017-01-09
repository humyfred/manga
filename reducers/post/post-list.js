'use strict';

let datas = [{
  id:0,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'哈喽~~小伙伴儿们好久不见啦~~圣诞节快乐~~~ 上次介绍了在日本办理手机需要准备哪些证件~~如有不足之处 ',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=b48ebc0b9e3df8dca668dcd1ab2c43bb/05dc36d3d539b600feb2bd4be850352ac75cb7e4.jpg'],
  title:'留学生的生活省钱攻略~~',
  reply:44,
  views:23112
},{
  id:1,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'我是对外汉语的学生，二外选择了日语，种种原因吧，其实小时候深受抗日神剧的毒害，对日本很讨厌，',
  pictures:[['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg']],
  title:'犹豫纠结了很久的问题，求大佬互动',
  reply:44,
  views:23112
},{
  id:2,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:3,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:4,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:5,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:6,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:7,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:8,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:9,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
  title:'你好吗三个字',
  reply:44,
  views:23112
},{
  id:10,
  bannerUrl:'http://pic.qiantucdn.com/58pic/18/13/67/72w58PICshJ_1024.jpg',
  author:{avator:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1740907959,1531109126&fm=23&gp=0.jpg',name:'小熊'},
  time:'2017-01-10',
  summary:'hahahaha',
  pictures:['https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=cb8e09f2d800baa1ba7914fb212d8822/c52bb6003af33a87bde3c404cf5c10385343b530.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=ad6f202eb3a1cd1105e32160df2ff9cc/a6123af33a87e9506099377219385343fbf2b430.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=19f289213012b31bc7399e69e025074a/db0149540923dd543c31b20ed809b3de9c824823.jpg','https://imgsa.baidu.com/forum/whfpf%3D106%2C106%2C40%3Bq%3D100%3Bg%3D0/sign=c3fdd47262600c33f02c8d887c71603f/bb0a972bd40735fa4e5359df97510fb30e2408c2.jpg'],
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
            pictures:'http://img01.ishuhui.com/op/shao825/ops.png',
            resource:'http://www.ishuhui.com/post/375945',
            title:'草帽少年 第825话'
          }
        ]
    default:
      return datas;
  }
}

export default PostList
