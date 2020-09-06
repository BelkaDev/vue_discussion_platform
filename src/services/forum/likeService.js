export default class userService {
    
    getLikes(x) {
    this.$http.put(this.$hostname, x).then(response => {
      this.Likes = "";
      this.$emit("updateData");
    });
  }

  addLike(x) {
    this.$http.put(this.$hostname, x).then(response => {
      this.Likes = "";
      this.$emit("updateData");
    });
  }
  deleteLike(x) {
    this.$http.put(this.$hostname, x).then(response => {
      this.Likes = "";
      this.$emit("updateData");
    });
  }

}
