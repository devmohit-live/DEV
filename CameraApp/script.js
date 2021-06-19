let video = document.querySelector("video");
let recBtn = document.querySelector("#recording");
let recDiv = recBtn.querySelector("div");
let capBtn = document.querySelector("#capture");
let capDiv = capBtn.querySelector("div");
let body = document.querySelector("body");
let isRecording = false;
let chunks = [];
let mediaRecorder;
let appliedFilter;
let filters = document.querySelectorAll(".filter");
let currentZoom = 1;
const minZoom = 1;
const maxZoom = 3;
let galleryBtn = document.querySelector('#gallery');

galleryBtn.addEventListener("click",function(){
location.assign("gallery.html")
});

//zoom functionalities

let zoomInBtn = document.querySelector(".zoom-in");
let zoomOutBtn = document.querySelector(".zoom-out");

zoomInBtn.addEventListener("click", function (e) {
  if (currentZoom < maxZoom) {
    currentZoom = currentZoom + 0.1;
  }
  video.style.transform = `scale(${currentZoom})`;
});
zoomOutBtn.addEventListener("click", function (e) {
  if (currentZoom > minZoom) {
    currentZoom = currentZoom - 0.1;
  }
  video.style.transform = `scale(${currentZoom})`;
});

//filters

function removeFilters() {
  let Filter = document.querySelector(".filter-div");
  if (Filter) Filter.remove();
}


for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener("click", function (e) {
    removeFilters();
    appliedFilter = e.currentTarget.style.backgroundColor;
    let div = document.createElement("div");
    div.style.backgroundColor = appliedFilter;
    div.classList.add("filter-div");
    body.append(div);
  });
}


//recording
recBtn.addEventListener("click", function (e) {
  if (isRecording == false) {
    isRecording = true;
    mediaRecorder.start();
    appliedFilter = ""; //color remove -> no recording with filters
    removeFilters(); //remove from ui too

    //zooming not allowed in vide recording
    currentZoom=1;
    video.style.transform="scale(1)";
    recDiv.classList.add("recording-animation");
  } else {
    isRecording = false;
    mediaRecorder.stop();
    recDiv.classList.remove("recording-animation");
  }
});


//image capture
capBtn.addEventListener("click", function (e) {
  let canvas = document.createElement("canvas");
  capDiv.classList.add("capture-animation");

  //removing animation after 1sec for next capture addition
  setTimeout(function (e) {
    capDiv.classList.remove("capture-animation");
  }, 1000);
  // get the current camera'sresolution
  canvas.height = video.videoHeight;
  canvas.width = video.videoWidth;
  let tool = canvas.getContext("2d");

  //shifting origin
  let X = canvas.width/2;
  let Y = canvas.height/2;
  tool.translate(X,Y);

  tool.scale(currentZoom,currentZoom);
  //reshiting back to top-left
  tool.translate(-X,-Y);

  tool.drawImage(video, 0, 0);
  if (appliedFilter) {
    tool.fillStyle = appliedFilter;
    tool.fillRect(0, 0, canvas.width, canvas.height);
  }

  //saving
  let link = canvas.toDataURL();
  addMedia(link,"image");

// TODO:
  // let a = document.createElement("a");
  // a.href = link;
  // a.download = "image.jpg";
  // a.click();
  // a.remove();
  // canvas.remove();
});


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
      addMedia(blob,"video");

      //in case of option is provided to mediaRecorder
      // let blob = new Blob(chunks, {type: "video/mp4"});

      chunks = []; //clearing for further recordings

      // TODO: video
      // let a = document.createElement("a");
      // let url = window.URL.createObjectURL(blob);
      // a.href = url;
      // a.download = "video.mp4";
      // a.click();
      // a.remove();
    });

    // video.style.overflow = "hidden";
    video.srcObject = mediaStream;
  })
  .catch(function (err) {
    // when promise is rejected
    console.log(err); //Permission Denied.
  });

//  we can make seperate permission for audio and video => seperate objects and the we have to  sync audio and video

