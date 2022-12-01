import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRefs = document.querySelector('.gallery')

galleryRefs.innerHTML = makeNewRender(galleryItems)

function makeNewRender(galery) {
    return galery.map(i =>  
    `<a class="gallery__item" 
    href="${i.original}">
    <img class="gallery__image" 
    src="${i.preview}" 
    alt="${i.description}" />
    </a>`).join('')
}
   
var lightbox = new SimpleLightbox('.gallery a');


