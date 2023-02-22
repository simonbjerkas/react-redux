import axios from 'axios';

const searchImages = async (term: string) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID nwx1f7I3gCsjtri6NhHNNA9eDnYdNP4GnapNex6Pu5k',
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
