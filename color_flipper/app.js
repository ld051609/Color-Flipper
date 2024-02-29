/*  Logic: when clicking 'click me'button
**  1) the color background of 'background-container' change 
**  2) the hex text appear next to appear color
**
 */

//declare variables
const clickMeButton = document.getElementById('click-me-button');
const backgrounContainer = document.querySelector('.background-container');
const hexCode = document.getElementById('hex-code');

//function generate random hexcode
function generateRandomHexCode(){
    const hexCharacters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let randomHexCode = `#`;
    for (let i = 0; i < 6; i++){
        const randomHexChar = Math.floor(Math.random() * hexCharacters.length);
        randomHexCode += hexCharacters[randomHexChar];
    }
    return randomHexCode;
};

//function change color background
const changeBackgroundColor = () => {
    //call function to generate random hexcode
    const hexCodeForBackground = generateRandomHexCode();
    //set the background of a container with generated random hex code
    backgrounContainer.setAttribute("style", `background-color: ${hexCodeForBackground};`);
    //add hexCode after the background
    hexCode.innerText = `${hexCodeForBackground}`;
};


//call event listener on the button
clickMeButton.addEventListener('click', changeBackgroundColor);
