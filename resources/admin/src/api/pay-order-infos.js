import Request from '@/axios/request'

export function getPayOrderInfos(params) {
  return Request.get('pay-order-infos', { params })
}

export function createPayOrderInfo() {
  return Request.get('pay-order-infos/create')
}

export function storePayOrderInfo(data) {
  return Request.post('pay-order-infos', data)
}

export function updatePayOrderInfo(id, data) {
  return Request.put(`pay-order-infos/${id}`, data)
}

export function editPayOrderInfo(id) {
  return Request.get(`pay-order-infos/${id}/edit`)
}

export function destroyPayOrderInfo(id) {
  return Request.delete(`pay-order-infos/${id}`)
}
