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
        //const [liked,setLiked] = useState(false);
        
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
        var swatches = []

        for(var i =0; i < 120; i++){
            swatches.push(<Swatch key = {i} colour="blue"/>);
        }
        return (
                <div className="row row-eq-height myrow">
                    {swatches}
                </div>
        
        );
    }
}


const domContainer = document.querySelector('#test-container');
ReactDOM.render(e(Palette), domContainer);
