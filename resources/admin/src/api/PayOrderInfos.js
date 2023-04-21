import Request from '@/axios/request'

export function getPayOrderInfos(params) {
  return Request.get('PayOrderInfos', { params })
}

export function createPayOrderInfo() {
  return Request.get('PayOrderInfos/create')
}

export function storePayOrderInfo(data) {
  return Request.post('PayOrderInfos', data)
}

export function updatePayOrderInfo(id, data) {
  return Request.put(`PayOrderInfos/${id}`, data)
}

export function editPayOrderInfo(id) {
  return Request.get(`PayOrderInfos/${id}/edit`)
}

export function destroyPayOrderInfo(id) {
  return Request.delete(`PayOrderInfos/${id}`)
}
