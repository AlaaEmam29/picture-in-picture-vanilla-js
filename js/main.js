"use strict"
const startBtn = document.querySelector(".btn-start")
const videoDOM = document.getElementById("video")

const fetchApi = async () => {
 try{
    const captureStream = await navigator.mediaDevices.getDisplayMedia();
    videoDOM.srcObject = captureStream;
    videoDOM.onloadedmetadata = () => {
      videoDOM.play();
    };
  } catch (error) {
    console.log(error)
  }

}
startBtn.addEventListener("click", async function(){
startBtn.disabled =true
await videoDOM.requestPictureInPicture()
startBtn.disabled = false;


})

window.addEventListener("DOMContentLoaded", function(){
    fetchApi()
})
