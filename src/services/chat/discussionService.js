export default class discussionService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }
  getDiscussions() {
    return this._http
      .get(this._hostname + "/discussions/")
      .then(resp => {
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  createDiscussion(discussion) {
    this._http
      .discussion(this._hostname + "/discussions/", discussion)
      .then(resp => {
        console.log(resp.data);
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
