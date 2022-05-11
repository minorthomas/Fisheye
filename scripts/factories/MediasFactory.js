class MediasFactory {
    constructor(data, type) {
        if (type === 'image') {
            return new Image(data);
        } else if (type === 'video') {
            return new Video(data);
        } else {
            throw "Error data type";
        };
    }
};