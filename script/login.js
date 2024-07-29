const form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let username = document.getElementById("usernameid");
    let password = document.getElementById("passwordid");
    axios.post('http://162.19.242.35:8090/api/user/login', {
        username: username.value,
        password: password.value,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
})
