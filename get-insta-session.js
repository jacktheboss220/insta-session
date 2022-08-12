let { igApi, getCookie } = require("insta-fetcher");
let username='Your user name here';
let password='your password here';
(async () => {
  const session_id = await getCookie(username, password);
  console.log(session_id);
})();
