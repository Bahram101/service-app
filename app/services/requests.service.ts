import { request } from './api/request.api'

export const RequestService = {
  async getAllRequests() {
    return request<any>({
      url: '/core/logistics/request-outs',
      method: 'GET', 
    })
  }
}
