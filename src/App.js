import React from 'react';
import './App.css';
import DisplayUser from "./DisplayUser";
import ControlPanelUser from "./ControlPanelUser";
import DisplayConfig from "./DisplayConfig";
import ControlPanelConfig from "./ControlPanelConfig";


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        setMinValue: 0,
        setMaxValue: 7,
        memoryValue: 0,
        setIsDisabled: true,
    };



    resetToZero = () => {
        let resetCounterNumb = this.state.setMinValue;
        this.setState({memoryValue: resetCounterNumb})
    }

    incCounter = () => {


        // debugger;
        let newNubmer = parseInt(this.state.memoryValue) + 1;
        if (newNubmer <= this.state.setMaxValue) {
            this.setState({memoryValue: newNubmer})
        }
        // alert(this.state.memoryValue)
        // this.setState({memoryValue: newNubmer})
    }

    setSettings = () => {
        this.setState({setIsDisabled: true})
    }

    adjustValueMax = (value) => {
        this.setState({setMaxValue: value, setIsDisabled: false})

    }
    adjustValueMin = (value) => {
        // debugger;
        this.setState({setMinValue: value, setIsDisabled: false, memoryValue: value})
        // this.setState({setMinValue: value, setIsDisabled: false, memoryValue: 4})

    }


    render = () => {

        return (
            <div className="container">
                <div className="configBlock">
                    <div className="box">
                        <DisplayConfig state={this.state} adjustValueMin={this.adjustValueMin}
                                       adjustValueMax={this.adjustValueMax}/>
                        <ControlPanelConfig setSettings={this.setSettings} state={this.state}/>
                        {/*<div className="controlPanel">set</div>*/}
                    </div>
                </div>

                <div className="counterBlock">
                    <div className="box">
                        <DisplayUser state={this.state}/>
                        <ControlPanelUser state={this.state} incCounter={this.incCounter}
                                          resetToZero={this.resetToZero}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;