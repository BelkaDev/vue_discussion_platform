export default class userService {

    getLikes(post) {
        this._http
            .get(this.$hostname + "/comments?postId=" + post.id)
            .then(comments => {
                post.push(comments);
            })
            .catch(error => {
                console.log(error);
            });
    }

    addComment(postId) {
        this._http
            .post(this.$hostname + "/comments?postId=" + postId)
            .then(resp => {
                console.log(resp.data);
            })
            .catch(error => {
                console.log(error);
            });
    }
    deleteComment(x) {
        this.$http.put(this.$hostname, x).then(response => {
            this.comment = "";
            this.$emit("updateData");
        });
    }
    updateComment(x) {
        this.$http.put(this.$hostname, x).then(response => {
            this.comment = "";
            this.$emit("updateData");
        });
    }



}