
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    var previousValue=new Array();
    var i=0;
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonText = button.textContent;


            if (buttonText === "=") {
                try {
                    const result = eval(display.value);
                    display.value = result;
                } catch (error) {
                    display.value = "Error";
                }
            } else if (buttonText === "AC") {
                display.value = "";
                previousValue=[];
            } else if (buttonText === "C") {

                display.value = previousValue[--i];
                
            } else {
                previousValue[i++] = display.value;
                display.value += buttonText;

            }
        });
    });
});
