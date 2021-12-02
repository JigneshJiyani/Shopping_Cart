export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';


export const getChannel = channel => ({
  type: SELECT_CHANNEL,
  channel,
});

export const requestPosts = () => ({
  type: REQUEST_POSTS,
});

export const receivedPosts = json => ({
  type: RECEIVE_POSTS,
  json: json.articles,
});

export function fetchPosts(_channel) {
  return function (dispatch) {
    dispatch (requestPosts());
    return fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-10-23&sortBy=publishedAt&apiKey=API_KEY')
      .then(
      response => response.json(),
      error => console.log('An error occurred.', error),
    )
      .then((json) => {
        dispatch(receivedPosts(json));
      },
    );
  };
}