

//获取按钮权限
String.prototype.getButton = function (path) {
  let menu = JSON.parse(sessionStorage.getItem('menu'))
  let buttons=[]
  let menus = menu.filter((i)=>{
    if(isChild(i.children, path)[0] && isChild(i.children, path)[0].menuPath == path){
      buttons = isChild(i.children, path)[0].buttons
    }
  })
  return buttons.isButton()
}

//是否显示按钮
Array.prototype.isButton = function () {
  let state={
    add:false,
    remove:false,
    update:false,
    detail:false,
    disable:false,
    enable:false
  }
  this.map(item=>{
    if (item.buttonCode =='6323C01605B111E886CDFA163EA29CF8'){
      state.add=true
    } else if (item.buttonCode =='60CADC0005B111E886CDFA163EA29C10'){
      state.remove=true
    } else if (item.buttonCode =='63BE244305B111E886CDFA163EA29CF8'){
      state.update=true
    } else if (item.buttonCode =='645A718605B111E886CDFA163EA29CF8'){
      state.detail=true
    } else if (item.buttonCode =='64CCC02C05B111E886CDFA163EA29CF8'){
      state.disable=true
    } else if (item.buttonCode =='64A471C505B111E886CDFA163EA29CF8'){
      state.enable=true
    }
  })
  return state
}

function isChild (child, path){
  if (child && child.children){
    return isChild(child.children, path)
  }else{
    return child ? child.filter((item)=>{
      return item.menuPath==path
    }) : []
  }
}




//补0
function add0(m){
  return m<10?'0'+m:m
}

//时间戳转时间
export function dateTurn(dateTime, isShowDetail) {
  let time = new Date(dateTime)
  let y = time.getFullYear()
  let m = time.getMonth()+1
  let d = time.getDate()
  let h = time.getHours()
  let mm = time.getMinutes()
  let s = time.getSeconds()
  if (isShowDetail) {
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s)
  }
  return y + '-' + add0(m) + '-' + add0(d)
}
// 截取日期字符串（去小数点）
export function sliceDateString(str) {
  let i = str.indexOf('.'),
    newStr = ''
  if (i !== -1) {
    newStr = str.slice(0, i)
    return newStr
  }
  return str
}
//用户类型
export function userType(state) {
  let text=null
  switch (state){
    case 3:
      text='应用用户'
      break
    default:
      text = ''
      break
  }
  return text
}
//账号状态
export function userState(state) {
  let text=null
  switch (state){
    case 1:
      text='启用'
      break
    case -1:
      text='停用'
      break
    case -9:
      text = '删除帐号'
      break
    default:
      text = ''
      break
  }
  return text
}

// 证件类型
export function certificateTypes(value) {
  switch(Number(value)) {
    case 800:
      return '身份证'
    default:
      return ''
  }
}
// 性别
export function sexFilter(value){
  switch(Number(value)) {
    case 1:
      return '男'
    case 2:
      return '女'
    default:
      return ''
  }
}
// 用户状态
export function userStateFilter(value) {
  switch(Number(value)){
    case 0:
      return '失效'
    case 1:
      return '生效'
    case 2:
      return '已销户'
    default:
      return ''
  }
}
// 账户状态
export function accountStateFilter(value){
  switch(Number(value)){
    case 0:
      return '失效'
    case 1:
      return '生效'
    default:
      return ''
  }
}
// 账号类型
export function accoutTypeFilter(value) {
  switch(Number(value)){
    case 10000:
      return '融数平台账户'
    case 10001:
      return '主账户'
    case 10002:
      return '子账户'
    default:
      return value
  }
}
// 银行账号类型
export function bankCardTypeFilter(value) {
  switch(Number(value)){
    case 1:
      return '借记卡'
    case 2:
      return '存折'
    case 3:
      return '准贷记卡'
    case 4:
      return '贷记卡'
    case 5:
      return '预付卡'
    default:
      return value
  }
}
// 卡状态
export function cardStateFilter(state){
  switch(Number(state)){
    case 0:
      return '失效'
    case 1:
      return '生效'
    case 2:
      return '待审核'
    case 3:
      return '审核中'
    case 4:
      return '审核失败'
    default:
      return state
  }
}
export function orderType(state) {
  let text=null
  switch (state){
    case '10':
      text='代收'
      break
    case '20':
      text='代付'
      break
    case '30':
      text = '充值'
      break
    case '40':
      text = '转账'
      break
    case 10:
      text='代收'
      break
    case 20:
      text='代付'
      break
    case 30:
      text = '充值'
      break
    case 40:
      text = '转账'
      break
    default:
      text = ''
      break
  }
  return text
}
export function status(state) {
  let text=null
  switch (state){
    case '0':
      text='失效'
      break
    case '1':
      text='初始状态'
      break
    case '2':
      text = '处理中'
      break
    case '8':
      text = '交易失败'
      break
    case '9':
      text = '交易成功'
      break
    default:
      text = ''
      break
  }
  return text
}
export function Fen2Yuan( num ) {
  if ( typeof num !== 'number' || isNaN( num ) ) return null
  return ( num / 100 ).toFixed( 2 )
}