var pictureArr = ['http://www.astonhotels.com/assets/slides/690x380-Hawaii-Turtle.jpg','http://www.colbybrownphotography.com/assets/Hawaii_4461.jpg', 'http://www.hawaiiactive.com/img/pictures/kauai-kalalau-valley-lookout.jpg'];
var originalPic = pictureArr[0];
var k = 0;

$('.slider').css("background-image", "url("+originalPic+")")

function slideMe (myArray){
  $('i').first().on('click', function (){
    if (k > 0){
      k -= 1;
    $('.slider').css("background-image", "url("+myArray[k]+")")
    }
  })

  $('i:nth-of-type(2)').on('click', function (){
    if (k < (myArray.length - 1)){
      k += 1;
    $('.slider').css("background-image", "url("+myArray[k]+")")
    }
  })
}

slideMe (pictureArr);
