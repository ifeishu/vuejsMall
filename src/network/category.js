import axios from './axios'


export function getCategory() {
  return axios({
    url: '/api/v1/category'
  })
}

export function getSubcategory(maitKey) {
  return axios({
    url: '/api/v1/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryDetail(miniWallkey, type) {
  return axios({
    url: '/api/v1/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}
