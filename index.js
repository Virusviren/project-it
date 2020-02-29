
      const player = document.getElementById("player");
      const canvas = document.getElementById("canvas");
      const context = canvas.getContext("2d");
      const captureButton = document.getElementById("capture");

      const constraints = {
        video: true
      };

      captureButton.addEventListener("click", () => {
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, canvas.width, canvas.height);
        const dataURI = canvas.toDataURL("image/jpeg", 0.5);

        let str = dataURI.slice(23);
        // alert(str);
        console.log(str);
        
        document.querySelector("h1").innerHTML=(str);
      });

      // Attach the video stream to the video element and autoplay.
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        player.srcObject = stream;
      });
      