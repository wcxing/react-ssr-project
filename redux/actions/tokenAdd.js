export default (param, isAccountCode) =>{
  const token = JSON.parse(sessionStorage.getItem('token')) || ''
  let { accountCode, appCode } = JSON.parse(sessionStorage.getItem('accountInfo')) || {}
  let params = {
    accountCode,
    ...param,
    appCode, //:'shfw0001'
    token
  }
  if(isAccountCode){
    delete params.accountCode
  }
  return params
}