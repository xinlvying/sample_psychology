/**
 * API接口
 */

import showToast from '../utils/toast';

// api
const baseApi = 'http://192.168.2.1:8000/api/app/v1';

const fetchApi = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(json => {
      // showToast(json.message);
      console.log(json)
      return json;
    })
    .catch(error => {
      showToast('网络错误');
      console.warn(error);
    });
};

// apis
export default class Api {
  // 获取轮播banner
  static getSwiperBanner(position) {
    console.log(position)
    return fetchApi(`${baseApi}/banners/${position}`);
  }

  // 获取文章列表
  static getArticleList(page, category = undefined) {
    const queryParams = page ? `?page=${page}` : '';
    category = category ? `/category/${category}` : ''
    console.log(page, category, `${baseApi}/articles${category}${queryParams}`)
    return fetchApi(`${baseApi}/articles${category}${queryParams}`);
  }

  // 获取文章类别
  static getArticleCategories() {
    return fetchApi(`${baseApi}/categories`);
  }

  // 根据code获取文章类别
  static getSingleArticleCategory(code) {
    return fetchApi(`${baseApi}/categories/${code}`);
  }

  // 获取文章详情
  static getArticleDetail(article_id) {
    return fetchApi(`${baseApi}/articles/${article_id}`);
  }

  // // 给文章或主站点赞
  // static likeArticleOrSite(like_data) {
  //   return fetchApi(`${baseApi}/like`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(like_data)
  //   })
  // }

  // // 获取用户信息
  // static getUserInfo() {
  //   return fetchApi(`${baseApi}/auth`)
  // }
}