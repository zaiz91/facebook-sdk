Package.describe({
  summary: "Facebook SDK packaged for Meteor",
  version: "0.1.0",
  git: "https://github.com/biasport/facebook-sdk.git"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");
    api.use(['jquery', 'spacebars', 'ui', 'templating']);
    api.add_files(['sdk.js', 'templates.html'], 'client');
});
