import React, { Component } from 'react';
import Typist from 'react-typist';

import '../../node_modules/react-typist/dist/Typist.css'
import '../style/Search.css';

class Search extends Component {
    render() {
        return (
            <div className="search-container">
                <Typist>
                <span>Search</span> Photos 
                </Typist>
                <div>
                    <input type="text" /> <span className="search-btn">Search</span>
                </div>
            </div>
        );
    }
}

export default Search;