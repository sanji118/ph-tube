/**buttpns creating */
const loadCategories = () => {
    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
};

//create displayCategories
const displayCategories = (categories) =>{
    categories.forEach((item) => {
        //create button
        const button = document.createElement('button');
        button.classList = 'btn';
        button.innerText = item.category;
        document.getElementById('categories-container').append(button);
    })
}

loadCategories();

/**videos creating */

const loadVideos = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(err => console.log(err))
}

const displayVideos = (videos) =>{
    videos.forEach((video) => {
        console.log(video);
    })
}

loadVideos();