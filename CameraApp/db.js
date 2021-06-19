let req = indexedDB.open("galleryDB",1);
let db;
let src="";

    
let mainContainer = document.querySelector(".container");

req.addEventListener("success",function(e) {
    console.log("DB Success");
    db = req.result;
});
req.addEventListener("upgradeneeded",function(e) {
    console.log("Created DB");
    db = req.result;
    // creating Collection/Object store
    db.createObjectStore("Gallery", {keyPath: "mId"} );
   
});
req.addEventListener("error",function(e) {
    console.log("Error Ocuured in DB ", e);
});

function addMedia(media,type) {
    if(!db) return ;

    let obj = {mId:Date.now(),media, type};
    let tx = db.transaction("Gallery", "readwrite");
    let reqObjectStore = tx.objectStore("Gallery");
    reqObjectStore.add(obj);

}


function deleteMedia(id) {
      if (!db) return;

    let tx = db.transaction("Gallery", "readwrite");
    let gallery = tx.objectStore("Gallery");
    //when we set id as an attribute to delete btn it becomes a string but we have stored the id as a number in db so we have to typecast.
    gallery.delete(Number(id));
}

function viewMedia() {
  let tx = db.transaction("Gallery", "readonly");
  let gallery = tx.objectStore("Gallery");
  let cReq = gallery.openCursor();



  cReq.addEventListener("success", function () {
    let cursor = cReq.result;
    if (cursor) {
      let mo = cursor.value;
      let container = document.createElement("div");
      container.classList.add("media-container");

      //dom ke through media container banao
      if(mo.type=="video"){
        let src = window.URL.createObjectURL(mo.media);
        let vidHtml =  `  <div class="media">
            <video src="${src}" autoplay loop controls muted></video>
        </div>
        <button class="download">Download</button>
        <button class="delete" data-id="${mo.mId}" >Delete</button>`;


        container.innerHTML = vidHtml;
        src=mo.media;
    }else{ 
        src= mo.media;
        let imgHtml = `  <div class="media">
            <img src="${src}" \>
        </div>
        <button class="download">Download</button>
        <button class="delete" data-id="${mo.mId}" >Delete</button>`;
        // console.log(mo);
        container.innerHTML = imgHtml;
        //I have to render a image tag
    }
  
    //adding listners on download and delete buttons created above

    let downloadBtn = container.querySelector('.download');

    let deleteBtn = container.querySelector(".delete")
      deleteBtn.addEventListener("click",function(e){
          //removing from db
         let id = e.currentTarget.getAttribute("data-id")
         deleteMedia(id)

         //removing from ui
         e.currentTarget.parentElement.remove()
      })


    downloadBtn.addEventListener('click',function(e){
        let a = document.createElement('a');
        a.href= src;
        if(mo.type == "video"){
            a.download = "video.mp4"
        }else{
                  a.download = "img.jpg"
        }
        a.click();
        a.remove();
    });


      mainContainer.append(container);
    src="";
      cursor.continue();
    }
  });

}