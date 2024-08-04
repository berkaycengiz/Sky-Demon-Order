var img = document.getElementById("img");
var views = document.getElementById("views");
var p = document.getElementById("p");
var headers = document.getElementById("headers");
var eps = document.getElementById("featured1-eps");


axios.get('https://novels.battos.dev/api/project/featured')
.then(async function (response) {
    var chapters = await getChapters(response.data[0].slug);
    eps.innerHTML = chapters.length + " Episodes";
    var tagsArray = response.data[0].tags.split(',');
    var tagsContainer = document.getElementById('tags');
    tagsArray.forEach(function(tag) {
        var a = document.createElement('a');
        a.href = "projects.html";
        a.className = "tags";
        a.textContent = tag.toUpperCase();
        tagsContainer.appendChild(a);
    });
    console.log(response.data[0]);
    img.src = response.data[0].image;
    views.innerHTML = response.data[0].views;
    headers.innerHTML = response.data[0].title;
    p.innerHTML = response.data[0].synopsis;
})
.catch(function (error) {
    console.log(error);
})
