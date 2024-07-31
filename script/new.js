var img2 = document.getElementById("img2");
var views2 = document.getElementById("views2");
var p2 = document.getElementById("p2");
var headers2 = document.getElementById("headers2");

axios.get('https://novels.battos.dev/api/project/')
.then(function (response) {
            var tagsArray = response.data[0].tags.split(',');
            var tagsContainer = document.getElementById('tags2');
            tagsArray.forEach(function(tag) {
                var a = document.createElement('a');
                a.href = "projects.html";
                a.className = "tags";
                a.textContent = tag.toUpperCase();
                tagsContainer.appendChild(a);
            });
console.log(response.data[0]);
img2.src = response.data[0].image;
views2.innerHTML = response.data[0].views;
headers2.innerHTML = response.data[0].title;
p2.innerHTML = response.data[0].synopsis;
})
.catch(function (error) {
    console.log(error);
})
