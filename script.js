//onMouseClick
for(let i=0; i<document.querySelectorAll(".key").length;i++){
    document.querySelectorAll(".key")[i].addEventListener("click", function(){
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimaton(buttonInnerHTML);
    });
}





//onKeypress
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimaton(event.key);
});
function makeSound(key){
     switch (key){
        case "a":
            var C = new Audio("notes/C.mp3");
            C.play();
            break;
        case "w":
            var Db = new Audio("notes/Db.mp3");
            Db.play();
            break;
        case "s":   
            var D = new Audio("notes/D.mp3");
            D.play();
            break;
        case "e":
            var Eb = new Audio("notes/Eb.mp3");
            Eb.play();
            break;
        case "d":
            var E = new Audio("notes/E.mp3");
            E.play();
            break;
        case "j":
            var F = new Audio("notes/F.mp3");
            F.play();
            break;
        case "i":
            var Gb = new Audio("notes/Gb.mp3");
            Gb.play();
            break;
        case "k":
            var G = new Audio("notes/G.mp3");
            G.play();
            break;
        case "o":
            var G = new Audio("notes/G.mp3");
            G.play();
            break;
        case "l":
            var Ab = new Audio("notes/Ab.mp3");
            Ab.play();
            break;
        case "p":
            var Bb = new Audio("notes/Bb.mp3");
            Bb.play();
            break;
        case ";":
            var B = new Audio("notes/B.mp3");
            B.play();
            break;
    }
}

function buttonAnimaton(currentkey){
    var activeButton = document.querySelector("#" + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    }, 100);
}   
