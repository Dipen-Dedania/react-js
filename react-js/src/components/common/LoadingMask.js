import React from 'react';

var styles = {
  isVisible: {
    display: 'block'
  },
  notVisible: {
    display: 'none'
  }
};

// function showLoading(){
//     return this.props.isVisible = true;
// };

// var hideLoading = function(){
//     this.props.isVisible = false;
// };

class LoadingMask extends React.Component {
    render() {
        return (
            <div className="sk-spinner sk-spinner-double-bounce" style={this.props.isVisible ? styles.isVisible : styles.notVisible}>
                <div className="sk-double-bounce1"></div>
                <div className="sk-double-bounce2"></div>
            </div>
        )
    }
}

export default LoadingMask
// exports.showLoading = showLoading;
// exports.hideLoading = hideLoading;