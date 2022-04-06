import axios from 'axios';

export const getList = async () => {
  const result = await axios({
    method: 'get',
    url: 'https://swapi.dev/api/people',
  });
  return result.data;
};
