import React from 'react';
import { connect } from 'react-redux';
import Search from '../containers/Search';
import Sidebar from '../containers/Sidebar';
import Grid from '../containers/Grid';
import { closeSideMenu } from '../actions/creator/index';
import Footer from '../components/Footer';
import Popup from '../containers/Popup';
import '../style/Index.css';

const Index = (props) => {

        const closeSidebar = () => {
                props.dispatch(closeSideMenu());
        }

        return (
            <div>
            <div className={"wrapper " + (props.sidebar.open !== 0 ? props.sidebar.open ? "sidebar-open " : "sidebar-close " : "") + (!props.home ? "searching" : "") }>
                <div className="container">
                        <Search />
                </div>
                <Grid /> 
                <Footer /> 
            </div>
            <Sidebar />
            <div className={"overlay " + (props.sidebar.open ? "show" : "")} onClick={closeSidebar}></div>
            <Popup />
            </div>
        );
}

const mapStateToProps = (state) => {
        return {
                sidebar: state.sidebar,
                home: state.home
        }
}

export default connect(mapStateToProps)(Index);