var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
var hs=0;


$(document).on("keypress",
function(event){
    
        if (event.keyCode== 32){
            if(character.classList == "animate"){return}
            character.classList.add("animate");
            setTimeout(function(){
            character.classList.remove("animate");
            },300);
    
        }

   
    
    
})

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop<=60){
        $("#endscore").text(hs)
        block.style.animation = "none";
        playing = false
        if(document.querySelector("#invisible").classList == "gameover"){
            $("#invisible").toggleClass("gameover")

        }
        
        

        $(document).on("keypress",function(){
            if(document.querySelector("#invisible").classList != "gameover"){
                $("#invisible").toggleClass("gameover")
                counter=0;
    
            }

            
            
            block.style.animation = "block 1s infinite linear";
                

            
            

        })

        
    }else{
        counter++;
        score = Math.floor(counter/100)
        if (score>=hs){
            hs = score

        }
        
        

        document.getElementById("scoreSpan").innerHTML = score;

    }
}, 10);

