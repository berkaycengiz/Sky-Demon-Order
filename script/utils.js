async function getChapters(slug) {
    try {
        const response = await axios.get('https://novels.battos.dev/api/project/' + slug + '/chapters');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}