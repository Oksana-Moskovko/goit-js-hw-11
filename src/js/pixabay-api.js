import axios from 'axios';

export function getImagesByQuery(query) {
    axios.get("https://pixabay.com/api/", {
	params: {
		key: '50343879-15e81ad9c5fd9246c97e6d2d5',
        q: query,
        image_type: 'photo', 
        orientation: 'horizontal',
        safesearch: true
    }
    })
    .then(response => console.log(response.data))
	.catch(error => console.log(error))
}