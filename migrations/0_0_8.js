// contentful space environment create -e add-rating --name "Add rating field" --await-processing
// contentful space migration -e add-rating migrations/0_0_8.js

module.exports = function runMigration(migration) {
  const post = migration.editContentType("post");
  post
    .createField("rating")
    .name("Rating")
    .type("Number")
    .required(false);
  return;
};
