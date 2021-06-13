let video = document.querySelector("video");
let recBtn = document.querySelector("#recording");
let recDiv = recBtn.querySelector("div");
let capBtn = document.querySelector("#capture");
let capDiv = capBtn.querySelector("div");
let body= document.querySelector("body");
let isRecording = false;
let chunks = [];
let mediaRecorder;
let appliedFilter;
let filters= document.querySelectorAll(".filter");

      for(let i=0;i<filters.length;i++){
        filters[i].addEventListener("click",function(e){
          removeFilters();
          appliedFilter = e.currentTarget.style.backgroundColor;
          let div = document.createElement("div");
          div.style.backgroundColor=appliedFilter;
          div.classList.add("filter-div");
          body.append(div);
        });
      }

      //single btn
      recBtn.addEventListener("click", function (e) {
        if (isRecording == false) {
          isRecording = true;
          mediaRecorder.start();
          recDiv.classList.add("recording-animation");
        } else {
          isRecording = false;
          mediaRecorder.stop();
          recDiv.classList.remove("recording-animation");
        }
      });

      capBtn.addEventListener("click", function (e) {
        let canvas = document.createElement("canvas");
        capDiv.classList.add("capture-animation");
        setTimeout(function (e) {
          capDiv.classList.remove("capture-animation");
        }, 1000);
        // get the current camera'sresolution
        canvas.height = video.videoHeight;
        canvas.width = video.videoWidth;
        let tool = canvas.getContext("2d");
        tool.drawImage(video, 0, 0);
        // data url directly contains the data(does'nt points to a resource) so no need of blob
        let link = canvas.toDataURL();
        let a = document.createElement("a");
        a.href = link;
        a.download = "image.jpg";
        a.click();
        a.remove();
        canvas.remove();
      });

      // navigator.mediaDevices.getUserMedia takes object of devices required and is a promise
      // asks a single permission for both audio and video
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(function (mediaStream) {
          //resolving promise

          /*
            //in case of blank video/codec problem
            let option = {mimeType: 'video/webm'};
            mediaRecorder = new MediaRecorder(mediaStream,option);
            */
          mediaRecorder = new MediaRecorder(mediaStream);

          //dataavailabe
          mediaRecorder.addEventListener("dataavailable", function (e) {
            chunks.push(e.data);
          });

          //stop
          mediaRecorder.addEventListener("stop", function (e) {
            let blob = new Blob(chunks, { type: "video/mp4" });

            //in case of option is provided to mediaRecorder
            // let blob = new Blob(chunks, {type: "video/mp4"});

            chunks = []; //clearing for further recordings

            // creating anchor
            let a = document.createElement("a");

            //creating URL and attaching that to anchor
            let url = window.URL.createObjectURL(blob);
            a.href = url;

            //Naming the file to be downloaded
            a.download = "video.mp4";
            // a.download= "video.webm"

            //clicking the anchor
            a.click();
            //no need or anchor now
            a.remove();
          });
          // video.height = screen.height;
          video.width = screen.width;
          video.style.overflow = "hidden";
          video.srcObject = mediaStream;
        })
        .catch(function (err) {
          // when promise is rejected
          console.log(err); //Permission Denied.
        });

      //  we can make seperate permission for audio and video => seperate objects and the we have to  sync audio and video



function removeFilters(){
  let Filter = document.querySelector(".filter-div");
  if(Filter) Filter.remove();
}