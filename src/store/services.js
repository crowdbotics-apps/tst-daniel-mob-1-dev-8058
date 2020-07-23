import axios from "axios"
const tstdanielmob1API = axios.create({
  baseURL: "https://tst-daniel-mob-1-dev-8058.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return tstdanielmob1API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return tstdanielmob1API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return tstdanielmob1API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return tstdanielmob1API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return tstdanielmob1API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return tstdanielmob1API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return tstdanielmob1API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return tstdanielmob1API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return tstdanielmob1API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return tstdanielmob1API.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return tstdanielmob1API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return tstdanielmob1API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return tstdanielmob1API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return tstdanielmob1API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return tstdanielmob1API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return tstdanielmob1API.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return tstdanielmob1API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return tstdanielmob1API.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return tstdanielmob1API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return tstdanielmob1API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return tstdanielmob1API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
