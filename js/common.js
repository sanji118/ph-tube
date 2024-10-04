function switchButtonColor(id){
    document.getElementById(id).classList.add('red');
}


function getTimeString(time){
    const day = parseInt(time / (24*3600));
    const hour = parseInt(time / 3600);
    const min = parseInt((time % 3600)/60);
    const second = parseInt((time % 3600) % 60 );

    return `${day} days ${hour} hours ${min} min ${second} second ago`
}