// src/utility/addtoDB.js

// Add book to localStorage
export const addToDB = (key, book) => {
  let existing = JSON.parse(localStorage.getItem(key)) || [];
  const alreadyExists = existing.some((b) => b.bookId === book.bookId);

  if (alreadyExists) return false;

  existing.push(book);
  localStorage.setItem(key, JSON.stringify(existing));
  return true;
};

// Remove book from localStorage
export const removeFromDB = (key, bookId) => {
  let existing = JSON.parse(localStorage.getItem(key)) || [];
  const updated = existing.filter((b) => b.bookId !== bookId);
  localStorage.setItem(key, JSON.stringify(updated));
  return updated;
};

// Get all books from a key
export const getFromDB = (key) => {
  return JSON.parse(localStorage.getItem(key)) || [];
};
