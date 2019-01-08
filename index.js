class Bitbucket {
  // Sample: new Bitbucket({ username: "myUser", password: "myPass", debug: true, apiVersion: "2.0" })
  constructor(options) {
    this.options = {
      apiVersion: '2.0',
      debug: false
    };

    // Replace new options
    Object.assign(this.options, options);
  }
}

module.exports = Bitbucket;
