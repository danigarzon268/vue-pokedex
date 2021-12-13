export default function auth({ Store, next }) {
  if (!Store.getters.user) {
    window.location = "/";
    window.clearInterval(window.threadRealTime);
    return;
  }

  return next();
}
