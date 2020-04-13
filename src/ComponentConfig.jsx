import React from 'react';
import './App.css';
import DisplayConfig from "./DisplayConfig";
import ControlPanelConfig from "./ControlPanelConfig";


class ComponentConfig extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        return (
            <div className="configBlock">
                <div className="box">
                    <DisplayConfig state={this.props.state} adjustValueMin={this.props.adjustValueMin}
                                   adjustValueMax={this.props.adjustValueMax}/>
                    <ControlPanelConfig setSettings={this.props.setSettings} state={this.props.state}/>
                </div>
            </div>
        );
    }
}

export default ComponentConfig;