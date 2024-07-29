const form = document.getElementById("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let names = document.getElementById("nameid");
    let username = document.getElementById("usernameid");
    let email = document.getElementById("emailid");
    let password = document.getElementById("passwordid");
    axios.post('http://162.19.242.35:8090/api/user/register', {
        name: names.value,
        username: username.value,
        email: email.value,
        password: password.value,
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
})

