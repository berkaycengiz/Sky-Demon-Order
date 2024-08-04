var img2 = document.getElementById("img2");
var views2 = document.getElementById("views2");
var p2 = document.getElementById("p2");
var headers2 = document.getElementById("headers2");
var new1_eps = document.getElementById("new1-eps");

axios.get('https://novels.battos.dev/api/project/')
.then(async function (response) {
    var chapters = await getChapters(response.data[0].slug);
    new1_eps.innerHTML = chapters.length + " Episodes";
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
