export default class postService {
  getPosts() {
    this.$http
      .get(this.$hostname + "/posts/")
      .then(resp => {
        console.log(resp.data)
      })
      .catch(error => {
        console.log(error);
      });
  }
  getPost(postId) {
    this.$http
      .get(this.$hostname + "/posts/" + postId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  createPost(post) {
    this.$http
      .post(this.$hostname + "/posts/", post)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePost(postId, newPost) {
    this.$http
      .put(this.$hostname + "/posts/" + postId, newPost)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deletePost(postId) {
    this.$http
      .delete(this.$hostname + "/posts/" + postId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
