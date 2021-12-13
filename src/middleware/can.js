export default permission => ({ next, Store }) => {
  var user = Store.getters.user;

  if (user.Rol.permissions.indexOf(permission) === -1) {
    window.clearInterval(window.threadRealTime);
    window.location = "/";
    return;
  }

  return next();
};
