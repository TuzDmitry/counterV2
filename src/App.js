import React from 'react';
import './App.css';
import ComponentUser from "./ComponentUser";
import ComponentConfig from "./ComponentConfig";


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
        let newNubmer = parseInt(this.state.memoryValue) + 1;
        if (newNubmer <= this.state.setMaxValue) {
            this.setState({memoryValue: newNubmer})
        }
    }

    setSettings = () => {
        this.setState({setIsDisabled: true, memoryValue: this.state.setMinValue})
    }

    adjustValueMax = (value) => {
        this.setState({setMaxValue: value, setIsDisabled: false})
        if ((value < 0) || (value <= this.state.setMinValue)) {
            this.setState({setIsDisabled: true})
        }
    }
    adjustValueMin = (value) => {
        this.setState({setMinValue: value, setIsDisabled: false})
        if ((value < 0) || (value >= this.state.setMaxValue)) {
            this.setState({setIsDisabled: true})
        }
    }


    render = () => {

        return (
            <div className="container">
                <ComponentConfig state={this.state}
                                 adjustValueMin={this.adjustValueMin}
                                 adjustValueMax={this.adjustValueMax}
                                 setSettings={this.setSettings}/>

                <ComponentUser state={this.state}
                               incCounter={this.incCounter}
                               resetToZero={this.resetToZero}/>
            </div>
        );
    }
}

export default App;