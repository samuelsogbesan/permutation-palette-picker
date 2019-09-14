var menu = document.getElementById("nav-options").children;
var funcs = [];
var options = [];

//get all the option objects
for(var i = 0 ;i<menu.length;i++){
    for(var j =0 ; j < menu[i].children.length ; j++){
        options.push(menu[i].children[j]);
    }
}

//generate a function for each one (would be done manually instead)
for(var i =0 ; i <  options.length; i ++){
    funcs.push(
        () =>{
            var e = document.getElementById("info-container");
            if(e.style.display=="none"){
                e.style.display="flex";
            }else{
                e.style.display="none";
            }

        }
    )
}


//map each func to each options object's click event
for(var i =0 ; i < options.length;i++){
    options[i].addEventListener("click",funcs[i]);
}