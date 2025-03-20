import data from "../data/data.json";

export const getImagesByType = (type) => {
  return data.filter((img) => img.type === type);
};

export const getImagesByTypeAndName = (type, name) => {
  const imageDetailsObj = getImagesByType(type);
  return imageDetailsObj?.[0]?.details
    .filter((img) => img.uniqueName === name && !img?.isGallary)
    .sort((a, b) => (a.seq || 0) - (b.seq || 0));
};

export const getImagesByTypeForGallary = (type) => {
  const imageDetailsObj = getImagesByType(type);
  return imageDetailsObj?.[0]?.details.filter((img) => img?.isGallary);
};
