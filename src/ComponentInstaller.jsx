import React from 'react';

class ComponentInstaller extends React.Component {


    render = () => {
///////////эта штука пока нам не нужна
//         let classRedForDisplay = this.props.state.counterNumber === this.props.state.setMaxValue ? "filter-red" : "";

        return (
            <div className="containerValue">
                <div>{this.props.nameInstaller}</div>
                <input type="number"
                       value={this.props.value}
                       onChange={this.props.onChangeFunc}/>
            </div>
        );
    }
}

export default ComponentInstaller;