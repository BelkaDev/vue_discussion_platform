export default class postService {
  constructor(http) {
    this._http = http;
  }
  getPosts() {
    this._http
      .get(this.$hostname + "/posts/")
      .then(resp => {
        console.log(resp.data);
        alert("ok")
      })
      .catch(error => {
        console.log(error);
        alert("nah")
      });
  }
  getPost(postId) {
    this._http
      .get(this.$hostname + "/posts/" + postId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  createPost(post) {
    this._http
      .post(this.$hostname + "/posts/", post)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePost(postId, newPost) {
    this._http
      .put(this.$hostname + "/posts/" + postId, newPost)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deletePost(postId) {
    this._http
      .delete(this.$hostname + "/posts/" + postId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
