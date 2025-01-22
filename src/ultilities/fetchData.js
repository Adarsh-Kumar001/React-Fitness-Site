
//from rapidapi: exercises api
export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_API_KEY_EXERCISES,
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  };
  

//from rapid api: youtube search and download api
export const youtubeOptions = {
  method: 'GET',
  //url: 'https://youtube-search-and-download.p.rapidapi.com/channel/about',
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY_EXERCISES,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

//function to fetch data from api using its url and options(as above)
export const fetchData = async (url, options) =>{
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}