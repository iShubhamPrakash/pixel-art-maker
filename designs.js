   $(document).ready(function() {
        //Select color input
        let colorChoice = $('#colorPicker');
        
        console.log("Working Shubham!!");
        console.log(colorChoice);

        // Select size inputs
            let heightOfCanvas = $('#inputHeight').attr('value');
            let widthOfCanvas = $('#inputWidth').attr('value');

            console.log(heightOfCanvas);
            console.log(widthOfCanvas);

        // When size is submitted by the user, call makeGrid()
         $('#submit-button').click(makeGrid(heightOfCanvas, widthOfCanvas));
        
         function makeGrid(heightOfCanvas, widthOfCanvas) {

            let canvas = $('#pixelCanvas');

            for (let i = 0; i < heightOfCanvas; i++){
                 canvas.append('<tr class="tableRow"> </tr>');
                 for (let j = 0; j < widthOfCanvas; j++) {
                     $('.tableRow').append('<td class="tableColumn"> </td>');
                 }
             }

             
         }
        
   });