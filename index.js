

for(let i=0;i<=6; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        let buttoninnerHtml= this.innerHTML;
        makeSound(buttoninnerHtml);

       
       
    })




}



document.addEventListener("keypress",function(event){
    makeSound(event.key);
})

function makeSound(key){

    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3')
            
                audio.play();
            
        break;

        case "a":
            var audi = new Audio('sounds/kick-bass.mp3')
            
                audi.play();
            
        break;

        case "s":
            var aud = new Audio('sounds/snare.mp3')
            
                aud.play();
            
        break;

        case "d":
            var au = new Audio('sounds/tom-1.mp3')
            
                au.play();
            
        break;

        case "j":
            var dio = new Audio('sounds/tom-2.mp3')
            
                dio.play();
            
        break;

        case "k":
            var udio = new Audio('sounds/tom-3.mp3')
            
                udio.play();
            
        break;

        case "l":
            var io = new Audio('sounds/tom-4.mp3')
            
                io.play();
            
        break;
    
        default:
            break;
    }
}