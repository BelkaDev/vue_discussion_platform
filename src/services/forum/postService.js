export default class postService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }
  getPosts() {
    return this._http
      .get(this._hostname + "/posts/")
      .then(resp => {
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  createPost(post) {
    this._http
      .post(this._hostname + "/posts/", post)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePost(postId, newPost) {
    this._http
      .put(this._hostname + "/posts/" + postId, newPost)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deletePost(postId) {
    this._http
      .delete(this._hostname + "/posts/" + postId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
