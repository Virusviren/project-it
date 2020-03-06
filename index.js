
      const player = document.getElementById("player");
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
      const captureButton = document.getElementById("capture");

      let str = "";

      const constraints = {
        video: true
      };
      function postitem(){
        $.ajax({
          type:"POST",
          url:"http://localhost:3000/",
          timeout:2000,
          data:{
            text:str
          },
          success: function(data) {
            //show content
            alert('Success!')
        },
        error: function(jqXHR, textStatus, err) {
            //show error message
            console.log('text status '+textStatus+', err '+err);
            

        }
        });
      }

      captureButton.addEventListener("click", () => {
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, canvas.width, canvas.height);
        const dataURI = canvas.toDataURL("image/jpeg", 0.5);
        str = dataURI;
        str = dataURI.slice(23);
        // alert(str);
        console.log(str);
        postitem();
        
      });

      // Attach the video stream to the video element and autoplay.
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        player.srcObject = stream;
      });

      
      
      //exports.barcode1=(str)=>{
        //return str;
//}
      