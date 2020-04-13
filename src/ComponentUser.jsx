import React from 'react';
import './App.css';
import DisplayUser from "./DisplayUser";
import ControlPanelUser from "./ControlPanelUser";


class ComponentUser extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => {

        return (
                <div className="counterBlock">
                    <div className="box">
                        <DisplayUser state={this.props.state}/>
                        <ControlPanelUser state={this.props.state} incCounter={this.props.incCounter}
                                          resetToZero={this.props.resetToZero}/>
                    </div>
                </div>
        );
    }
}

export default ComponentUser;