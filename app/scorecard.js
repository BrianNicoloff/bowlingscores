module.exports = function () {

    this.users = [];

    this.addUser = function (name) {
        this.users.push({ name: name });
    }
}