'use strict';

const e = React.createElement;

class Swatch extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        var el = <div className="col palette-square d-flex flex-col align-items-center justify-content-center" style={{ backgroundColor: colour, transition:"0.5s", opacity:"0" }}>
            <p class="palette-title">
                <span>RGB</span>
                <span>201,012,210</span>
            </p>
        </div>


        return (
            el
        );
    }
}


//const domContainer = document.querySelector('#test-container');
//ReactDOM.render(e(swatch), domContainer);

export default Swatch;