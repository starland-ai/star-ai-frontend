import request from '@/utils/axios-req'


export function login(data) {
    return request({
      url: '/api/v1/account',
      method: 'post',
      data
    })
}
export function character(data) {
  return request({
    url: '/api/v1/character',
    method: 'post',
    data
  })
}
export function getClaimPoints(data) {
    return request({
        url: '/api/v1/account/claim_points',
        method: 'post',
        data
    })
}


export function getUserInfo(id) {
    return request({
        url: `/api/v1/account/${id}`,
        method: 'get',
    })
}

export function postPoints(id,data) {
    return request({
        url: `/api/v1/account/${id}/points`,
        method: 'post',
        data
    })
}

export function characterlike(id,data) {
  return request({
      url: `/api/v1/character/${id.id}/like`,
      method: 'post',
      data
  })
}

export function imagemodel(data) {
  return request({
    url: '/api/v1/character/image_model',
    method: 'get',
    data
  })
}
export function mycharacter(data) {
  return request({
    url: '/api/v1/character/my',
    method: 'get',
    data
  })
}
export function allcharacter(data) {
  return request({
    url: '/api/v1/character',
    method: 'get',
    data
  })
}
export function characterchat(id,data) {
  return request({
    url: `/api/v1/character/${id.digid}/chat`,
    method: 'post',
    data
  })
}
export function characterhistory(data) {
  return request({
    url: '/api/v1/character/history',
    method: 'get',
    data
  })
}
export function characterdetails(id) {
  return request({
    url: `/api/v1/character/${id.id}`,
    method: 'get',
    id
  })
}

export function getCharacterDetail(id) {

    return request({
        url: `/api/v1/character/${id}`,
        method: 'get',
    })
}


export function postMintInfo(id,data){
    return request({
        url: `/api/v1/character/${id}/mint`,
        method: 'post',
        data
    })
}

export function getPointsList(id, data) {
    return request({
        url: `/api/v1/account/${id}/activity_log`,
        method: 'get',
        data
    })
}


export function putCharacter(id,data) {
  return request ({
    url: `/api/v1/character/${id}`,
    method:'put',
    data
  })
}


export function getVoice() {
  return request({
    url: `/api/v1/character/voice`,
    method: 'get',
  })
}
export function deleteVirtualHuman(id) {
  return request({
      url: `/api/v1/character/${id}`,
      method: 'DELETE',
  })
}
export function characterVoice(data) {
  return request({
      url: `/api/v1/character/voice`,
      method: 'get',
      data
  })
}
