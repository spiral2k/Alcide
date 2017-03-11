import React from 'react';
import Typist from 'react-typist';
import { connect } from 'react-redux';
import { getImages, newSearch, changeHome, addChar, removeChar, goHome, clearInput } from '../actions/creator/index';
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
            props.dispatch(getImages(term, true));
        }
    }

    const handleChange = (e) => {
        console.log(e, e.key, e.keyCode, e.charCode);

        const key = (e.key !== 'Unidentified') ? e.key : String.fromCharCode(e.keyCode).toLowerCase();

        if(key === 'Enter')
            return makeAcall();
        else if(key.length === 1) 
             props.dispatch(addChar(key));
        else if (e.keyCode === 8) 
             props.dispatch(removeChar());
    }


    const backHome = () => {
        return props.dispatch(goHome());
    }

    const clearValue = () => {
        return props.dispatch(clearInput());
    }

    return (
        <div className="search-container">
            <div className={"back-home " + (!props.home ? "show": "")} onClick={backHome}>Back Home →</div>
            <Typist>
                <span>Search</span> Images 
            </Typist>
            <div>
                <input type="text" value={props.input.text} ref={(input) => searchInput = input} onKeyDown={handleChange} onChange={() => searchInput.value} onFocus={clearValue} /> <span className="search-btn" onClick={makeAcall}>Search</span>
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
