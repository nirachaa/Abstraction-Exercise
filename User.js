class User {
  constructor(username, password) {
    this.username = username;
    // private password and profile
    this._password = password;
    this._profile = { username: username };
  }

  // methods
  login(credentials) {
    if (credentials.username === this.username && credentials.password === this._password) {
      return true;
    }

    throw new Error("Invalid credentials");
  }

  logout() {
    // log msg “<username> logged out”
    console.log(`${this.username} logged out`);
  }

  getProfile() {
    return this._profile;
  }
}
