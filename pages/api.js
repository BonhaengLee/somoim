export const getPhotos = async () => {
  const res = await fetch(`https://source.unsplash.com/1400x360/?people,talk`, {
    headers: {
      // Authorization: API_KEY,
    },
  });
  const responseJson = await res.text();
  return responseJson.photos;
};
