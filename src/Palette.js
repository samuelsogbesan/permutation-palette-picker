'use strict';


const e = React.createElement;

class Swatch extends React.Component {
    constructor(props) {
        super(props);

        var x = this.props.colour;
        if (x == undefined) {
            x = "white";
        }

        x = "rgb(" + x + ")";
        this.state = { colour: x };


    }

    handler() {
        console.log("colour:" + this.state.colour);
        /*
        swatch.select();
        swatch.setSelectionRange(0, 99999);
        document.execCommand("copy");
        */
        document.getElementById("notificationBar").innerText = "copied " + this.state.colour + " to clipboard!";
        document.getElementById("notificationBar").className = "state-1";
        document.getElementById("notificationBar").style.backgroundColor = this.state.colour;

    }
    render() {
        var swatch = <div className="col palette-square d-flex flex-col align-items-center justify-content-center" style={{ backgroundColor: this.state.colour, transition: "0.5s" }}>
            <p className="palette-title" onClick={this.handler.bind(this)}>
                {this.state.colour}
            </p>
        </div>


        return (
            swatch
        );
    }
}


class Palette extends React.Component {
    constructor(props) {
        super(props);
        var p = [];
        this.state = { colours: p };

        t = document.getElementById("goButton");
        combobox = document.getElementsByClassName("box");
        t.addEventListener("mousedown", this.handler.bind(this));

        this.generate.bind(this);
        this.swatches = [];
    }

    render() {

        if ((this.state.colours == 0) || (this.state.colours == null)) {
            document.getElementById("test-container").style.alignItems = "center";
            document.getElementById("test-container").style.justifyContent = "center";

            return (
                <span>Enter 3 numbers into the box above to generate a colour table here!</span>
            )
        } else {
            document.getElementById("test-container").style.alignItems = null;
            document.getElementById("test-container").style.justifyContent = "center";
            return (
                <div className="row row-eq-height myrow">
                    {this.generate()}
                </div>

            );
        }
    }
    reset() {
        document.getElementById("notificationBar").className = "state-0";
    }
    handler(k) {
        this.reset();

        this.setState({ colours: [] });

        var t = start();

        var sortedRgbArr = t.map(function (c, i) {
            // Convert to HSL and keep track of original indices
            return { color: rgbToHsl(c), index: i };
        }).sort(function (c1, c2) {
            // Sort by hue
            return c1.color[0] - c2.color[0];
        }).map(function (data) {
            // Retrieve original RGB color
            return t[data.index];
        });

        this.setState({ colours: sortedRgbArr });
    }
    generate(k) {
        if (this.state.colours.length > 0) {
            document.getElementById("notificationBar").className = "state-3";
            document.getElementById("notificationBar").innerText = "Generated " + this.state.colours.length + " permutations based on seed " + "[]";
        }
        var temp = [];
        for (var i = 0; i < this.state.colours.length; i++) {
            temp.push(<Swatch key={i} colour={this.state.colours[i].join(",")} />);
        }
        return temp;
    }
}

function copiedAnimation(element) {
    var e = Document.getElementsByClassName(element);
    e.style.opacity = "1";
}

/**
 * Calculates the factorial of a given number n
 * @param n base number
 * @return factorial of n
 */
function factorial(n) {
    if (n == 0)
        return 1;
    else
        return (n * factorial(n - 1));
}

/**
 * Returns number of ordered permutations
 * @param n number of objects
 * @param r number of ordered objects
 * @return
 */
function p(n, r) {
    return (factorial(n) / factorial(n - r));
}

/**
 * Recursive algorithm that permutes the input string s with the characters given in the "space" array
 * @param s The string being permuted
 * @param space The characters left to add
 * @param r The number of spaces to place
 */

function permute(s, space, r) {

    //Stops further calculation to reduce wasted space
    if (stack.length > limit) {
        return stack;
    }

    //If the space has been exhausted
    if ((space.length == r)) {
        //console.log(s);
        stack.push(s);
        if (stack.length == limit) {
            //console.log(s);
        }
    }
    else {

        //For every character left in the space add character to s, remove character from space and call permute
        for (var i = 0; i < space.length; i++) {
            permute(s.concat(space[i]),
                //((space.slice(0,i).toString()) + (space.slice(i+1, space.length).toString())).split("")
                (space.slice(0, i).concat((space.slice(i + 1, space.length)))), r
            );
        }
    }
}

function start() {
    var temp = "";
    for (var i = 0; i < combobox.length; i++) {
        temp += combobox[i].value;
    }

    if (temp.match("^([0-2]{3})(?!.)") == null) {
        document.getElementById("notificationBar").className = "state-2";
        document.getElementById("notificationBar").innerText = "'" + temp + "' is not valid. Fill in the combo-box with 3 numbers between 0 and 2 (to evaluate to a number between 0-222)";
        return null;
    }
    //console.log("temp:" +temp);

    stack = [];
    limit = p(temp.length, temp.length);

    permute("", temp.split(""), 0);

    var l = stack;
    stack = [];
    limit = p(l.length, 3);
    permute([], l, 3);

    //console.log(stack);

    return stack;
}

function print(iter) {
    for (var i = 0; i < iter.length; i++) {
        console.log(iter[i]);
    }
}



var t;
var combobox;
var s = "";
var stack = [];
var limit = 0;
//var limit = p(s.length,s.length);


function rgbToHsl(c) {
    var r = c[0] / 255, g = c[1] / 255, b = c[2] / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return new Array(h * 360, s * 100, l * 100);
}


/*
NEXT STEP:
    ~PASTE ARRAY OBJECT INTO RENDER

HOW TO START SERVER:
    TYPE http-server -c-1
*/




const domContainer = document.querySelector('#test-container');
ReactDOM.render(e(Palette), domContainer);
