export default class userService {
  constructor(http, hostname) {
    this._hostname = hostname;
    this._http = http;
  }
  getUsers() {
    return this._http
      .get(this._hostname + "/users/")
      .then(resp => {
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
  getLoggedUser(userId) {
    return this._http
      .get(this._hostname + "/users/" + userId)
      .then(resp => {
        return resp.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
