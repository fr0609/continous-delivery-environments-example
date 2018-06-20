function runMigration(migration) {
  const post = migration.editContentType("post");
  post
    .createField("test")
    .name("test")
    .type("Symbol")
    .required(false);
  return;
}

module.exports = {
  runMigration
};
