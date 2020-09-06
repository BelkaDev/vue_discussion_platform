export default class userService {
    
    getComments(x) {
    this.$http.put(this.$hostname, x).then(response => {
      this.comment = "";
      this.$emit("updateData");
    });
  }

  addComment(x) {
    this.$http.put(this.$hostname, x).then(response => {
      this.comment = "";
      this.$emit("updateData");
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
