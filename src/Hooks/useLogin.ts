// 导包
import { ref, onMounted } from 'vue'
import axios from 'axios'
export default function () {
  // 用于登录时记录个人信息（姓名，密码，验证码）
  const personal = ref({
    userName: '',
    passWord: '',
    verification_Code: ''
  })
  const Verification_Code = ref({
    code: 0,
    message: ''
  })
  console.log(Verification_Code);
  async function get_Verification_Code() {
    // 请求并储存
    const { data: { message } } = await axios.get('https://dog.ceo/api/breeds/image/random')
    Verification_Code.value.code = Math.floor(1000 + (9999 - 1000) * Math.random())
    Verification_Code.value.message = message;
    // console.log(Verification_Code.value);
  }
    // 创建用于验证码验证的自定义规则
    const Check_Verification_Code = (rule: any, value: any, callback: any) => {
      if (value != Verification_Code.value.code) {
        callback(new Error('请输入正确的验证码'))
      }
    }
  // 登录的规则验证，减轻后端接口压力
  const rules = {
    userName: [
      { required: true, message: '请输入姓名', trigger: 'blur' },
    ],
    passWord: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { pattern: '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,}$', message: '密码必须是6-15位非空字符', trigger: 'blur' }
    ],
    verification_Code: [
      { required: true, message: '请输入验证码', trigger: 'blur' },
      { validator: Check_Verification_Code ,trigger : 'blur'}
    ]
  }
  // 用于判断是老师还是学生（0是学生登录，1是老师登录）
  const S_or_T = ref(0)
  // 切换为学生的方法
  function changeStudent() {
    S_or_T.value = 0
  }
  // 切换为老师的方法
  function changeTeacher() {
    S_or_T.value = 1
  }
      // 初始化设置
      onMounted(() => {
        // 初始化请求一张验证码
        get_Verification_Code()
      })
  // 暴露出去
  return { personal, Verification_Code ,rules, S_or_T, get_Verification_Code , changeStudent, changeTeacher }
}