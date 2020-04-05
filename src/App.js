import React from 'react';
import './App.css';
import Display from "./Display";
import ControlPanel from "./ControlPanel";
import DisplayConfig from "./DisplayConfig";


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        counterNumber: 0,
        setMaxValue: 5
    };


    resetToZero = () => {
        let resetCounterNumb = 0;
        this.setState({counterNumber: resetCounterNumb})
    }

    incCounter = () => {

        let newNubmer = this.state.counterNumber + 1;
        if (newNubmer <= this.state.setMaxValue) {
            this.setState({counterNumber: newNubmer})
        }
    }


    render = () => {

        return (
            <div className="container">
                <div className="configBlock">
                    <div className="box">
                        <DisplayConfig />
                        <div className="controlPanel">set</div>
                    </div>
                </div>

                <div className="counterBlock">
                    <div className="box">
                        <Display state={this.state}/>
                        <ControlPanel state={this.state} incCounter={this.incCounter} resetToZero={this.resetToZero}/>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;