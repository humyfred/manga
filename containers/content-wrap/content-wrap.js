'use strict';
import { connect } from 'react-redux'
import { toViewDetail } from '../../actions/frame'
import ContentWrapComponent from '../../components/commons/content-wrap/content-wrap'
import CartoonCardContent from '../../components/commons/cartoon-card-content/cartoon-card-content'
import { browserHistory } from 'react-router'



const mapStateToProps = (state) => {
  var content = {title:'',content:''};
  if(state.content==='view_cartoon'){
    content = {title:'海贼王',content:''};
  }
  return {
    contentViewState: state.contentViewState ,
    title :content.title,
    content:content.content,
    loadState:'hide'
  }
}

const contentWrap = connect(
  mapStateToProps
)(ContentWrapComponent)

export default contentWrap
