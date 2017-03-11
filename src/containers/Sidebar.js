import React from 'react';
import { connect } from 'react-redux';
import { openSideMenu, closeSideMenu, clearHistory } from '../actions/creator/index';
import HitoryList from '../containers/HistoryList';
import '../style/Sidebar.css';
import '../style/History.css';

const Sidebar = (props) => {
        const toggleSidebar = () => {
            (props.sidebar.open) ? props.dispatch(closeSideMenu()) : props.dispatch(openSideMenu());
        }

        const historyClear = () => {
            return props.dispatch(clearHistory());
        }

        return (
            <div className={"sidebar " + (props.sidebar.open !== 0 ? props.sidebar.open ? "open" : "close" : "")}>
                <div className="open-button" onClick={toggleSidebar}>
                    <img src="./images/hamburger.png" alt="Search history"/>
                    <div className={"history-tooltip " + (props.sidebar.open ? "hide" : "")}><span>History</span></div>
                </div>
                <div className="history-title">
                    <span>Search</span> history
                </div>

                <div className="trash" onClick={historyClear}>
                    <div className="tooltip"><span>Clear Search history</span></div>
                    <img src="./images/trash.png" alt="Clear search history"/>
                </div>
                <HitoryList />
            </div>
        );
}

const mapStateToProps = (state) => {
        return {
                sidebar: state.sidebar,
                images: state.images
        }
}
export default connect(mapStateToProps)(Sidebar);