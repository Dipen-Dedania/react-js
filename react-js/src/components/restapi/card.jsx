import React from 'react'


class Card extends React.Component {

    handleEvent(url){
        window.open(url,"_self");
    }

    render(){
        return (
            <div className="col-md-3 col-sm-6 col-xs-12" onClick={this.handleEvent.bind(this,this.props.URL)}>
                <div className="card-container" >{this.props.cardName}</div>
            </div>
        );
    }
}

export default Card;