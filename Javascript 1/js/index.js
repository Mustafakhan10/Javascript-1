
    
document.getElementById('background-btn').addEventListener('click', function(){

    var backgroundImage = document.getElementById('newimg')
    
    var newimg = document.getElementById('background').style.background = "url('./images/android-meme-18.jpg')";
});
// create your event listener here
// add the background image change code inside of the event listener




function backgroundImage() {
    document.body.style.backgroundColor = "#f3f3f3";
    document.body.style.backgroundImage = "url('./images/android-meme-18.jpg')";
  }     


// BUTTON CONTROLS

// controls for the left button
document.getElementById('left').addEventListener('click', function() {
    
    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) - 60;

    document.getElementById('ball').style.left = newPosition + 'px';

});

// controls for the right button
// missing element id and event type
document.getElementById('right').addEventListener('click', function() {

    var position = document.getElementById('ball').style.left;

    var newPosition = parseInt(position) + 60;

    document.getElementById('ball').style.left = newPosition + 'px';
});
