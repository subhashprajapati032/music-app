class SongModel{
    constructor(id, name="", audiourl="", imageurl=""){
        this.id = id;
        this.name = name;
        // this.desc = desc;
        this.audiourl = audiourl;
        this.imageurl = imageurl;
        this.isPlyList= false;

    }
}

export default SongModel;