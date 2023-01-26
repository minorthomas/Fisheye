/**
 * @param  {Object} media
 */
class MediasFactory {
    constructor(media) {
        if (media.type === 'image') {
            return new Picture(media);
        } else if (media.type === 'video') {
            return new Video(media);
        } else {
            throw "Error data type";
        };
    }
};