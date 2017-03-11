import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import HistoryItem from '../components/HistoryItem';

const HitoryList = (props) => {

    const renderHistoryItems = () => {
        return props.images.history.map((item, i) => {
            const time = moment(item.date).format('HH:mm');
            return <HistoryItem term={item.term} count={item.count} time={time} dispatch={props.dispatch} key={i}/>

        })
    }

    return (
        <div className="history-list">
            {renderHistoryItems()}
        </div>
    );
};

const mapStateToProps = (state) => {
        return {
                images: state.images
        }
}

export default connect(mapStateToProps)(HitoryList);
