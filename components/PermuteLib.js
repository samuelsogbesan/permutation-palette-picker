export function permute(working, space, k, callback) {
    if (working.length === k)  {
        callback(working);
    }
    else {
        for (var i = 0; i < space.length; i++) {
            permute(
                working.concat(space[i]),
                space.slice(0,i).concat(space.slice(i+1,space.length)), 
                k,
                callback
            );
        }
    }
}