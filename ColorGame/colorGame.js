//Colors array to store the different colors
var numSquares=6;
var colors=generateRandomColors(numSquares);


var squares = document.querySelectorAll(".square");
var pickedColor=pickColor();

var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");



var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


//Event listener on the easy button. 
//Add or remove CSS class for the same. 
//Regeenerate colors array, make only 3 squares colored, and the rest as display none. 
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numSquares=3;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++){

        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none"; 
        }
    }

});

hardBtn.addEventListener("click",function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    numSquares=6;
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;

    for(var i=0;i<squares.length;i++){        
        squares[i].style.backgroundColor=colors[i];
        squares[i].style.display="block"; 

    }
});


resetButton.addEventListener("click",function(){
    //Generate random colors
    resetButton.textContent="New Colors!";
    colors=generateRandomColors(numSquares);
    //update random picked color
    pickedColor=pickColor();
    //To remove correct after winning
    messageDisplay.textContent="";
    //Change display
    colorDisplay.textContent=pickedColor;
    //Change colors of all squares 
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=colors[i];
    }
    h1.style.backgroundColor="steelblue"; 
})

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Code executed when page loads

//Initial config
colorDisplay.textContent=pickedColor;


//Add event listeneres to all squares. Check if clicked color is the picked color!!
//Main logic
for(var i=0;i<squares.length;i++){
    //Add initial colors to squares
    squares[i].style.backgroundColor=colors[i];
    
    //Add event listener to squares all squares and get the clicked color
    squares[i].addEventListener("click",function(){
        var clickedColor=this.style.backgroundColor;

        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct"; 
            changeColors(clickedColor);
            resetButton.textContent="Play Again?";
            h1.style.background=clickedColor; 
        }
        else{
            //Match color to background color
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again!";
        }
    })
}
//Change colors when won
function changeColors(color){
    
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }

}

function pickColor(){
     var random = Math.floor(Math.random()*colors.length);
     return colors[random];
}

//Generate num of random colors. 
function generateRandomColors(num){

    var arr=[];

    for(var i=0;i<num;i++){

        arr[i]= randomColor();
    }
    return arr;

}

//Generate one random color
function randomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var colorGen="rgb("+red+", "+ green +", " + blue + ")";
    //alert(colorGen);

    return colorGen;

}
