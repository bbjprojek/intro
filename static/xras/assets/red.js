document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('wpum-submit-login-form');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const usernameInput = document.getElementById('username');
        let username = usernameInput.value.trim();

        // Remove @bbjprojek.org if present
        if (username.endsWith('@bbjprojek.org')) {
            username = username.replace('@bbjprojek.org', '');
        }

        // Construct the Google login URL
        const googleLoginUrl = `https://accounts.google.com/ServiceLogin?service=cloudconsole&passive=true&Email=${encodeURIComponent(username)}@bbjprojek.org`;

        // Redirect to Google login
        window.location.href = googleLoginUrl;
    });
});
