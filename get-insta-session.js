let { igApi, getSessionId } = require('insta-fetcher');
let username='Your user name here';
let pass='your password here';
(async () => {
    const session_id = await getSessionId('username', 'password');
    console.log('Copy this :- ',session_id);
})();
