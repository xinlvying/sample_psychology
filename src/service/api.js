/**
 * API接口
 */

import showToast from '../utils/toast';

// api
const baseApi = 'http://sxin.tech:8000/api/app/v1';
// const baseApi = 'http:/100.55.103.249:8000/api/app/v1';

const fetchApi = (url, options = {}) => {
  return fetch(url, options)
    .then(response => {
      return response.json();
    })
    .then(json => {
      // showToast(json.message);
      return json;
    })
    .catch(error => {
      showToast('网络错误');
      console.warn(error);
    });
};

// apis
export default class Api {
  // 获取短信验证码
  static getSms(login_phone) {
    return fetchApi(`${baseApi}/sms`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(login_phone)
    });
  }

  // 登录
  static login(loginInfo) {
    return fetchApi(`${baseApi}/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginInfo)
    });
  }

  // 获取轮播banner
  static getSwiperBanner(position) {
    // console.log(position)
    return fetchApi(`${baseApi}/banners/${position}`);
  }

  // 获取文章列表
  static getArticleList(page, category = undefined) {
    const queryParams = page ? `?page=${page}` : '';
    category = category ? `/category/${category}` : ''
    // console.log(page, category, `${baseApi}/articles${category}${queryParams}`)
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

  // 根据用户收藏获取文章类别
  static getUserCollection(user) {
    return fetchApi(`${baseApi}/articles/user/${user}`);
  }

  // 新增浏览记录
  static addReadingRecord(readingRecord) {
    return fetchApi(`${baseApi}/user-preferences/add-reading-record`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(readingRecord)
    });
  }

   // 新增收藏
   static addCollection(collection) {
    return fetchApi(`${baseApi}/user-preferences/add-collection`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection)
    });
  }

   // 删除收藏
   static deleteCollection(collection) {
    return fetchApi(`${baseApi}/user-preferences/delete-collection`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collection)
    });
  }

  // 获取文章详情
  static getArticleDetail(article_id) {
    return fetchApi(`${baseApi}/articles/${article_id}`);
  }

  // 获取当前周次
  static getCurrentWeek() {
    return fetchApi(`${baseApi}/terms/single`);
  }

  // 获取咨询师列表
  static getConsultantList(querys) {
    return fetchApi(`${baseApi}/consultants/app-query`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(querys)
    });
  }

  // 新增咨询预约记录
  static addConsultRecord(record) {
    return fetchApi(`${baseApi}/consult-record/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(record)
    })
  }

  // 根据时间查询咨询预约记录
  static queryConsultRecordByTime(time) {
    return fetchApi(`${baseApi}/consult-record/query-by-time/${time}`);
  }

  // 查询问题列表
  static queryQuestions(pagination) {
    return fetchApi(`${baseApi}/questions/app-query`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pagination)
    });
  }

  // 获取匿名问题详情
  static getQuestionDetail(id) {
    return fetchApi(`${baseApi}/questions/${id}`);
  }

  // 新增匿名问题
  static addQuestion(answer) {
    return fetchApi(`${baseApi}/questions/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answer)
    });
  }

  // 新增匿名问题
  static addAnswer(answer) {
    return fetchApi(`${baseApi}/answers/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answer)
    });
  }

  // 根据时间查询咨询预约记录
  // static queryConsultRecordByTime(time) {
  //   return fetchApi(`${baseApi}/questions/add`, {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(question)
  //   });  }

  // 新增匿名回答
  static addAnswer(answer) {
    return fetchApi(`${baseApi}/answers/add`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(answer)
    });
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