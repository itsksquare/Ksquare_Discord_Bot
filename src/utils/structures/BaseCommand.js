module.exports = class BaseCommand {
  constructor(name, category, aliases, permissions) {
    this.name = name;
    this.category = category;
    this.aliases = aliases;
    this.permissions = permissions;
  }
};
