    /**
     * Calculates the factorial of a given number n
     * @param n base number
     * @return factorial of n
     */
    function factorial(n){
        if (n == 0)
            return 1;
        else
            return(n * factorial(n-1));
    }    
    
    /**
     * Returns number of ordered permutations
     * @param n number of objects
     * @param r number of ordered objects
     * @return
     */
    function p(n, r){   
        return (factorial(n)/factorial(n-r));
    }

    /**
     * Recursive algorithm that permutes the input string s with the characters given in the "space" array
     * @param s The string being permuted
     * @param space The characters left to add
     * @param r The number of spaces to place
     */



    function permute(s,space,r){
        
        //Stops further calculation to reduce wasted space
        if(stack.length > limit){
            return;
        }

        //If the space has been exhausted
        if((space.length==r)){
            //console.log(s);
            stack.push(s);
            if(stack.length == limit) {
                //console.log(s);
            }            
        }
        else{

            //For every character left in the space add character to s, remove character from space and call permute
            for(var i=0; i< space.length; i++) {
                permute(s.concat(space[i]),
                    //((space.slice(0,i).toString()) + (space.slice(i+1, space.length).toString())).split("")
                    (space.slice(0,i).concat((space.slice(i+1, space.length)))),r
                );
            }
        }
    }

    function start(){
        var temp ="";
        for(var i =0; i < combobox.length; i++){
            temp += combobox[i].value;
        }
        //console.log("temp:" +temp);

        stack = [];
        limit = p(temp.length,temp.length);
        //console.log(limit);
        permute("",temp.split(""),0);
        //print();
        var l =stack;
        stack = [];
        console.log(l);
        limit = p(l.length,3);
        permute([],l,3);

        //print();
        console.log(stack.length);
    }

    function print(){
        for(var i = 0; i < stack.length ; i ++){
            console.log(stack[i]);
        }
    }

    

    const t = document.getElementById("goButton");
    const combobox = document.getElementsByClassName("box");
    var s = "";
    var stack = [];
    var limit =0;
    //var limit = p(s.length,s.length);

    t.addEventListener("mousedown",function(e){
        start();
    })

/*
NEXT STEP:
    ~PERMUTE THE LIST OF PERMUTATIONS (RESULTS IN 120 OBJECTS)
    ~CREATE ARRAY OBECT (VIA .MAP) OF THESE
    ~PASTE ARRAY OBJECT INTO RENDER

HOW TO START SERVER:
    TYPE http-server -c-1
*/


