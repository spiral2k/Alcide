import React from 'react';
import { connect } from 'react-redux';
import { openSideMenu, closeSideMenu } from '../actions/creator/index';

import '../style/Sidebar.css';



const Sidebar = (props) => {
        const toggleSidebar = () => {
            (props.sidebar.open) ? props.dispatch(closeSideMenu()) : props.dispatch(openSideMenu());
        }

        return (
            <div className={"sidebar " + (props.sidebar.open !== 0 ? props.sidebar.open ? "open" : "close" : "")}>
                <div className="open-button" onClick={toggleSidebar}>
                    <img src="./images/hamburger.png" alt="Search history"/>
                </div>
                Sidebar
            </div>
        );
}

const mapStateToProps = (state) => {
        return {
                sidebar: state.sidebar
        }
}
export default connect(mapStateToProps)(Sidebar);