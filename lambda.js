exports.handler = function (event, context) {
  console.log(event);
  context.succeed("we are in the test-deploy-4 branch: ", event.name);
};
