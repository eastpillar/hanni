function bodyBackgroundColor(bulim){
    var target=document.querySelector('body');
    if(bulim.value==='night'){
      target.style.backgroundColor='black';
      bulim.value='day';
    }else{
      target.style.backgroundColor='white';
      bulim.value='night';
    }
  }

  function youtubeMusicUrl(bulen){
    window.open(bulen)
  }
