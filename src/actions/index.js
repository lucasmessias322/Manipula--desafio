import axios from "axios";


const api = axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        "access-control-allow-headers" : "Authorization",
        "Access-Control-Allow-Origin": "*",
        'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        'x-rapidapi-key': "9e4a0d3fe2mshd2e06bf87625038p1eca84jsn219ebdae1689"
    }
});

function getRank(search){
    const rank = api.get(`playlist/1001939451`)
    .then(response => response.data.tracks.data)
    .catch(error => console.log(error));

    return rank
}

 function getAlbums(search){
    const albums = api.get(`search?q=${search}`)
    .then(response => response.data.data)
    .catch(error => console.log(error));

    return albums
}



export {getAlbums, api, getRank}
