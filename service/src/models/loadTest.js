import homePage from '../scenarios/home.js';

class LoadTest {
    constructor(name, users, duration, baseUrl, token) {
      this.name = name;
      this.users = users;
      this.duration = duration;
      this.baseUrl = baseUrl;
      this.token = token;
    }
  }
  
  module.exports = LoadTest;
  