import axios from 'axios';

const initStrapiClient = async ({ baseUrl, email, password } = {}) => {
  const client = axios.create({
    baseURL: baseUrl ?? process.env.NEXT_PUBLIC_STRAPI_BASE_URL,
  });

  client.interceptors.response.use(({ data }) => data);

  const authResp = await client.post('/admin/login', {
    email: email ?? process.env.NEXT_PUBLIC_STRAPI_EMAIL,
    password: password ?? process.env.NEXT_PUBLIC_STRAPI_PASSWORD,
  });

  client.interceptors.request.use((config) => {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${authResp.data.token}`,
    };

    return config;
  });

  /*axios.interceptors.request.use(function (config) {
    console.info('[strapi] request config: ', config);
    return config;
  }, error => {
    return Promise.reject(error);
  });
  axios.interceptors.response.use(function (response) {
    console.info('[strapi] response config: ', response);
    return response;
  }, error => {
    console.error('[strapi] error config: ', error);
    return Promise.reject(error);
  });*/

  return client;
};

export default initStrapiClient;
