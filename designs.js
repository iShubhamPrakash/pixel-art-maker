   $(document).ready(function() {
        //Select color input
        let colorChoice = $('#colorPicker');
        
        console.log("Working Shubham!!");
        console.log(colorChoice);

        // Select size inputs
       

        //when user click submit buttoon, width and height value is taken and makeGrid() is called
        
        function setSize() {
            let heightOfCanvas = $('#inputHeight').attr('value');
            let widthOfCanvas = $('#inputWidth').attr('value');

            console.log(heightOfCanvas);
            console.log(widthOfCanvas);
            makeGrid(heightOfCanvas, widthOfCanvas);
        }
       
        $('#submit-button').click(setSize());
        
 console.log(heightOfCanvas);
 console.log(widthOfCanvas);
        //function defination of makeGrid();
        function makeGrid(heightOfCanvas, widthOfCanvas) {
            let canvas = $('#pixelCanvas');

            for (let i = 1; i <= heightOfCanvas; i++) {
                canvas.append('<tr class="tableRow"> </tr>');
            }

            for (let j = 1; j <= widthOfCanvas; j++) {
                $('.tableRow').append('<td class="tableColumn"> </td>');
            }
        }
        
        // When size is submitted by the user, call makeGrid()
        
   });