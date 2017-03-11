import React from 'react';
import { getImages, newSearch, closeSideMenu, closePopup } from '../actions/creator/index';

const HistoryItem = (props) => {

    const historySearch = (item) => {
            const term = props.term;
            props.dispatch(closePopup());
            props.dispatch(closeSideMenu());
            props.dispatch(newSearch());
            props.dispatch(getImages(term));
    }

    return ( <div className="history-item" onClick={historySearch}>
                    <span className="term">{props.term}</span>
                    <span className="count">{props.count} Results</span>
                    <span className="time">{props.time}</span>
            </div> );
};

export default HistoryItem;