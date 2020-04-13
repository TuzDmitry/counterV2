import React from 'react';

class DisplayUser extends React.Component {

    render = () => {

        let classRedForDisplay = this.props.state.memoryValue === this.props.state.setMaxValue ? "filter-red" : "";
        let maxV=this.props.state.setMaxValue;
        let minV=this.props.state.setMinValue;
        let memo=this.props.state.memoryValue;

        return (
            <div className={`display`}>
                {/*setIsDisabled: true-когда кнопка SET недоступна для нажатия*/}
                {this.props.state.setIsDisabled&&(maxV>minV)&&(minV>=0)&& <span className={`numb ${classRedForDisplay}`}>{memo}</span>}
                {!this.props.state.setIsDisabled&&(maxV>minV)&&(minV>=0) &&<span className="message">enter values and press 'set'</span>}
                {(maxV<=minV||minV<0||maxV<0)&&<span className="filter-red">incorrect value</span>}

            </div>
        );
    }
}

export default DisplayUser;