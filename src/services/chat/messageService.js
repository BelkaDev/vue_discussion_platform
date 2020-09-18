export default class discussionService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
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
  deleteMessage(discussionId) {
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
