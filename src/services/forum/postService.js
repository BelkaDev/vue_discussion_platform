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
    this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updatePost(postId, newPost) {
    this._http
      .put(this._hostname + "/documents/1?post.id" + postId, newPost)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  deletePost(postId) {
    this._http
      .delete(this._hostname + "/documents/1?post.id" + postId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
