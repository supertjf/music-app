// js-cookie是一个简单的，轻量级的处理cookies的js API
import Cookies from 'js-cookie'

export const getCookie = (name) => {
  return Cookies.get(name)
}

export const setCookie = (name, value) => {
  if (typeof value !== 'string') {
    return Cookies.set(name, JSON.stringify(value))
  } else {
    return Cookies.set(name, value)
  }
}

export const removeCookie = (name) => {
  return Cookies.remove(name)
}

export const getTicket = () => {
  return Cookies.get('ticket')
}

export const getAccountId = () => {
  return Cookies.get('AccountId')
}

export const getAccountName = () => {
  return Cookies.get('AccountName')
}
