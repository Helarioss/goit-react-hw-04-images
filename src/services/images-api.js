const API_KEY = '25536827-1d663420849b7b373b285294a';

export const fetchImages = async (search, page) => {
  const results = await fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await results.json();
};
