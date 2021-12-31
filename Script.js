let video = document.getElementById("vid");
video.pause();
let nameInput = document.getElementById("name");
let name;
let music = document.getElementById("music");
let button = document.getElementById("OK");
button.disabled = true;
let dis = document.getElementById("Display_it");
dis.style.visibility = "hidden";
let name_dis = document.getElementById("name_input");
function clicked(){
    name_dis.innerHTML = nameInput.value;
    dis.style.visibility = "visible";
    if(music.value == "S"){
        video.src = "Toll.mp4";
    }else{
        video.src = "Xuan.mp4";
    }
    video.play();
}
function animate(){
    if(music.value=="S" || music.value=="C"){
        button.disabled = false;
    }else{
        button.disabled = true;
    }
    requestAnimationFrame(animate);
}
animate()
