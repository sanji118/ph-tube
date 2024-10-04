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
        <figure class="h-[200px] relative">
            <img class = "w-full h-full object-cover rounded-sm"
            src= ${video.thumbnail}
            alt="Shoes"/>
        </figure>
        <div class="py-2 flex gap-2">
            <div class="grid-span"><img src="${video.authors[0].profile_picture}" class="w-10 h-10 rounded-full object-cover" ></div>
            <div >${video.title}</div>
            <div>${video.authors[0].profile_name}</div>
            <div>${video.others.views}</div>
        </div>
     `

     document.getElementById('video-container').append(card);
    })
}

loadVideos();