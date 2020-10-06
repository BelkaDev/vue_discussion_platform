export default class documentService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }
  getDocuments() {
    return this._http
      .get(this._hostname + "/documents/")
      .then(resp => {
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getDocument(documentId) {
    return this._http
      .get(this._hostname + "/documents/" + documentId)
      .then(resp => {
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
