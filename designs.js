/**************************************************************************************/
/***************************  Creation of grit  ***************************************/
/**************************************************************************************/

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    let heightOfCanvas = $('#inputHeight').val();
    let widthOfCanvas = $('#inputWidth').val();
    makeGrid(heightOfCanvas, widthOfCanvas);
});

//Function defination of makeGrid
function makeGrid(heightOfCanvas, widthOfCanvas) {
    let canvas = $('#pixelCanvas');
    canvas.empty();
    for (let i = 0; i < heightOfCanvas; i++) {
        canvas.append('<tr class="tableRow"> </tr>');
    }
    for (let j = 0; j < widthOfCanvas; j++) {
        $('.tableRow').append('<td class="tableColumn"> </td>');
    }
}


/**************************************************************************************/
/******************************  Color filling  ***************************************/
/**************************************************************************************/

//Select color input
let color;
let colorPick = $('#colorPicker');
colorPick.trigger("click");
    console.log("hahah");
    console.log(colorPick.val());


colorPick.submit(function () {
    color = $('#colorPicker').val();
});
let box=$('.tableColumn');
box.click(function(){
    $(this).css("backgroundColor",red)
    
});