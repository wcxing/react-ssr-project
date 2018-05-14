import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from 'next/link'
import { Spin } from 'antd'
import '../components/login/index.css'


const propTypes = {
  user: PropTypes.object,
  loggingIn: PropTypes.bool,
  loginErrors: PropTypes.string
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      name: '',
      password: '',
      validateCode: '',
      imageLoading: true,
      nameError: '',
      passwordError: '',
      validationMsg: '',
      codeIMG: '',
      closeEye: true
    }
  }
  // 使用 getInitialProps 进行初始化
  static async getInitialProps ({ req }) { // 该方法执行于服务端
    const codeIMG = await this.prototype.getCodeURL()
    return {
      codeIMG
    }
  }

  componentDidMount() {
    console.log('didmount==', this.props)
  }
  componentWillReceiveProps(nextProps) {
    const { user } = nextProps
    if(user){
      if(user.isSuccess) {
        sessionStorage.setItem('accountInfo', JSON.stringify(user.accountInfo))
        sessionStorage.setItem('token', JSON.stringify(user.token))
        this.props.history.replace('/transaction/search')
      } else{
        this.setState({
          validationMsg:user.retmsg
        })
      }
    }
    this.setState({
      loading:nextProps.loggingIn
    })
  }

  //获取验证码
  getCode(){
    console.log('dian ji 验证码')
    this.getCodeURL()
  }
  getCodeURL(){
    let state=Date.now()
    // sessionStorage.setItem('state', state)
    // this.setState({
    //   codeIMG:'/merchantplatform/validateCode?appCode=shfw0001&state='+state
    // })
    // return 'http://localhost:3000/merchantplatform/validateCode?appCode=shfw0001&state=' + state
    return '/merchantplatform/validateCode?appCode=shfw0001&state=' + state
  }
  //判断验证码是否加载完毕
  handleImageLoaded() {
    this.setState({ imageLoading: false })
  }
  handleName = (e) => {
    let value = e.target.value
    let error = ''
    if (value.length < 5) {
      error = '请输入正确的账号！'
    }
    this.setState({
      name: value,
      nameError: error,
      validationMsg: error
    })
  }
  handlePassword = (e) => {
    let value = e.target.value
    let error = ''
    if (value.length < 5) {
      error = '请输入正确的密码！'
    }
    this.setState({
      password: value,
      passwordError: error,
      validationMsg: error
    })
  }
  handleCode = (e) => {
    let value = e.target.value
    let error = ''
    if (value.length < 4) {
      error = '请输入正确的验证码！'
    }
    this.setState({
      validateCode: value,
      codeError: error,
      validationMsg: error
    })
  }
  clearName = () => {
    this.setState({
      name: ''
    })
  }
  isCloseEye = () => {
    let isEye = this.state.closeEye
    this.setState({
      closeEye: !isEye
    })
  }
  loginSubmit = () => {
    const loginParam={
      accountName: this.state.name,
      accountPw: this.state.password,
      validateCode: this.state.validateCode,
      appCode: 'shfw0001',
      state: sessionStorage.getItem('state')
    }
    this.setState({
      loading: true
    })
    this.props.login(loginParam)

  }

  render() {
    console.log('4444render', this.props)
    return (
      <div className="content login-container">
        <div className="login-wapper">
          <div className="login-header">
            <img src='/static/images/applogo.png' />
          </div>
          <div className="login-content">
            <div className="login-box">
              <div className="login-content-title">
                <h3>登录</h3>
              </div>
              <div className={this.state.nameError ? 'login-form  error-active' : 'login-form'}>
                <div className="form-group-item">
                  <label className="login-label width68">用户名：</label>
                  <input className="no-border login-input width245 pr35" type="text" maxLength="16" placeholder="邮箱/手机号/用户名" name='intro' id='intro' value={this.state.name} onChange={this.handleName} />
                  <div className="login-bottom-line" />
                  <i className="rsjf-icon rsjf-icon-input-close" onClick={this.clearName} />
                </div>
              </div>
              <div className={this.state.passwordError ? 'login-form  error-active' : 'login-form'}>
                <div className="form-group-item">
                  <label className="login-label width68">密码：</label>
                  <input className="no-border .input login-input width245 pr35" maxLength="18" type={this.state.closeEye ? 'password' : 'text'} placeholder="8-18位的字母和数字组合" name='password' id='password' value={this.state.password} onChange={this.handlePassword} />
                  <div className="login-bottom-line"></div>
                  <i className={this.state.closeEye ? 'rsjf-icon rsjf-icon-input-close-eyes' : 'rsjf-icon rsjf-icon-input-close-eyes active'} onClick={this.isCloseEye} />
                </div>
              </div>
              <Spin spinning={this.state.imageLoading} tip='验证码加载中'>
                <div className={this.state.codeError ? 'mb0 error-active' : 'mb0'}>
                  <div className="form-group-item">
                    <label className="login-label width68">验证码：</label>
                    <input className="no-border login-input width245 pr35" type="text" maxLength="4" placeholder="请输入验证码" name='code' id='code' value={this.state.code} onChange={this.handleCode} /><div className="login-bottom-line"></div>
                    <img
                      onClick={() => { this.getCode() }}
                      onLoad={this.handleImageLoaded.bind(this)}
                      className="login-img" src={this.props.codeIMG} />
                  </div>
                </div>
              </Spin>
              <div className="row">
                {this.state.validationMsg ? <div className="rsjf-input-error-info position-absolute col-lg-12 error-info-container ">
                  <i className="rsjf-icon error-close-icon"></i>
                  <span>{this.state.validationMsg}</span>
                </div> : null}
              </div>
              <div className="login-button-container">
                <button className="rsjf-btn rsjf-btn-primary rsjf-btn-lg  col-lg-12 col-md-12 col-sm-12 col-xs-12" disabled={this.state.loading} onClick={this.loginSubmit}>
                  {this.state.loading ? '登陆中...' : '登陆'}
                </button>
              </div>
              <div className="text-right login-link">
                <Link href="/forget/">忘记密码？</Link>
              </div>
            </div>
          </div>
          <div className="login-footer text-center">
            <span className="login-copyright">Copyright©2015 融数金服 辽ICP备15009643号</span>
            <span className="login-tel hide">客服电话:400-000-0000</span>
            <span className="login-work-time hide">周一至周五：9：00 - 20：00</span>
          </div>
        </div>
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   const { auth } = state
//   if (auth.user) {
//     return {
//       user: auth.user,
//       loggingIn: auth.loggingIn,
//       loginErrors: ''
//     }
//   }
//   return {
//     user: null,
//     loggingIn: auth.loggingIn,
//     loginErrors: auth.loginErrors
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     login: bindActionCreators(login, dispatch)
//   }
// }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
// export default connect(mapStateToProps, mapDispatchToProps)(Login)
export default Login
