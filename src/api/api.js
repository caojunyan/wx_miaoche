import axios from './httpConfig';
import qs from 'qs';


// 用户登录
export const getAdmin=(_this,params)=>{
  return axios.post('/authorizations',params).then(function(res){
    localStorage.setItem('user_name', params.email);
    localStorage.setItem('user_id', res.data.data.id);
    localStorage.setItem('user_token', res.data.data.token);
    return res;
  })
}

// 用户信息
export const getUser=(_this)=>{
  return axios.get('/user').then(function(res){
    return res
  })
}

// 获取业务员
export const getDepartmentInfos=(_this)=>{
  return axios.get('https://rbac.jiahaichuang.com/api/departmentInfos').then(res=>{
    return res
  })
}
// 业务部添加客户
export const addCustomer=(_this,data)=>{
  return axios.post('/customers',data).then(function(res){
    return res
  })
}

// 客户列表
export const clientList=(_this)=>{
  return axios.get('/customers').then(res=>{
    return res
  })
}
// 逾期客户
export const timeOut=(_this)=>{
  return axios.get('/repaymentOrders?include=overdue').then(res=>{
    return res
  })
}
// 缺件客户
export const lack=(_this)=>{
  return axios.get('/repaymentOrders?include=abnormal').then(res=>{
    return res
  })
}
