import React from 'react';
import Button from "./Button";

class ControlPanelUser extends React.Component {

    render = () => {
        let maxV = this.props.state.setMaxValue;
        let minV = this.props.state.setMinValue;
        let memo = this.props.state.memoryValue;

        let setDisabledForInc = (memo === maxV) || !this.props.state.setIsDisabled || (maxV <= minV || minV < 0 || maxV < 0) ? true : false;
        let setDisabledForReset = (minV === memo) || !this.props.state.setIsDisabled || (maxV <= minV || minV < 0 || maxV < 0) ? true : false;

        return (
            <div className="controlPanel">
                <Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>
                <Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>
            </div>
        );
    }
}

export default ControlPanelUser;