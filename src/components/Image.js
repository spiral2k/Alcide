import React, { Component } from 'react';
import { openPopup } from '../actions/creator/index';
import '../style/Image.css';

class Image extends Component {
    constructor(props){
        super(props);
        this.showPopup = this.showPopup.bind(this);
    }

    showPopup(){
        this.props.dispatch(openPopup(this.props.big, this.props.alt))
    }

    render() {
        return (
            <div className="image">
                <img src={this.props.thumb} alt={this.props.alt} onClick={this.showPopup}/>
            </div>
        );
    }
}

export default Image;