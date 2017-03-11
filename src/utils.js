import request from 'request-promise';
import Flickr from 'node-flickr';
import config from './config.json';

const flickr = new Flickr({"api_key": `${config.flickr.key}`});

export const flickrCall = (term) => {
    return new Promise((resolve, reject) => {
        if(term.indexOf(" ") > -1) term = term.split(" ").join(",");

        flickr.get("photos.search", {"tags": term }, function(err, result){
            if (err) return reject(err);
            resolve(result.photos);
        });  
    });
}

export const pixabayCall = (term) => {
    return new Promise((resolve, reject) => {
        term = encodeURIComponent(term);
        request.get(`${config.pixabay.url}?key=${config.pixabay.key}&q=${term}`).then((photos) => {            
            resolve(JSON.parse(photos));
        }).catch((err) => {
            reject(err);
        });

    })
}

export const preparePixabay = (images, state) => {
    let id = state.images.imagesArr.length;
    return images.hits.map((image) => {
        return {
            id: id++,
            thumb: image.previewURL,
            big: image.webformatURL,
            text: image.tags
        }
    });
}

export const prepareFlickr = (images, state) => {
    let id = state.images.imagesArr.length;
    return images.map((image) => {
        return {
            id: id++,
            thumb: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_n.jpg`,
            big: `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_b.jpg`,
            text: image.title
        }
    });
}