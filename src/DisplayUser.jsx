import React from 'react';

class DisplayUser extends React.Component {

    render = () => {

        let classRedForDisplay = this.props.state.memoryValue === this.props.state.setMaxValue ? "filter-red" : "";

        return (
            <div className={`display`}>
                {/*setIsDisabled: true-когда кнопка SET недоступна для нажатия*/}
                {this.props.state.setIsDisabled&&(this.props.state.setMaxValue>this.props.state.setMinValue)&&(this.props.state.setMinValue>=0)&& <span className={`numb ${classRedForDisplay}`}>{this.props.state.memoryValue}</span>}
                {!this.props.state.setIsDisabled&&(this.props.state.setMaxValue>this.props.state.setMinValue)&&(this.props.state.setMinValue>=0) &&<span className="message">enter values and press 'set'</span>}
                {(this.props.state.setMaxValue<=this.props.state.setMinValue||this.props.state.setMinValue<0||this.props.state.setMaxValue<0)&&<span className={classRedForDisplay}>incorrect value</span>}

            </div>
        );
    }
}

export default DisplayUser;