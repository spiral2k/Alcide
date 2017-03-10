import React from 'react';
import { connect } from 'react-redux';

import Search from '../containers/Search';
import Sidebar from '../containers/Sidebar';
import '../style/Index.css';

const Index = (props) => {
        return (
            <div>
            <div className={"wrapper " + (props.sidebar.open !== 0 ? props.sidebar.open ? "sidebar-open" : "sidebar-close" : "") }>
                <div className="container">
                <Search />
                </div>
            </div>
            <Sidebar />
            </div>
        );
}

const mapStateToProps = (state) => {
        return {
                sidebar: state.sidebar
        }
}
export default connect(mapStateToProps)(Index);