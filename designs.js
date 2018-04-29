//jQuery selector for submit button-
let onSubmit = $('#sizePicker');
//pressing submit button calls makeGrid function-
onSubmit.submit(function (event) {
    //Prevent default action of submit button-
    event.preventDefault();
    //checks if submit button working-
    console.log("Submit button working bro");
    //Call makeGrid to creates a grid of cells-
    makeGrid();
});

//To creae a grid of specified dimension-
function makeGrid() {
    //store the value of height
    let gridHeight = $('#inputHeight').val();

    //store the value of width
    let gridWidth = $('#inputWidth').val();

    //checks if makeGrid is called and log the value of grid dimension in console
    console.log("makeGrid call successful bro-");
    console.log("Height=" + gridHeight + " Width=" + gridWidth);

    //jQuery selector for table
    let canvas = $('#pixelCanvas');

    //removes previous table cells
    canvas.children().remove();
    for (i = 0; i < gridHeight; i++) {
        //creates table rows
        canvas.append('<tr></tr>');
    }
    //jQuery selector for created table row
    row = $('tr');
    for (j = 0; j < gridWidth; j++) {
        //created table data
        row.append('<td></td>');
    }


    //select clicked cell            
    let cell = canvas.find('td');
    // When td is single clicked,change color of td to selected color

    cell.click(function () {
        var color;
        color = $("#colorPicker").val(); // Select color input
        console.log("changeColor is running, color=" + color); //log color value
        $(this).attr('bgcolor', color);
    });

    //on double click change color back to white
    cell.dblclick(function () {
        $(this).attr('bgcolor', 'white');
    });
    //adding drag-to-draw feature:
    let drag = false;
    cell.mousedown(function () {
        drag = true;
    });
    cell.mouseup(function () {
        drag = false;
    });
    //on click and drag color the grid
    cell.mousemove(function () {
        if (drag) {
            var color;
            color = $("#colorPicker").val(); // Select color input
            console.log("changeColor is running, color=" + color); //log color value
            $(this).attr('bgcolor', color);
        }
    });


}