const API_KEY = 'AIzaSyCwbMPcqrbhcbvb7IHav_Tt-Vn4_cDB52o';

function youtubeFetch(searchItem) {
  return new Promise((resolve, reject) => {
    const youtubeApi = window.gapi.client;
    if (youtubeApi) {
      youtubeApi.setApiKey(API_KEY);
      youtubeApi.load('youtube', 'v3', () => {
        const request = youtubeApi.youtube.search.list({
          part: 'snippet',
          q: searchItem,
          maxResults: 15,
        });
        request.execute((response) => {
          if (response) {
            resolve(response);
          } else {
            reject('No information found');
          }
        });
      });
    }
  });
}
export default youtubeFetch;
