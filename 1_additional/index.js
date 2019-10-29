let images = [
	"img/img1.png",
    "img/img2.png",
    "img/img3.png"
]


Promise.all(images).then(elem => { 
    elem.forEach((item) => {
        console.log(item);
        let image = document.createElement("img");
        image.src = item;
        image.style.alt = item;
        image.style.height = '100px';
        image.style.width = '100px';
        document.body.appendChild(image);
    });
});