// This variable keeps track of whose trun it is.
let activePlayer= 'X';
//This array store an array of moves.We use this to determine win conditions. 
let selectedSquares = [];

//This function is for placing an x oe o in a square.
function placeXOrO(squareNumber) {
    //THis condition ensures a square hasn't been selectd already.
    // The .some() method is used to check each element of the selectSquare array
    //to see if it contains the square number clicked 0n.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrives the HTML element if that was clciked.
         let select= document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activePlayer==='X') {
            //If activePlayer is equal to "X", the x.png is place in HTML
            select.style.backgroundImage ='url("./images/x.png")';
            //Active player may only be 'X' or 'O' so, if not 'X' is must be 'O"
         } else {
            //If active Player is qual to 'O", the o.png is placed in HTML 
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active Player is 'X' chande to "O".
            activePlayer= 'O';
            //if active player is anythign other than 'X' 
        } else {
            //Change the activePlayer to 'X'
            activePlayer= 'X';
        } 
        //This function plays placment sound.
        audio('./media/click.mp3');
        //This condition checks to see if it is the computer turn.
        if (activePlayer === 'O') {
            //This function disables clicking for computer trun.
            disableClick();
            //This function waits 1 second before the computer places an image enables click.
            setTimeout(function () { computersTurn(); }, 1000);
        }
                // Returning true is needed for out computerTurn() function to work.
        return true;
    }
    //THis function results in a random square being selected by the computer.
    function computersTurn(){
        //This boolean is needed for out while loop.
        let success = false;
        //This variable store a random number 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between )and 8 is elected.
            pickASquare=String(Math.floor(Math.random() * 9));
            //If the random number evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickASquare)){
                //This line calls the function.
                placeXOrO(pickASquare);
                //This changes out boolean and ends the loop.
                success=  true;
            };
        }
    }
}

