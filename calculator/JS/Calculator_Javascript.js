//creates an object to keep track of values. 
const Calculator = {
    //This will display 0 on the caluclation screen.
    Display_Value:'0',
    //This will hold the first operand for and expressions, we set it to null for now. 
    First_Operand: null,
    // This check wether or not the seconf operand has been inputted by the user.
    Wait_Second_Operand: false,
    //This will hole the operator, we set it to null for now. 
    operator: null,
};

//THis modifies values each time a button is clicked on.
function Input_Digit(digit){
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //This checks id the Wait_Second_Operand is true and sets Display_Value
    // to the key that was click on. 
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Dislay_Value if the current value is 0 
        // otherwise it add onto it. 
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points. 
function Input_Decimal(dot) {
    //This ensures that accidental clicking of the decimal point doesn't 
    //cause bugs in the operation. 
    if (Calculator.Wait_Second_Operand === true) return;
    if(!Calculator.Display_Value.includes(dot)){
        //We are saying that is the Diplay_Value does not cotain a decimal point
        //we want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}

//This section handles operaters 
function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number
    // dipslay on the screen to a number and the store the result in
    // Calculator.Firest_ Operator if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exists and if Wait_Second_Operand is true,
    //Then update the operator and exits from function.
    if (operator && Calculator.Wait_Second_Operand){
        Calculator.operator = Next_Operator;
        return;
    } 
    if (First_Operand == null){
        Calculator.First_Operand = Value_of_Input;
    } else if (operator){//Check if an operator alreasy exists
        const Value_Now= First_Operand || 0;
        //If operand ecists property look up is performed for the operator 
        // in the Perform_Calculation object and the function that matches the
        // operator is exexcuted.
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        //Here we add a ficed amount of number after the decimal.
        result = Number(result).toFixed (9);
        //This will remove any trailing 0's
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = {
    '/':(First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*':(First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+':(First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-':(First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=':(First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand= null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
} 
//This finction updates the calculator screen with the contents of Display_Value
function Update_Display(){
    //Make use of the calculator-screen class to target the
    //input tag in the HTML document
    const display= document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is on object that represents the element
    //that was clicked
    const{ target } = event;
    //It the element that was clicked on is not a button, exit function.
    if(!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return
    }
    if (target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensure that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')){
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})
