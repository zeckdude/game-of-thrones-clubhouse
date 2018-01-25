export const addIdToObject = (responseObject) => {
  console.log('sdsd');
  return { ...responseObject, id: parseIdFromUrl(responseObject.url) };
};

export const parseIdFromUrl = (url) => {
  const t = 'sdfdsf';
  return Number(url.match(/(\d+)$/)[0]);
};
