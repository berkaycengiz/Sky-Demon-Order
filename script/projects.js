var i = 0;

document.addEventListener('DOMContentLoaded', function() {
    axios.get('https://novels.battos.dev/api/project')
    .then(function (response) {
        const mangacontainer = document.getElementById('mangacontainer');
        const data = response.data;
        data.forEach(async item => {
            var chapters = await getChapters(item.slug);
            const card = document.createElement('div');
            card.className = 'mangacard';
            const innercard = `
                        <div class="imgcontainer">
                            <a href="" class="readlink">
                                <img alt="manganame" id="img" src="${item.image}">
                                <div class="status" id="status">
                                    <span class="inner">${item.status.toUpperCase()}</span>
                                </div>
                            </a>
                        </div>
                        <div class="info">
                            <div class="top">
                                <div class="stats">
                                    <span class="episode">${chapters.length} Episodes</span>
                                    <div class="stat">
                                        <span class="views" id="views">${item.views} Views</span>
                                    </div>
                                </div>
                                <a href="" class="headers" id="headers">${item.title}</a>
                                <div class="tag" id="${i}">
                                </div>
                            </div>
                            <p id="p">${item.synopsis}</p>
                        </div>
                    </div>
                    `;
            card.innerHTML = innercard;
            console.log(card);
            mangacontainer.appendChild(card);
            var tagsArray = response.data[i].tags.split(',');
            var tagsContainer = document.getElementById(i);
            i++;
            tagsArray.forEach(function(tag) {
                var a = document.createElement('a');
                a.href = "projects.html";
                a.className = "tags";
                a.textContent = tag.toUpperCase();
                tagsContainer.appendChild(a);
            });
        });
    })
    .catch(function (error) {
        console.log(error);
    })
})