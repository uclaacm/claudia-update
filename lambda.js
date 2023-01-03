exports.handler = function (event, context) {
  console.log(event);
  context.succeed("claudia test: ", event.name);
};
