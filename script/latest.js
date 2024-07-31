document.addEventListener('DOMContentLoaded', function() {axios.get('https://novels.battos.dev/api/project/latest')
    .then(function (response) {
        const mangacontainer = document.getElementById('latest');
        const data = response.data;
        data.forEach(item => {
            const card = document.createElement('div');
    card.className = 'mangacard';
    const innercard = `
                        <div class="imgcontainer2">
                            <a href="" class="latestlink">
                                <img alt="manganame" src="${item.image}">
                            </a>
                        </div>
                        <div class="info2">
                            <span class="episode">145 Episodes</span>
                            <a href="" class="headerslink">
                                <p>${item.title}</p>
                            </a>
                            <div class="latestepisodes">
                                <div class="latestep">
                                    <a href="" class="episodelink">Episode 31</a>
                                    <span>2 hours ago</span>
                                </div>
                                <div class="latestep">
                                    <a href="" class="episodelink">Episode 31</a>
                                    <span>2 hours ago</span>
                                </div>
                                <div class="latestep">
                                    <a href="" class="episodelink">Episode 31</a>
                                    <span>2 hours ago</span>
                                </div>
                                <div class="latestep">
                                    <a href="" class="episodelink">Episode 31</a>
                                    <span>2 hours ago</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                    card.innerHTML = innercard;
                    console.log(card);
    mangacontainer.appendChild(card);
        });
    })
    .catch(function (error) {
        console.log(error);
    })
})