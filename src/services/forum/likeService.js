export default class likeService {
    constructor(http) {
        this._http = http;
    }
    setLikes(post) {
        this._http
            .get(this.$hostname + "/likes?postId=" + post.id)
            .then(likes => {
                post.push(likes);
            })
            .catch(error => {
                console.log(error);
            });
    }
}