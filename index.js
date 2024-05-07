document.getElementById('printButton').addEventListener('click', function() {
    var colorInput = document.getElementById('colorInput');
    var colorBox1 = document.getElementById('colorBox1');
    var colorList1 = document.getElementById('colorList1');

    
    var newColor = document.createElement('li');
    newColor.textContent = colorInput.value;

   
    colorList1.insertBefore(newColor, colorList1.firstChild);

   
    colorBox1.style.backgroundColor = colorInput.value;
});

document.getElementById('randomButton').addEventListener('click', function() {
    var colorBox2 = document.getElementById('colorBox2');
    var colorList2 = document.getElementById('colorList2');

  
    var newColor = document.createElement('li');
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    newColor.textContent = randomColor;

   
    colorList2.insertBefore(newColor, colorList2.firstChild);

   
    colorBox2.style.backgroundColor = randomColor;
});

document.getElementById('resetButton').addEventListener('click', function() {
    var colorBox1 = document.getElementById('colorBox1');
    var colorList1 = document.getElementById('colorList1');
    var colorBox2 = document.getElementById('colorBox2');
    var colorList2 = document.getElementById('colorList2');


    while (colorList1.firstChild) {
        colorList1.removeChild(colorList1.firstChild);
    }
    while (colorList2.firstChild) {
        colorList2.removeChild(colorList2.firstChild);
    }

    colorBox1.style.backgroundColor = 'white';
    colorBox2.style.backgroundColor = 'white';
});