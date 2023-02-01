const AbstractManager = require("./AbstractManager");

class SkillManager extends AbstractManager {
  constructor() {
    super({ table: "skill" });
  }

  insert(skill) {
    return this.connection.query(
      `insert into ${this.table} (title) values (?)`,
      [skill.title]
    );
  }

  update(skill) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [skill.title, skill.id]
    );
  }
}

module.exports = SkillManager;
