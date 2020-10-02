export default class postService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }

  getLikes(postId) {
    return this._http
      .get(this._hostname + "/posts/" + postId)
      .then(resp => {
        return resp.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
  }

  addLike(postId, post) {
    return this._http
      .put(this._hostname + "/posts/" + postId, post)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteLike(postId, post) {
    return this._http
      .put(this._hostname + "/posts/" + postId, post)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
