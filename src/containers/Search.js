import React from 'react';
import Typist from 'react-typist';
import { connect } from 'react-redux';
import { getImages, newSearch, changeHome, addChar, removeChar, goHome } from '../actions/creator/index';
import '../../node_modules/react-typist/dist/Typist.css';
import '../style/Search.css';

const Search = (props) => {
    let searchInput = null;
    const makeAcall = () => {
        const searching = (props.images.pixabay.fetching || props.images.flickr.fetching);
        if(searching) return;

        const term = searchInput.value;
        if(term.length){
            props.dispatch(changeHome());
            props.dispatch(newSearch());
            props.dispatch(getImages(term));
        }
    }

    const handleChange = (e) => {
        if(e.key === 'Enter')
            return makeAcall();
        else if(e.key.length === 1) 
             props.dispatch(addChar(e.key));
        else if (e.keyCode === 8) 
             props.dispatch(removeChar());
    }


    const backHome = () => {
        return props.dispatch(goHome());
    }

    return (
        <div className="search-container">
            <div className={"back-home " + (!props.home ? "show": "")} onClick={backHome}>Back Home</div>
            <Typist>
                <span>Search</span> Images 
            </Typist>
            <div>
                <input type="text" value={props.input.text} ref={(input) => searchInput = input} onKeyDown={handleChange} onChange={() => searchInput.value}/> <span className="search-btn" onClick={makeAcall}>Search</span>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
        return {
                images: state.images,
                input: state.input,
                home: state.home
        }
}

export default connect(mapStateToProps)(Search);
