let body = document.querySelector('body');
let getButton = document.querySelector('.generate');
let colorText = document.querySelector('.current-color');
let hexSym = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F']
getButton.addEventListener('click', function(evt) {
    let newColor = '#';
    evt.preventDefault;
    for (let i = 0; i < 6; i++) {
        newColor += hexSym[Math.floor((Math.random() * hexSym.length))];
        console.log(newColor); 
    }
    body.style.backgroundColor = newColor;
    colorText.textContent = newColor;
    colorText.style.color = newColor;  
});


