import React from 'react';
import { connect } from 'react-redux';
import { closePopup } from '../actions/creator/index';
import Loader from '../components/Loader';
import '../style/Popup.css'; 

const Popup = (props) => {

    const hidePopup = () => {
        props.dispatch(closePopup());
    }

    return (
        <div className={"popup " + (props.popup.show ? "show" : "")}>
            <div className="close" onClick={hidePopup}>Close</div>
            <img src={props.popup.url} alt="" />
            <div className="description">
                {props.popup.text}
            </div>
            <Loader />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        popup: state.popup
    }
}

export default connect(mapStateToProps)(Popup);