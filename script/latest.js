document.addEventListener('DOMContentLoaded', function() {
    axios.get('https://novels.battos.dev/api/project/latest')
    .then(function (response) {
        const mangacontainer = document.getElementById('latest');
        const data = response.data;
        data.forEach(async item => {
            var chapters = await getChapters(item.slug);
            const lastEpisodes = chapters.slice(-4).reverse();
            const chaptersD = document.createElement('div');
            chaptersD.className = 'latestepisodes';
            lastEpisodes.forEach(ep => {
                chaptersD.innerHTML += `
                                <div class="latestep">
                                    <a href="" class="episodelink">${ep.title.substring(0, 10)}</a>
                                    <span>${ep.time_ago}</span>
                                </div>
                `
            });
            const card = document.createElement('div');
            card.className = 'mangacard';
            const innercard = `
                        <div class="imgcontainer2">
                            <a href="" class="latestlink">
                                <img alt="manganame" src="${item.image}">
                            </a>
                        </div>
                        <div class="info2">
                            <span class="episode">${chapters.length} Episodes</span>
                            <a href="" class="headerslink">
                                <p>${item.title}</p>
                            </a>
                            ${chaptersD.innerHTML}
                        </div>
                    </div>
                    `;
                    card.innerHTML = innercard;
                    mangacontainer.appendChild(card);
        });
    })
    .catch(function (error) {
        console.log(error);
    })
})