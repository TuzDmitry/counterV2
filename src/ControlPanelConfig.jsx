import React from 'react';
import Button from "./Button";

class ControlPanelConfig extends React.Component {

    render = () => {

        // let setDisabledForInc = this.props.state.counterNumber === this.props.state.setMaxValue ? true : false;
        let setDisabled = this.props.state.setIsDisabled ? true : false;

        return (
            <div className="controlPanel">
                {/*<Button setDisabled={setDisabledForInc} name={'inc'} onClickFunc={this.props.incCounter}/>*/}
                <Button name={'set'} setDisabled={setDisabled} onClickFunc={this.props.setSettings}/>
            </div>
        );
    }
}

export default ControlPanelConfig;