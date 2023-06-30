const db = new Map();

class User {
  constructor(userData) {
    const { login, email, password, isMale } = userData;

    this.login = login;
    this.email = email;
    this.password = password;
    this.isMale = isMale;

    const currentDate = new Date();

    this.createdAt = currentDate;
    this.updatedAt = currentDate;

    this.id = db.size + 1;

    db.set(this.id, this);

    return Promise.resolve(this);
  }

  static findAll() {
    return Promise.resolve([...db.values()]);
  }

  static findOne(id) {
    return Promise.resolve(db.get(id));
  }

  static deleteById(id) {
    return Promise.resolve(db.delete(id));
  }

  update(newUserData) {
    const oldUser = db.get(this.id);

    const newUser = new User({
      ...oldUser,
      ...newUserData,
    });

    const falseId = newUser.id;
    newUser.id = this.id;
    newUser.createdAt = oldUser.createdAt;

    db.set(this.id, newUser);
    db.delete(falseId);

    return Promise.resolve(newUser);
  }
}

module.exports = User;
