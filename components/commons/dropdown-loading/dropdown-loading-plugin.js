;(function(window){
  'use strict';
  function noop (){

  }

  function dropdownLoading(dom){

    this._description = '<div id="dropdownLoadingDescription">下拉加载....</div>'
    this._target = dom.lastChild;

    this.touchMove = options.touchMove || noop;
    this.touchStart = options.touchStart || noop;
    this.touchEnd = options.touchEnd || noop;

    dom.lastChild.addEventListener('touchstart',this._touchStart.bind(this),false);
    dom.lastChild.addEventListener('touchmove',this._touchMove.bind(this),false);
    dom.lastChild.addEventListener('touchend',this._touchEnd.bind(this),false);

    dom.lastChild.before(description);

    this._description = document.querySelect('#dropdownLoadingDescription');
  }

  dropdownLoading.prototype.constructor = dropdownLoading;

  dropdownLoading.prototype._touchStart = function(event){
    this.startY = event.touches[0].pageY;
  }

  dropdownLoading.prototype._touchMove = function(event){
    var currentY = event.touches[0].pageY;
    this._gap = currentY - this.startY;
    if(this._gap){

      this._target.style.transform = 'translate3d(0,' + this._gap + 'px,0)';
    }
    this.touchMove.call(this, event);
  }

  dropdownLoading.prototype._touchEnd = function(event){
    this.touchEnd.call(this, event, this._gap);
    if( this._gap < 40 ){
      this._target.style.transform = 'translate3d(0, 0, 0)';
      this._target.style.tranition = 'transform 0.5s ease-in';
    }else{

    }
  }


  if(typeof module !== 'undefined' && typeof module.exports === 'object'){
    module.exports = dropdownLoading;
  }else{
    window.dropdownLoading = dropdownLoading;
  }

})(window);
