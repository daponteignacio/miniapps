export const fetchGif = async (termino) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(termino)}&api_key=1DsBvT0WlADWLIu4G7vMKdheeLG0y8kQ&limit=10`;
    const resp = await fetch(url); 
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })

    return gifs;
}

export const fetchImg = async (termino) => {
    
    const url = `https://api.unsplash.com/search/photos?per_page=10&query=${termino}`;
    const resp = await fetch(url, 
        {headers: {
            'Authorization': 'Client-ID aaCZG5e1HjZMC-f42rY3Mh00e6bVlaT2mr0irQMXtBU'
        }}
    );
    const { results } = await resp.json();
    
    let imgs = [];
    for (let i = 1; i < 10; i++) {
        const element = results[i];
        
        imgs.push({
            id: element.id,
            title: element.title,
            url: element.urls.small
        }); 
    }


    
    return imgs;
}