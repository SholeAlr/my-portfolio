import AxiosService from './axios-service'

// App axios service
export const AppApi = new AxiosService({
  baseUrl: 'https://URL.com' as string,
})
