const Video = require('../../models/Video');

module.exports = {
  Query: {
    async getVideos(){
      try{
        const videos = await Video.find();
        console.log('videos!!', videos)
        return videos;
      } catch(err) {
        throw new Error(err);
      }
    }
  }
}