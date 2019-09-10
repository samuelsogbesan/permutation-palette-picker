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
     */

    var s = "";
    var stack = [];
    var limit =0 ;
    //var limit = p(s.length,s.length);

    function permute(s,space){
        
        //Stops further calculation to reduce wasted space
        if(stack.length > limit){
            return;
        }

        //If the space has been exhausted
        if((space.length==0)){
            //console.log(s);
            stack.push(s);
            if(stack.length == limit) {
                //console.log(s);
            }            
        }
        else{

            //For every character left in the space add character to s, remove character from space and call permute
            for(var i=0; i< space.length; i++) {
                permute(s+space[i],
                    //((space.slice(0,i).toString()) + (space.slice(i+1, space.length).toString())).split("")
                    (space.slice(0,i).concat((space.slice(i+1, space.length))))
                );
            }
        }
    }

    function start(string){
        stack = [];
        limit = p(s.length,s.length);
        permute("",string.split(""));
        print();
    }

    function print(){
        for(var i = 0; i < stack.length ; i ++){
            console.log(stack[i]);
        }
    }

    //const container = document.getElementById("container");

    //permute("",s.split(""));


