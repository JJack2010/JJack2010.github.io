const imagegallery =[
    "https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F0fGVufDB8fDB8fHww",
   " https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhdHxlbnwwfHwwfHx8MA%3D%3D"
];

const imagelement=document.getElementById('gallery-image');
const prevbutton=document.getElementById('prev-btn');
const nextbutton=document.getElementById('next-btn');

let currentimageindex=0;

function updateimage(){
imagelement.src=imagegallery[currentimageindex];
}

updateimage();


nextbutton.addEventListener('click',function(){
 currentimageindex=(currentimageindex +1) % imagegallery.length;   
updateimage();
}); 
prevbutton.addEventListener('click',function(){
 currentimageindex=(currentimageindex -1+imagegallery.length) % imagegallery.length;   
updateimage();
}); 


