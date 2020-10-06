export default class postService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }

  getComments(documentId, postId) {
    return this._http
      .get(this._hostname + "/documents/" + documentId + "?post.id=" + postId)
      .then(resp => {
        return resp.data.comments;
      })
      .catch(error => {
        console.log(error);
      });
  }

  addComment(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateComment(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteComment(doc) {
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
