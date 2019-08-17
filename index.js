
function makeSound(key){
    switch(key){
      case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
      break;
      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
      break;
      case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
      break;
      case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      break;
      case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
      break;
      case "j":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
      break;
      case "l":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
      break;
      default:

    }

}
//document.querySelectorAll(".drum").length --> the number of all elements under the clas "drum"
for(var x=0;x<document.querySelectorAll(".drum").length;x++){

  document.querySelectorAll(".drum")[x].addEventListener("click", function(event){
    //Code is working in this END...
      makeSound(this.innerHTML);
      makeAnimation(this.innerHTML);
  });

}

document.addEventListener("keydown" , function(event){
    makeSound(event.key);
    makeAnimation(event.key);
});

function makeAnimation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("." + key).classList.remove("pressed");
    }, 100);

}
