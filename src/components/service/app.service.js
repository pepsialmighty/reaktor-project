import {
  URL_REPS,
  URL_ABIPLOS,
  URL_NOUKE,
  URL_DERP,
  URL_XOON,
} from '../../config/paths';
import axios from 'axios';

function getData(url) {
  return axios.get(`${url}`).catch((err) => console.log(err));
}

export function fetchProducts(product) {
  return getData(product);
}

export function fetchCompanies() {
  let companyUrls = [URL_REPS, URL_ABIPLOS, URL_NOUKE, URL_DERP, URL_XOON];
  let response = companyUrls.map((url) => getData(`${url}`));
  let array = [];

  // Return a promise contains 5 pending promises
  return Promise.all(response)
    .then((result) => {
      return result.map((res) => {
        return res.data.response;
      });
    })
    .then((result) => async () => {
      // Iterate through the array contains data from 5 companies
      for (let i = 0; i < result.length; i++) {
        // If the api fail to return data, fetch again
        if (typeof result[i] === 'string') {
          const refetch = async () => {
            let refetchUrl = await axios
              .get(`${companyUrls[i]}`)
              .then((res) => res.data.response);
            while (typeof result[i] === 'string') {
              result[i] = refetchUrl;
            }
            // Push the fetched data to the return array
            result[i].map((response) => array.push(response));
          };
          await refetch();
        } else {
          // Push the fetched data to the return array
          result[i].map((response) => array.push(response));
        }
      }
      return array;
    });
}
