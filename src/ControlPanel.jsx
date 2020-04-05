import React from 'react';
import Button from "./Button";

class ControlPanel extends React.Component {

    render = () => {

        let setDisabledForInc = this.props.state.counterNumber === this.props.state.setMaxValue ? true : false;
        let setDisabledForReset = this.props.state.counterNumber === 0 ? true : false;

        return (
            <div className="controlPanel">
                <Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>
                <Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>
            </div>
        );
    }
}

export default ControlPanel;