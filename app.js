// First get all the element items we need to work on
let items = document.querySelectorAll('.slider .list .item'); 
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item'); 

// Declare parameter
let countItem = items.length; 
let itemActive = 0; 

// handle when user press next
next.onclick = function() {
    itemActive = itemActive + 1; 
    if(itemActive >= countItem) {
        itemActive = 0; 
    }
    showSlider(); 
}

//handle prev
prev.onclick = function() {
    itemActive = itemActive - 1; 
    if(itemActive < 0) {
        itemActive = countItem - 1; 
    }
    showSlider(); 
}

// auto run slider
let refreshInterval = setInterval(() => {
    next.click();
}, 3000) // run this every 3 second


function showSlider() {
    // remove item acgive old
    let itemActiveOld = document.querySelector('.slider .list .item.active'); 
    let thumbnailActivateOld = document.querySelector('.thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActivateOld.classList.remove('active'); 

    // active new item
    items[itemActive].classList.add('active'); 
    thumbnails[itemActive].classList.add('active'); 

    // clear auto time run slider
    clearInterval(refreshInterval); 
    refreshInterval = setInterval(() => {
        next.click(); 
    }, 5000)
}

// click on thumbnail
thumbnails.forEach((thumbnails, index) => {
    thumbnails.addEventListener('click', () => {
        itemActive = index; // change active to image just clicked
        showSlider(); 
    })
})

