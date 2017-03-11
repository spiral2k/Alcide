import React from 'react';
import { connect } from 'react-redux';
import Image from '../components/Image';
import Loader from '../components/Loader';
import { loadMoreImages } from '../actions/creator/index';
import config from '../config.json';

import '../style/Grid.css';

const Grid = (props) => {
    const loader = (props.images.pixabay.fetching || props.images.flickr.fetching);
    const noResults = (!props.images.pixabay.fetching && !props.images.flickr.fetching && !props.images.imagesArr.length && !props.home);
    const isNothome = (!props.home);
    const disableLoad = (props.images.imageRenderCount >= props.images.imagesArr.length);

    const renderImages = () => {
            return props.images.imagesArr.map((image, i) => {
                if(i < props.images.imageRenderCount)
                    return <Image thumb={image.thumb} big={image.big} key={image.id} alt={image.text} dispatch={props.dispatch}/>
            })
    }

    const loadMore = () => {
        props.dispatch(loadMoreImages(config.renderCount))
    }

    if(loader)
        return <Loader />

    if(noResults)
        return <div className="no-results">There are no images that match your search :(</div>

    return (
        <div className="grid-container">
            <div className="images-grid"> 
                <div className={"results-count " + (isNothome ? "show" : "") }> <span>{props.input.term}</span> | Displaying { props.images.imageRenderCount } of { props.images.imagesArr.length } images</div>
                { renderImages() } 
            </div>
            <div className={"load-more " + (isNothome ? "show " : "") + (disableLoad ? "disable" : "") } onClick={loadMore}>
                Load more images
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
        return {
                images: state.images,
                home: state.home,
                input: state.input
        }
}

export default connect(mapStateToProps)(Grid);

