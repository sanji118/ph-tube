function getTimeString(time){
    const day = parseInt(time / (24*3600));
    const hour = parseInt(time / 3600);
    const min = parseInt((time % 3600)/60);
    const second = parseInt((time % 3600) % 60 );

    return `${day} days ${hour} hours ${min} min ${second} second ago`
}

const reActivateClass = () => {
    const buttons = document.getElementsByClassName('category-btn');
    console.log(buttons);
    for (let btn of buttons){
        btn.classList.remove('red');
    }
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