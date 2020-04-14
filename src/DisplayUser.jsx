import React from 'react';

class DisplayUser extends React.Component {

    render = () => {
        // const {maxVa: setMaxValue} = this.props;
        let maxV = this.props.state.setMaxValue;
        let minV = this.props.state.setMinValue;
        let memo = this.props.state.memoryValue;

        let classRedForDisplay = memo === maxV ? "filter-red" : "";

        ///is Sucsess. is Error is Settigs


        return (
            <div className={`display`}>
                {/*setIsDisabled: true-когда кнопка SET недоступна для нажатия*/}
                {this.props.state.setIsDisabled && (maxV > minV) && (minV >= 0) &&
                <span className={`numb ${classRedForDisplay}`}>{memo}</span>}

                {/*{!this.props.state.setIsDisabled && (maxV > minV) && (minV >= 0) &&*/}
                {!this.props.state.setIsDisabled &&
                <span className="message">enter values and press 'set'</span>}

                {(maxV <= minV || minV < 0 || maxV < 0) && <span className="filter-red">incorrect value</span>}

            </div>
        );
    }
}

export default DisplayUser;