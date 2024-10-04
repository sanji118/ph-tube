function switchButtonColor(id){
    document.getElementById(id).classList.add('red');
}

document.getElementById('all-view-btn').addEventListener('click', function(event){
    switchButtonColor('all-view-btn');
})
document.getElementById('music-btn').addEventListener('click', function(event){
    switchButtonColor('music-btn');
})
document.getElementById('comedy-btn').addEventListener('click', function(event){
    switchButtonColor('comedy-btn');
})
document.getElementById('drawing-btn').addEventListener('click', function(event){
    switchButtonColor('drawing-btn');
})