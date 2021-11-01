export function fetchCat() {
    //put my url for my API here but since its april's example 
    //im just gonna use the API she used
    return fetch('https://thatcopy.pw/catapi/rest/',{
        method:'GET'
    }).then(response => response.json());
}

export function fetchGOAT() {
    return fetch('https://api.kanye.rest', {
        method: 'GET'
    }).then(response => response.json());
}