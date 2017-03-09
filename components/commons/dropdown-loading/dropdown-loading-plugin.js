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
    this.prevUpGap = 0;//先前上拉距离
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

    if(this._gap >= 0){
      this._target.style.transform = 'translate3d(0,' + this._gap/3 + 'px, 0)';
    }else{
      this.prevUpGap += this._gap;
      if(Math.abs(this.prevUpGap) > this._target.offsetHeight){
        this._target.style.transform = 'translate3d(0,' + this._target.offsetHeight + (Math.abs(this.prevUpGap) - this._target.offsetHeight)/3 + 'px, 0)';
      }

    }
    this.touchMove.call(this, evt);

  }

  dropdownLoading.prototype._touchEnd = function(evt){


    if ( this._gap < 40 && this._gap > 0) {
      this.recover();
    } else if(this._gap > 40){//请求下载
      this.hold();
      this._loading(evt);
    }

    this.touchEnd.call(this, evt, this._gap);

    if(this.status !== 'holding' && this._gap > 0){//停留与上拉情况不回到原点
      this.recover();
    }
  }

  dropdownLoading.prototype._loading = function(evt){

    this.loading.call(this, evt);
    this.recover();
  }

  dropdownLoading.prototype.hold = function(){//停留加载状态

    this.status = 'holding';
    this.recover(this.loadingPosition);

  }

  dropdownLoading.prototype.recover = function(position){
    this.status = 'recovered';
    position = position || 0;//原点
    //this.touchEnd.call(this, evt, this._gap);
    this._gap  -= 3;
    this._target.style.transform = 'translate3d(0, ' + this._gap/3 + 'px, 0)';
    var self = this;
    if(this._gap > position){
      setTimeout(function(){
        self.recover.call(self, position);
      },12);
    }
  }

  var dropdownLoadingPlugin = dropdownLoading;
  if(typeof module !== 'undefined' && typeof module.exports === 'object'){
    module.exports = dropdownLoadingPlugin;
  }else{
    window.dropdownLoading = dropdownLoading;
  }

})(window);