//This function pares the selescted Squares array to searh for win condition.
//drawLine() function is called to draw a line on the screen if the condition is met.
function checkWinConditions(){
    // X 0,1,2 condition.
    if (arrayIncludes('0X','1X','2X')){ drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5, condition 
    else if (arrayIncludes('3X', '4X', '5X')){drawWinLine(50, 304, 558, 304) }
    //X 6,7,8 condition.
    else if (arrayIncludes('6X', '7X','8X')){drawWinLine(50, 508, 558, 508) }
    // X0,3,6 condition.
    else if(arrayIncludes('0X', '3X', '6X')) {drawWinLine(100, 50, 100, 558) }
    //X1,4, 7 condition.
    else if (arrayIncludes('1X','4X','7X')) {drawWinLine(304, 50, 304, 558) }
    // X 2,5 ,8 condition.
    else if (arrayIncludes('2X','5X','8X')){ drawWinLine(508, 50, 508, 558) } 
    // X6, 4,2 condition.
    else if (arrayIncludes('6X','4X','2X')){ drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 2 condition.
    else if (arrayIncludes('0X', '4X','8X')){drawWinLine(100, 100, 520, 520)}
    // O 0,1,2 conditon.
    else if (arrayIncludes('0O','1O','2O')){ drawWinLine (50, 100, 558,100)}
    // O 3, 4, 5 condition.
    else if (arrayIncludes('3O','4O','5O')){ drawWinLine(50, 304, 558, 304)}
    // O 6,7,8 condition.
    else if (arrayIncludes('60','7O','8O')){drawWinLine(50, 508, 558, 508)}
    // O 0,3,6 condition.
    else if (arrayIncludes('0O','3O','6O')){drawWinLine(100, 50, 100, 558)}
    // O 1, 4, 7 condition.
    else if (arrayIncludes('1O','4O','7O' )){drawWinLine(304, 50, 304, 558)}
    // O 2,5, 8 condition.
    else if (arrayIncludes('2O','5O','8O')){drawWinLine(508, 50, 508, 558)}
    // O 6,4,2 condition.
    else if ( arrayIncludes('6O','4O','2O')){drawWinLine(100, 508, 510, 90)}
    //O 6, 4, 2 condition.
    else if (arrayIncludes('0O', '4O', '8O')){ drawWinLine(100, 100, 520, 520)}
    //This condtion checks for a tie. If none of the about condition are met and 
    //9 squares are selected the code executes.
    else if (selectedSquares.length >=9) {
        //This function plays the tie game sound.
        audio('./media/uh_oh.mp3');
        //This function sets a .3 second time before the reset if caller.
        setTimeout(function(){ resetGame(); }, 500);
    }
    // This function checks if an array includes 3 strings. It is used to check for
    // each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a= selectedSquares.includes(squareA);
        const b= selectedSquares.includes(squareB);
        const c= selectedSquares.includes(squareC);
        //If the 3 variables we pass are all included in out array then
        //true is returned and our else if conditon executes the drawLine() function.
        if( a === true && b === true && c === true){ return true;}
    }
}

//This functoinmake out body element temporarily unclickable.
function disableClick() {
    //This make our body unclickable.
    body.style.pointerEvents = 'none';
    // This make out body clickable again after 1 second.
    setTimeout(function () { body.style.pointerEvents= 'auto'; }, 1000); 
}

//THis function takes a string parameter of the path you set earlier for 
//placement sound('./media/place.mp3')
function audio(audioURL) {
   //We create a new audio object and we pass the path as a parameter.
   let audio= new Audio(audioURL);
   //Play method plays out audio sound.
   audio.play();
}

// This function utilizes HTML canvas to draw wint lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //This line accesses out HTML canvas element. 
    const canvas = document.getElementById('win-lines');
    //This line gives us acess to methods and properties to use on canvas. 
    const c = canvas.getContext('2d');
    //This line indicates where the start of a lines X axis is.
    let x1 = coordX1,
        //This line indicates where the start of a lines y axis is.
        y1 = coordY1,
        //THis line indicates where the end of a lines x axis is.
        x2 = coordX2,
        //THis line indicates where the end of a line x axis is.
        y2= coordY2,
        //The variable stores temporary x axis data we update in our animation loop. 
        x = x1,
        //THis variable stores temporary axis data we update inoutanimation loop.
        y = y1;  
    //This function interacts with the canvas.
    function animateLineDrawing() {
        //This variable creats a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //This method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        //This method starts a new path.
        c.beginPath();
        //This method indicates the end point inour line.
        c.moveTo(x1, y1);
        //This method indicates the end point in our line.
        c.lineTo(x, y);
        //This method sets the width of our line.
        c.lineWidth = 10;
        //This method sets the color of our line. 
        c.strokeStyle= 'rgba(163, 8, 8, .8)';
        // Method draws everything we lain out above.
        c.stroke();
        //This condition checks if we've reached the end points.
        if (x1 <= x2 && y1 <= y2) {
            //This conditon adds 10 to the previous end x endpoint.
            if(x < x2) {x += 10;}
            //THis condition adds 10 to the previous endpoint.
            if(y < y2){ y += 10;}
            //This condition is similar to the one above.
            //THis is necesary for the 6, 4, 2, win conditions.
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //THis condition is similar to the one above.
        //This is necessary for the 6,4, 2 winconditon.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10;}
            if (y > y2) {y -= 10;}
            if(x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop); }
        }
    }
        // This funtion clears our canvas after our win line is drawn.
        function clear(){
            //This line starts our animation loop. 
            const animationLoop = requestAnimatonFrame(clear);
            //THis line clears out canvas.
            c.clearRect(0, 0, 608, 608);
            //This line stops out animaltion loop
            cancelAnimationFrame(animationLoop);
        }
        //THis line disallows clicking while the win sound is playiing
        disableClick();
        //this line plays the win sounds.
        audio('./media/tada.mp3');
        //THis line calls out main animation loop.
        animateLineDrawing();
        //That linewiats 1 secon. RThen clears canvas, rests game, an allows clicking agian.
        setTimeout(function () { clear(); restsetGame(); }, 1000); 
    }
    
    //THis funstion resets the game in the event of a tie or a win.
    function resetGame(){
        //This for loop iterated through each HTMl square element.
        for(let i = 0; i < 9; i++){
            //This variables gets the HTML element i.
            let square = document.getElementById(String(i));
            //This remove our elements backgroundImage.
            square.style.backgroundImage = '';
        }
        //This resets out array so it is empty and we can start over.
        selectedSquares = [];
    }