document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async function (event) {
        event.preventDefault();
        
        const username = form.username.value;
        const password = form.password.value;

        if (!username || !password) {
            alert("Both username and password are required.");
            return;
        }

    
        const hashedPassword = await hashPassword(password);

        
        console.log("Username:", username);
        console.log("Hashed Password:", hashedPassword);
    });

    async function hashPassword(password) {
        
        const bcrypt = require('bcryptjs');
        
        
        const hashedPassword = await bcrypt.hash(password, 10);
        return hashedPassword;
    }
});
