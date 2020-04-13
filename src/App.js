import React from 'react';
import './App.css';
import ComponentUser from "./ComponentUser";
import ComponentConfig from "./ComponentConfig";


class App extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.restoreState()
    }

    state = {
        setMinValue: 0,
        setMaxValue: 5,
        memoryValue: 0,
        setIsDisabled: true,
    };
    ///// метод, который будет брать текущий стейт и… сохранять его в localStorage
    saveState = () => {
        ////устанавливаем в localStorage под ключом "our-state"  наш стейт переделанный в  джейсон строку JSON.stringify(this.state)
        localStorage.setItem("counter-state", JSON.stringify(this.state));
    }

    restoreState = () => {
        ////объявляем наш стейт стартовый
        let state = {...this.state}
        //// считываем сохраненную ранее строку из localStorage
        let stateAsString = localStorage.getItem("counter-state")
        ////если таковая есть, то превращаем строку в объект и призваиваем стейту знаение из стораджа.
        if (stateAsString) {
            state = JSON.parse(stateAsString);
        }
////устанавливаем стейт или пустой или востановленный в стейт
        this.setState(state)
    }

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
        this.setState({setIsDisabled: true, memoryValue: this.state.setMinValue}, this.saveState)
    }

    adjustValueMax = (value) => {
        this.setState({setMaxValue: value, setIsDisabled: false}, this.saveState)
        if ((value < 0) || (value <= this.state.setMinValue)) {
            this.setState({setIsDisabled: true}, this.saveState)
        }
    }
    adjustValueMin = (value) => {
        this.setState({setMinValue: value, setIsDisabled: false}, this.saveState)
        if ((value < 0) || (value >= this.state.setMaxValue)) {
            this.setState({setIsDisabled: true}, this.saveState)
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