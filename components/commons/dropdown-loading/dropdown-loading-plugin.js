;(function(window){
  'use strict';
  function noop (){

  }

  function dropdownLoading(options){

    //this._description = '<div id="dropdownLoadingDescription">下拉加载....</div>'
    if(typeof options.target !== 'object'){
      throw 'params should contain ojbect named target';
    }

    this._target = options.target;
    this.status = 'pending';
    this.touchMove = options.touchMove || noop;
    this.touchStart = options.touchStart || noop;
    this.touchEnd = options.touchEnd || noop;
    this.loading = options.loading || noop;
    this.loadingPosition = options.loadingPosition || 50;//加载中的滑动距离（横向、纵向）
    this._target.addEventListener('touchstart',this._touchStart.bind(this),false);
    this._target.addEventListener('touchmove',this._touchMove.bind(this),false);
    this._target.addEventListener('touchend',this._touchEnd.bind(this),false);

    //dom.lastChild.before(description);

    //this._description = document.querySelect('#dropdownLoadingDescription');
  }

  dropdownLoading.prototype.constructor = dropdownLoading;

  dropdownLoading.prototype._touchStart = function(evt){
    this.startY = evt.touches[0].pageY;

    this.touchStart.call(this, evt);
  }

  dropdownLoading.prototype._touchMove = function(evt){

    this._currentY = evt.touches[0].pageY;
    this._gap = this._currentY - this.startY;

    if(this._currentY){
      this._target.style.transform = 'translate3d(0,' + this._gap + 'px, 0)';
    }
    this.touchMove.call(this, evt);

  }

  dropdownLoading.prototype._touchEnd = function(evt){


    if ( this._gap < 40 && this._currentY > 0) {
      this._target.style.transform = 'translate3d(0, 0, 0)';
      this._target.style.transition = 'transform 0.5s linear';
    } else if(this._gap > 40){//请求下载
      this.hold();
      this._loading(evt);
    }

    this.touchEnd.call(this, evt, this._gap);

    if(this.status !== 'holding'){
      this.recover();
    }
  }

  dropdownLoading.prototype._loading = function(evt){

    this.loading.call(this, evt);

  }

  dropdownLoading.prototype.hold = function(){//停留加载状态

    this.status = 'holding';
    this._target.style.transform = 'translate3d(0, ' + this.loadingPosition + 'px, 0)';
    this._target.style.transition = 'transform 0.5s linear';

  }

  dropdownLoading.prototype.recover = function(){
    this.status = 'recovered';
    //this.touchEnd.call(this, evt, this._gap);
    this._target.style.transform = 'translate3d(0, 0, 0)';
    this._target.style.transition = 'transform 0.5s linear';
  }

  var dropdownLoadingPlugin = dropdownLoading;
  if(typeof module !== 'undefined' && typeof module.exports === 'object'){
    module.exports = dropdownLoadingPlugin;
  }else{
    window.dropdownLoading = dropdownLoading;
  }

})(window);
