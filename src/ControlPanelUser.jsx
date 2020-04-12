import React from 'react';
import Button from "./Button";

class ControlPanelUser extends React.Component {

    render = () => {

        let setDisabledForInc = this.props.state.memoryValue === this.props.state.setMaxValue? true : false;
        let setDisabledForReset = this.props.state.setMinValue === this.props.state.memoryValue ? true : false;

        return (
            <div className="controlPanel">
                {this.props.state.setIsDisabled &&<Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>}
                {!this.props.state.setIsDisabled
                &&<Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>
                &&<Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>}

                <Button setDisabled={setDisabledForReset} name={'reset'} onClickFunc={this.props.resetToZero}/>
            </div>
        );
    }
}

export default ControlPanelUser;