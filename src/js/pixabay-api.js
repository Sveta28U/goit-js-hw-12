const API_KEY = '22356210-f5a6fb995cd777b2b01184cc9';
const BASE_URL = 'https://pixabay.com/api/';

export function getPhotos(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`${BASE_URL}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json('');
  });
}
