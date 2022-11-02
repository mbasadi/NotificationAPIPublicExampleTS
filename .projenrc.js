/* eslint-disable comma-dangle */
const { typescript } = require('projen');
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: 'main',
  name: 'NotificationAPIPublicExampleTS',

  deps: ['notificationapi-node-server-sdk']
  // devDeps: ['prettier'],
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
