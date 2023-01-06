exports.handler = function (event, context) {
  console.log(event);
  context.succeed("we are in the test-deploy-8 branch: ", event.name);
};
