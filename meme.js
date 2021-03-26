
function update_image(){
let img = document.querySelector('img'); 
 img.src =  window.URL.createObjectURL(file);

}


function update_text(){
  let user_text = document.getElementById("user_text");
    let meme_text = document.getElementById("meme_text");
    meme_text.innerHTML = user_text.value;
}