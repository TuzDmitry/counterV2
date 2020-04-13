import React from 'react';
import ComponentInstaller from "./ComponentInstaller";

class DisplayConfig extends React.Component {

    onChangeValueMax=(e)=>{
        let value = parseInt(e.currentTarget.value)
        this.props.adjustValueMax(value)
        // alert(e.currentTarget)
        // debugger;
    }
    onChangeValueMin=(e)=>{
        let value = parseInt(e.currentTarget.value)

        this.props.adjustValueMin(value)
        // alert(e.currentTarget)
        // debugger;
    }

    render = () => {
        let maxV=this.props.state.setMaxValue;
        let minV=this.props.state.setMinValue;

         let classRedForMaxValue = (maxV<=minV||maxV<0) ? "input-red" : "";
         let classRedForMinValue = (maxV<=minV||minV<0) ? "input-red" : "";

        return (
            // <div className={`display ${classRedForDisplay}`}>
            <div className="display">
                {/*{this.props.state.counterNumber}*/}
                {/*<div className="containerValue">*/}
                {/*    <div>max value:</div>*/}
                {/*    <input type="number"*/}
                {/*           value={this.props.state.setMaxValue}*/}
                {/*           onChange={this.onChangeValueMax}/>*/}
                {/*</div>*/}
                {/*<div className="containerValue">*/}
                {/*    <div>start value:</div>*/}
                {/*    <input type="number"*/}
                {/*           value={this.props.state.setMinValue}*/}
                {/*           onChange={this.onChangeValueMin}/>*/}
                {/*</div>*/}

                <ComponentInstaller nameInstaller={"max value:"}
                                    value={this.props.state.setMaxValue}
                                    onChangeFunc={this.onChangeValueMax}
                                    classRed={classRedForMaxValue}/>
                <ComponentInstaller nameInstaller={"start value:"}
                                    value={this.props.state.setMinValue}
                                    onChangeFunc={this.onChangeValueMin}
                                    classRed={classRedForMinValue}/>
            </div>
        );
    }
}

export default DisplayConfig;