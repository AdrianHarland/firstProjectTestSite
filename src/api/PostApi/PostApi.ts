export const getPosts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
    .then((response) => response.json())
    .then((json) => json);
};

export const getSinglePost = (id: string) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((json) => json);
};
