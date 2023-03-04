import axios from "axios";

const URL = "https://pixabay.com/api/";
const API_KEY = "34127715-0994c94c15909302ed2634083";

const getImages = async(text, count) => {
  try {
    const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo&per_page=${count}&safesearch=true`)
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default getImages;
