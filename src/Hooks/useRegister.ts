import { ref, onMounted } from 'vue'
import axios from 'axios'
export default function () {
  // 创建用于记录注册信息（姓名，密码，工号，验证码）
  const register_information = ref({
    userName: '',
    passWord: '',
    personal_Id: '',
    verification_Code: ''
  })
  // 验证码图片切换
  // 创建一个变量存储验证码文件
  const Verification_Code = ref({
    code: 0,
    message: ''
  }
  )
  async function get_Verification_Code() {
    // 请求并储存
    const { data: { message } } = await axios.get('https://dog.ceo/api/breeds/image/random')
    Verification_Code.value.code = Math.floor(1000 + (9999 - 1000) * Math.random())
    Verification_Code.value.message = message;
    console.log(Verification_Code.value);
  }
  // 验证码验证规则
  const Check_Verification_Code = (rule: any, value: any, callback: any) => {
    if (value != Verification_Code.value.code) {
      callback(new Error('请输入正确的验证码'))
    }
  }
  // 登录的规则验证，减轻后端接口压力
  const rules = {
    userName: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
      { pattern : /^[\u4e00-\u9fa5]{0,}$/ , message : '请输入正确的姓名' , trigger: 'blur'}
    ],
    passWord: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$/, message: '密码必须是6-15位非空字符', trigger: 'blur' }
    ],
    personal_Id: [
      { required: true, message: '请输入工号/学号', trigger: 'blur'},
      { pattern: /^(?:\d{4}|\d{8})$/ , message: '请输入正确的工号/学号' , trigger: 'blur' }
    ],
    verification_Code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
      {validator: Check_Verification_Code ,trigger : 'blur'}
    ]
  }
  // 初始化设置
  onMounted(() => {
    // 初始化请求一张验证码
    get_Verification_Code()
  })
  // 暴露出去
  return { rules, register_information, Verification_Code, get_Verification_Code }
}