//import swatch from "./swatch.js";

'use strict';

const e = React.createElement;

class Swatch extends React.Component {
    constructor(props) {
        super(props);

        var x = this.props.colour;
        if(x==undefined){
            x="white";
        }
        this.state = { liked: false, colour: x};
        
    }


    render() {
        var el = <div className="col palette-square d-flex flex-col align-items-center justify-content-center" style={{ backgroundColor: this.state.colour}}>
            <p className="palette-title">
                <span>RGB</span>
                <span>201,012,210</span>
            </p>
        </div>


        return (
            el
        );
    }
}


class Palette extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
                <div className="row row-eq-height myrow">
                    <Swatch colour="rgb(249, 220, 92)"/>
                    <Swatch colour="rgb(237, 37, 78)"/>
                    <Swatch colour="rgb(1, 25, 54)"/>
                    <Swatch colour="rgb(243, 249, 210)"/>
                    <Swatch colour="rgb(249, 220, 92)"/>
                </div>
        
        );
    }
}


const domContainer = document.querySelector('#test-container');
ReactDOM.render(e(Palette), domContainer);
