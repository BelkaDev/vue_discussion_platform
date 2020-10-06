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

  sendMessage(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  updateMessage(doc) {
    return this._http
      .put(this._hostname + "/documents/" + doc.id, doc)
      .then(resp => {
        console.log(resp.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteMessage(doc) {
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
