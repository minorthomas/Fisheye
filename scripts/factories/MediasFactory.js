class MediasFactory {
    constructor(media) {
        if (media.type === 'image') {
            return new Image(media);
        } else if (media.type === 'video') {
            return new Video(media);
        } else {
            throw "Error data type";
        };
    }
};