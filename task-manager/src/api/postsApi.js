const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts = async (page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const posts = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    return { posts, totalCount: parseInt(totalCount) };
  } catch (error) {
    throw new Error(`Error fetching posts: ${error.message}`);
  }
};

export const fetchPostById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error fetching post: ${error.message}`);
  }
};

export const searchPosts = async (query, page = 1, limit = 10) => {
  try {
    const response = await fetch(`${BASE_URL}/posts?q=${encodeURIComponent(query)}&_page=${page}&_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to search posts');
    }
    const posts = await response.json();
    const totalCount = response.headers.get('X-Total-Count');
    return { posts, totalCount: parseInt(totalCount) };
  } catch (error) {
    throw new Error(`Error searching posts: ${error.message}`);
  }
}; 