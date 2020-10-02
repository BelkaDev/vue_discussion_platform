export default class discussionService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }
  getUserDiscussions(documentId, userId) {
    return this._http
      .get(
        this._hostname +
          "/documents/" +
          documentId +
          "?discussion.receivers.id=" +
          userId
      )
      .then(resp => {
        return resp.data.discussions;
      })
      .catch(error => {
        console.log(error);
      });
  }
  createDiscussion(doc) {
    this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  sendMessage(discussionId, discussion) {
    return this._http
      .put(this._hostname + "/discussions/" + discussionId, discussion)
      .then(resp => {
        console.log(resp);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateDiscussion(discussionId, newDiscussion) {
    this._http
      .put(this._hostname + "/discussions/" + discussionId, newDiscussion)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  getMessages(discussionId) {
    return this._http
      .get(this._hostname + "/discussions/" + discussionId)
      .then(resp => {
        return resp.data.messages;
      })
      .catch(error => {
        console.log(error);
      });
  }
  deleteDiscussion(discussionId) {
    this._http
      .delete(this._hostname + "/discussions/" + discussionId)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
