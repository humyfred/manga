;(function(window){
  'use strict';
  function dropdownLoading(dom){

    this._description = '<div id="dropdownLoadingDescription">下拉加载....</div>'
    this._target = dom.lastChild;

    dom.lastChild.addEventListener('touchstart',this.onTouchStart.bind(this),false);
    dom.lastChild.addEventListener('touchmove',this.onTouchMove.bind(this),false);
    dom.lastChild.addEventListener('touchend',this.onTouchEnd.bind(this),false);

    dom.lastChild.before(description);

    this._description = document.querySelect('#dropdownLoadingDescription');
  }

  dropdownLoading.prototype.onTouchStart = function(event){
    this.startY = event.touches[0].pageY;
  }

  dropdownLoading.prototype.onTouchMove = function(event){
    var currentY = event.touches[0].pageY;

  }

  dropdownLoading.prototype.onTouchEnd = function(event){

  }


  if(typeof module !==undefined && typeof module.export === 'object'){
    module.export = dropdownLoading;
  }else{
    window.dropdownLoading = dropdownLoading;
  }

})(window);
