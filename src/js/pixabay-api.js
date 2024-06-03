import axios from 'axios';
const API_KEY = '22356210-f5a6fb995cd777b2b01184cc9';
const BASE_URL = 'https://pixabay.com/api/';
export const userOptions = {
  page: 1,
  per_page: 15,
  query: null,
};
export async function getPhotos() {
  try {
    return await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: userOptions.query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: userOptions.page,
        per_page: userOptions.per_page,
      },
    });
  } catch (error) {
    console.log(error);
  }
}
