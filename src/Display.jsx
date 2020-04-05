import React from 'react';

class Display extends React.Component {

    render = () => {

        let classRedForDisplay = this.props.state.counterNumber === this.props.state.setMaxValue ? "filter-red" : "";

        return (
            <div className={`display ${classRedForDisplay}`}>
                {this.props.state.counterNumber}
            </div>
        );
    }
}

export default Display;