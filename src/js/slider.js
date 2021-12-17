const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'cards',
  cardsEffect: {
  },
});


(function(){
  var text = document.getElementById("my_text"),
      testText;
      text.onkeyup          =  function testKey(){
         var testText       =  text.value;
          if(testText*1 + 0  !=  text.value){
            text.value      = testText.substring(0, testText.length - 1) 
            
          }
    
    
    
    
      }


})()