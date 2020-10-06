export default class postService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }
  getPosts(documentId) {
    return this._http
      .get(this._hostname + "/documents/" + documentId + "?posts")
      .then(resp => {
        return resp.data.posts;
      })
      .catch(error => {
        console.log(error);
      });
  }
  createPost(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePost(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deletePost(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  setLike(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  unlike(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  setSeen(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
