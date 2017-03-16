
/* DropDwon v1.0.0
 * By Jiexiong
 * Github: https://github.com/AlloyTeam/DropDwon
 * MIT Licensed.
 */

;(function(window){
  'use strict';
  function noop (){

  }

  function dropdownLoading(options){

    //this._description = '<div id="dropdownLoadingDescription">下拉加载....</div>'
    if(typeof options.target !== 'object'){
      throw 'params should contain ojbect named target';
    }
    this._wrapper = options.wrapper;//滑动包裹器absolute布局，保证滑动不受滚动影响
    this._target = options.target;
    this._status = 'pending';

    this._touchMoveCH = options.touchMove || noop;
    this._touchStartCH = options.touchStart || noop;
    this._touchEndCH = options.touchEnd || noop;
    this._loadingCH = options.loading || noop;

    this._scrollDistance = 0;
    this._prevUpGap = 0;//先前 上拉  距离

    this._loadingPosition = options.loadingPosition || 100;//加载中的滑动距离（横向、纵向）
    this._target.addEventListener('touchstart',this._touchStart.bind(this),false);
    this._target.addEventListener('touchmove',this._touchMove.bind(this),false);
    this._target.addEventListener('touchend',this._touchEnd.bind(this),false);

    //dom.lastChild.before(description);

    //this._description = document.querySelect('#dropdownLoadingDescription');
  }



  dropdownLoading.prototype.constructor = dropdownLoading;



  dropdownLoading.prototype._touchStart = function(evt){
    this.startY = evt.touches[0].pageY;
    this._startTime = +new Date();
    this._wrapperHeight= this._wrapper.offsetHeight;
    this._targetHeight = this._target.scrollHeight;
    this._touchGap = 0;
    this._prevTouchGap = 0;
    this._target.style.transitionDuration = 0 + 'ms';
    this._touchStartCH.call(this, evt);
  }



  dropdownLoading.prototype._touchMove = function(evt){

    this._currentY = evt.touches[0].pageY;
    this._touchGap = this._currentY - this.startY;

    if(isTargetTop(this._scrollDistance, this._targetHeight) && this._touchGap >=0 ){
      this._scrollDistance ++;//降低下拉幅度
    }else if(isTargetBottom(this._scrollDistance, this._targetHeight, this._wrapperHeight) && this._touchGap <= 0 ){
      this._scrollDistance --;//
      //this._scrollDistance -= this._prevTouchGap;
      //this._prevTouchGap =  this._touchGap/3;
    }else {
      this._scrollDistance += this._touchGap;
      this._scrollDistance -= this._prevTouchGap;
      this._prevTouchGap = this._touchGap;
    }



    this._target.style.transform = 'translate3d(0,' + this._scrollDistance + 'px, 0)';

    this._touchMoveCH.call(this, evt);

  }



  dropdownLoading.prototype._touchEnd = function(evt){
    this._prevTouchGap = 0;
    this._endTime = +new Date();
    this._duration = this._endTime - this._startTime;

    if(this._duration < 240 && !isTargetTop(this._scrollDistance, this._targetHeight)){
      // if(this._touchGap > 0)
      this._back(this._scrollDistance + this._touchGap);
    }
    if (shouldBeBackToTop(this._scrollDistance, this._loadingPosition)) {
      this._back();
    } else if(shouldWeLoading(this._scrollDistance, this._loadingPosition)){//请求下载
      this.hold();
      this._loading(evt);
    } else if(shouldBeBackToBottom(this._scrollDistance, this._targetHeight, this._wrapperHeight)){
      this._back( -this._targetHeight + this._wrapperHeight);
    }

    this._touchEndCH.call(this, evt, this._dropDownGap);

    console.log(this._touchGap)
    console.log(this._endTime - this._startTime);
    //this.prevUpGap = 0;
  }



  dropdownLoading.prototype._loading = function(evt){

    this._loadingCH.call(this, evt, this._back.bind(this));
    //this._back();
  }




  dropdownLoading.prototype.hold = function(){//停留加载状态

    this._status = 'holding';
    this._back(this._loadingPosition);

  }



  dropdownLoading.prototype._back = function(position, speed){
    this._status = 'backing';
    position = position || 0;//原点
    speed = speed || 600
    //this._touchEnd.call(this, evt, this._touchGap);

    this._scrollDistance = position;

    this._target.style.transform = 'translate3d(0, ' + position + 'px, 0)';
    this._target.style.transitionDuration = speed + 'ms';
    //console.log(this._touchGap)

  }

  function shouldBeBackToBottom(scrollDistance, targetHeight, wrapperHeight){
      if(Math.abs(scrollDistance) > targetHeight - wrapperHeight){
        return true;
      }
      return false;
  }

  function shouldBeBackToTop(scrollDistance, loadingPosition){
    if(scrollDistance > 0 && scrollDistance < loadingPosition){
      return true;
    }
    return false;
  }

  function shouldWeLoading(scrollDistance, loadingPosition){
    if(scrollDistance > loadingPosition){
      return true;
    }
    return false;
  }

  function isTargetTop(scrollDistance, targetHeight){
    if(scrollDistance >= 0){
      return true;
    }
    return false;
  }

  function isTargetBottom(scrollDistance, targetHeight, wrapperHeight){
    if(Math.abs(scrollDistance) >= targetHeight - wrapperHeight){
      return true;
    }
    return false;
  }

  var dropdownLoadingPlugin = dropdownLoading;

  if(typeof module !== 'undefined' && typeof module.exports === 'object'){
    module.exports = dropdownLoadingPlugin;
  }else{
    window.dropdownLoading = dropdownLoading;
  }

})(window);
