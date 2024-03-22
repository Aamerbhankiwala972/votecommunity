// Simulated user database
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' }
];

let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('voting-section').style.display = 'block';
    } else {
        alert('Invalid username or password');
    }
}

function vote() {
    const selectedCandidate = document.getElementById('candidates').value;
    if (currentUser) {
        alert(`You voted for ${selectedCandidate}`);
        // Here you can implement the logic to record the vote, possibly with AJAX to a backend server
    } else {
        alert('Please login first');
    }
}
