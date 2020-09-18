export default class postService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }

  getComments(postId) {
    return this._http
      .get(this._hostname + "/posts/" + postId)
      .then(resp => {
        return resp.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
  }

  addComment(postId, post) {
    return this._http
      .put(this._hostname + "/posts/" + postId, post)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateComment(postId, post) {
    return this._http
      .put(this._hostname + "/posts/" + postId, post)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteComment(postId) {
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
