import { pixabayCall, flickrCall, preparePixabay, prepareFlickr } from '../../utils';
import actions from '../index';

export const openSideMenu = () => {
    return  { type: actions.OPEN_SIDEBAR }
}

export const closeSideMenu = () => {
    return  { type: actions.CLOSE_SIDEBAR }
}

export const newSearch = () => {
    return { type: actions.NEW_SEARCH }
}

export const getImages = (term) => {
    return (dispatch, getState) => {
        dispatch({type: actions.SEARCHED});   
        dispatch({type: actions.SET_VALUE, payload: term});   
        dispatch({type: actions.PIXABAY_FETCHING}); 
        pixabayCall(term)
        .then((images) => {
        dispatch({type: actions.PIXABAY_FETCHED});
        const pixabayImages = preparePixabay(images, getState());
        dispatch({type: actions.ADD_IMAGES, payload: pixabayImages});  
        }).catch((err) => {
            dispatch({type: actions.PIXABAY_ERROR});
            console.log("Pixabay error: ", err);
        }).then(() => {
            dispatch({type: actions.FLICKR_FETCHING});
            flickrCall(term)
            .then((images) => {
                dispatch({type: "FLICKR_FETCHED"});
                const flickrImages = prepareFlickr(images.photo, getState());
                dispatch({type: actions.ADD_IMAGES, payload: flickrImages});           
            }).catch((err) => {
                dispatch({type: actions.FLICKR_ERROR});
                console.log("Flickr error: ", err);
            }).then(() => {
                const state = getState();
                dispatch({type: actions.ADD_HISTORY_ITEM, payload: {  count: state.images.imagesArr.length,
                                                                term: term,
                                                                date: new Date() }
                                                            });           
            });
        })
    }
}

export const changeHome = () => {
    return { type: actions.SEARCHED }
}

export const addChar = (char) => {
    return { type: actions.ADD_CHAR, payload: char}
}

export const removeChar = () => {
    return { type: actions.REMOVE_CHAR }
}

export const clearHistory = () => {
    return { type: actions.CLEAR_HISTORY }
}

export const goHome = () => {
    return { type: actions.BACK_HOME }
}

export const openPopup = (url, text) => {
    return { type: actions.OPEN_POPUP, payload: { show: true, url: url, text: text } }
}

export const closePopup = () => {
    return { type: actions.CLOSE_POPUP }
}