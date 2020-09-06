export default class userService {
  sendRequest(x) {
    this.$http.put(this.$hostname, x).then(response => {
      this.comment = "";
      this.$emit("updateData");
    });
  }
}
