/***************************  Creation of grid  ***************************************/

$('#sizePicker').submit(function(event) {
    event.preventDefault();
    let heightOfCanvas = $('#inputHeight').val();
    let widthOfCanvas = $('#inputWidth').val();
    makeGrid(heightOfCanvas, widthOfCanvas);
});

//Function defination of makeGrid
function makeGrid(heightOfCanvas, widthOfCanvas) {
    let canvas = $('#pixelCanvas');
    let row;

    canvas.empty();
    for (let i = 1; i <= heightOfCanvas; i++) {
        canvas.append('<tr class="tableRow"> </tr>');
    }
    for (let j = 1; j <= widthOfCanvas; j++) {
        row = $('.tableRow');
        row.append('<td class="tableColumn"> </td>');
    }

    //assign unique class to each box
    $('.tableColumn').each(function(i){
        $(this).addClass('box'+(i+1));
    });


}

/******************************  Color filling  ***************************************/

console.log("yaha tak to hik h");

//set color on select
let colorPick = $('#colorPicker');
var color;
colorPick.change(function() {
    color = colorPick.val();
    console.log("color is " + color);

//color box on click
    let gridBox=$('.tableColumn');
    gridBox.click(function() {
    gridBox.css("background-color", color);

    });
//color box white on doublr click
    gridBox.dblclick(function() {
    gridBox.css("background-color", "white");
    });

});

//select clicked box-