export const getImageUrl = (imagePath) => {
  return `${import.meta.env.VITE_API_URL}uploads/${imagePath}`;
};
