

const token = '563492ad6f917000010000010d39fbe57f3046ef865b0daef097410b';
const perPage = 50;

const defaultImagePath = 'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200';
const photo = async (keyWord) => {
  // searchVal = searchVal.toLowerCase();
  console.log(keyWord.main);
  const response = await fetch(`https://api.pexels.com/v1/search?per_page=${perPage}&query=${keyWord.main}%20sky`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `token ${token}`,
    },
  });

  const data = await response.json();
  if (data.total_results > 0) {
    const i = Math.floor(Math.random() * (perPage - 1));
    return data.photos[i].src.landscape;
  }
  return defaultImagePath;
};

export default photo;
