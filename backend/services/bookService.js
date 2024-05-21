import axios from 'axios';

// Function to fetch books from Google Books API
export const getBooksFromApi = async (query) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    return response.data.items.map(book => ({
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown',
      description: book.volumeInfo.description || 'No description available'
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Error('Failed to fetch books from API');
  }
};
