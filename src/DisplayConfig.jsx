import React from 'react';

class DisplayConfig extends React.Component {

    render = () => {
///////////эта штука пока нам не нужна
//         let classRedForDisplay = this.props.state.counterNumber === this.props.state.setMaxValue ? "filter-red" : "";

        return (
            // <div className={`display ${classRedForDisplay}`}>
            <div className="display">
                {/*{this.props.state.counterNumber}*/}
                <div>maxvalue</div>
                <div>startvalue</div>

            </div>
        );
    }
}

export default DisplayConfig;