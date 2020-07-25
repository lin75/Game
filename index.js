let nums = [];
var moves = 0;
//generate a randomNumber
for (let i = 0; i < 9; i++) {

  var randomNumber = Math.floor(Math.random() * 9) + 1; //1-9
  while (nums.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 9) + 1; // generator for non-duplicated randomNumber

  }

  nums.push(randomNumber); //push randomNumber in an array
  // console.log(nums);
  var randomSliceImage = "img" + nums[i] + ".jpg"; //img1.png - img9.png in random
  var randomImageSource = "images/" + randomSliceImage; //images/img1.png - images/img9.png
  var image = document.querySelectorAll("img")[i];
  image.setAttribute("src", randomImageSource) //places each image into each boxes

}


//found out Which two image is checked
//swap the two images that were checked by their value
function swapImages() {
  // initialize two array
  //img_checked to store the two images that are being selected
  //checkbox_checked store the checked box
  const img_checked = [];
  const checkbox_checked = [];
  const checkedBoxes = document.getElementsByClassName("checkBox");
  for (var i = 0; checkedBoxes[i]; ++i) {
    if (checkedBoxes[i].checked) {
      img_checked.push(checkedBoxes[i].value);
      checkbox_checked.push(checkedBoxes[i]);
    }
  }
  // check if there are exactly two images checked and if not make a alert and reset all checkbox
  if (img_checked.length > 2) {

    alert("You Selected More Than 2 images");
    $('input[type=checkbox]').each(function() {
      this.checked = false;


    });

  } else if (img_checked.length < 2) {

    alert("You selected less than 2 images,Please Reselect");
    $('input[type=checkbox]').each(function() {
      this.checked = false;

    });

  } else {
    // switch the value of the checked box
    var tmp = checkbox_checked[0].value;
    checkbox_checked[0].value = checkbox_checked[1].value;
    checkbox_checked[1].value = tmp;
    // get the images that are selcted by using img_checked array
    //switching attributes of two images
    const img1 = document.getElementById(img_checked[0]);
    const img2 = document.getElementById(img_checked[1]);
    // console.log(img1, img2);
    const temp_src = img1.src;
    const temp_id = img1.id;
    const img2_src = img2.src;
    img1.id = img2.id;
    img2.id = temp_id;
    //switch the two images
    img1.setAttribute("src", img2_src);
    img2.setAttribute("src", temp_src);
    moves++;
    $('input[type=checkbox]').each(function() {
      this.checked = false;

      document.getElementById("move").innerHTML = "Turns: " +  moves;
    });

  }
  winCondition();
}
//check if you won or not if you won pop up the full image .
function winCondition() {
   const imageSrc=[];
   const checkArray=[];
   var won =false;
  // push src of every image to an array
  for(var i=0;i<nums.length;i++){
 imageSrc.push(document.querySelectorAll("img")[i].src);

}
 for(var j=0;j<imageSrc.length;j++){
  // check to see if src of image is match to image number by using checkArray
 var checkString=("img"+(j+1))
  checkArray.push(imageSrc[j].includes(checkString));
  }
  //check to see if every image is at right position by using boolean array and every() function
let checker = arr => arr.every(v => v === true);
//if every position is correct then then game
 if(checker(checkArray)){
   gameEnd();
 }
}

//disable button ,change h1 to congraute user
function gameEnd(){
 //  const image=document.createElement("img");
 // image.src="images/img10.jpg";
 // document.querySelector('.container').appendChild(image);
 document.getElementById('move').innerHTML="Congratulation You Won!!!";
 document.getElementById("move").style.color = "red";
 document.getElementById("myBtn").disabled = true;
 document.getElementById("myBtn").innerHTML="Refresh Website To Play Again";
 document.getElementById("myBtn").style.width="400px";

}




// swap button to trigger events
document.getElementById("myBtn").addEventListener("click", function() {
  swapImages();


});

// document.getElementById("helpBtn".addEventListener("click",function{
//
// }))
