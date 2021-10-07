import axios from "axios";

const API_KEY = "9e4a0d3fe2mshd2e06bf87625038p1eca84jsn219ebdae1689"

const api = axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com",
    timeout: 30000,
    headers: {'x-rapidapi-key': API_KEY}
});

function getRank(search){
    const rank = api.get(`chart/${search}`)
    .then(response => response.data.data)
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
