/**buttpns creating */
const loadCategories = () => {
    //fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log(err))
};

//create displayCategories
const displayCategories = (categories) => {
    categories.forEach((item) => {
        //create button
        const buttonContainer = document.createElement('div');
        
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}"  onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">${item.category}</button>
        `;
        document.getElementById('categories-container').append(buttonContainer);
    }    
    
)}


loadCategories();

/**videos creating */

const loadVideos = (searchText = "") =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then(res => res.json())
    .then(data => displayVideos(data.videos))
    .catch(err => console.log(err))
}

const displayVideos = (videos) =>{
    document.getElementById('video-container').innerHTML= '';

    if (videos.length === 0){
        document.getElementById('video-container').innerHTML = 'no content';
    }
    videos.forEach((video) => {
    
    const card = document.createElement('div');
    card.classList = 'card card-compact'
    card.innerHTML = `
        <figure class="h-[200px] relative">
            <img class = "w-full h-full object-cover rounded-sm"
            src= ${video.thumbnail}
            alt="Shoes"/>
            ${
                video.others.posted_date?.length === 0? "" : `<span class = "absolute right-2 bottom-2 bg-black text-white rounded p-1">${getTimeString(video.others.posted_date)}</span>`
            }
        </figure>
        <div class="py-2 flex gap-4">
            <div><img src="${video.authors[0].profile_picture}" class="w-10 h-10 rounded-full object-cover" ></div>
            <div>
                <div class= "font-bold">${video.title}</div>
                <div class="flex gap-3">
                    <p>${video.authors[0].profile_name}</p> 
                    ${video.authors[0].verified === true? '<img class ="w-5 h-5" src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" alt="">':''}
                </div>
                <div>${video.others.views}</div>
            </div>
        </div>
        </div>
        <p> <button  onclick="loadDetails('${
          video.video_id
        }')" class="btn btn-sm btn-error">details</button> </p>
        </div>
    </div>
     `

     document.getElementById('video-container').append(card);
    })
}

loadVideos();


const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            reActivateClass();
            const activeBtn = document.getElementById(`btn-${id}`);
            activeBtn.classList.add('red');
            displayVideos(data.category);
        })
        .catch(error => console.log(error));
}
const loadDetails = async (videoId) =>{
    console.log(videoId);
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const res = await fetch(url)
    const data = await res.json();
    displayDetails(data.video);
}

const displayDetails = (video) =>{
    console.log(video);
    const detailContainer = document.getElementById('modal-content');
    detailContainer.innerHTML = `
        <img src=${video.thumbnail} />
        <p>${video.description}</p>
    `;
    document.getElementById('customModal').showModal();

}

