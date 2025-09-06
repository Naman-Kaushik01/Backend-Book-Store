import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,  // Ensures title is provided
  },
  author: {
    type: String,
    required: true,  // Ensures author is provided
  },
  genre: {
    type: String,
    required: true,  // Ensures genre is provided
  },
  publishedDate: {
    type: Date,
    required: true,  // Ensures publishedDate is provided
  },
});


const Book = mongoose.model('Book', bookSchema);

export default Book;
