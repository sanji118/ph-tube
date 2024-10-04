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
    const card = document.createElement('div');
    card.classList = 'card card-compact'
    card.innerHTML = `
        <figure class="px-10 pt-10">
            <img
            src= ${video.thumbnail}
            alt="Shoes"
            class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">${video.title}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>${video.others}</p>
        </div>
     `

     document.getElementById('video-container').append(card)
    })
}

loadVideos();