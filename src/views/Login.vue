<template>
  <div style="
    height: 992px;
    width: 1915px;
    position: absolute;"
    >
    <!-- 顶栏 -->
    <el-container>
      <el-header class="top_Bar">
        <div class="left_Title">
          <img src="../assets/School_badge.png" style="margin-left: 20px;">
          <div class="left_Title_Text">
            <span id="title_Span_1">
              信息工程系
            </span>
            <span id="title_Span_2">
              学生管理系统
            </span>
          </div>
        </div>
        <div class="right_Title_Text">
        <span>
          <a href="https://www.zibotc.cn/xxgcx/index.htm">信息工程系官网</a>
        </span> 
        <span>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        </span>
        <span>
          反馈
        </span>
        </div>
      </el-header>
    </el-container>
    <!-- 主要区域 -->
    <el-main class="main_Areas">
      <img src="../assets/Login_left_bg.png" alt="" style="margin-left: 175px;">
      <div class='login_Form'>
        <!-- 切换老师学生登入 -->
        <div class="S_or_T">
          <div id="login_Student" @click = "changeStudent" :class="{active : S_or_T === 0 }">
            我是学生
          </div>
          <div id="login_Teacher" @click = "changeTeacher" :class="{active : S_or_T === 1}">
            我是老师
          </div>
        </div>
        <!-- 登入表单 -->
        <el-form  
        label-position='top' 
        hide-required-asterisk 
        size='large'
        :model="personal"
        :rules="rules"
        >
          <!-- 输入姓名 -->
          <el-form-item prop="userName">
            <el-input v-model="personal.userName" placeholder="请输入姓名" />
          </el-form-item>
          <!-- 输入密码 -->
          <el-form-item prop="passWord">
            <el-input v-model="personal.passWord" type="password" placeholder="请输入密码" show-password />
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item class="removal_Margin" prop="verification_Code">
            <el-input v-model="personal.verification_Code" placeholder="请输入验证码" style="text-align: center;"></el-input>
            <img :src="Verification_Code.message" alt="" @click = "get_Verification_Code()">
          </el-form-item>
          <!-- 记住密码和忘记密码 -->
          <div class="remember_Password">
            <el-checkbox>记住密码</el-checkbox>
            <el-link :underline="false">忘记密码</el-link>
          </div>
          <!-- 登入注册 -->
          <el-form-item style="margin-top: 15px;">
            <el-button style="width: 300px; height: 50px; font-size: 1.5em;" round > 登入 </el-button>
          </el-form-item>
          <el-form-item>
            <router-link to="/register" style="font-size: 1.5em; color: black;">注册</router-link>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <!-- 底栏 -->
    <el-footer class="bottom_Bar">
      <div class="bottom_Bar_text">
        <div style="margin-left: 60px ;">
          <div style="margin-bottom: 10px;">地址：张店区和平路38号</div>
          <div>办公室电话：0533-2778050</div>
        </div>
        <div style="text-align: center;"><a href="https://www.zibotc.cn/">学校官网</a></div>
      </div>
    </el-footer>
  </div>
</template>

<script setup lang="ts">
  import useLogin from '../Hooks/useLogin'
  import useVerification_Code from '@/Hooks/useVerification_Code';
  let { personal , Verification_Code , rules , S_or_T , get_Verification_Code , changeStudent , changeTeacher } = useLogin()
</script>

<style scoped lang="less">
// 顶栏样式
.el-container {
  height: 10%;
  background: url(../assets/Login_title_bg.png) no-repeat;
  background-size: cover;
  background-position: center;

  .top_Bar {
    padding-right: 100px;
    padding-left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    position: relative;

    .left_Title {
      width: 420px;
      height: 100%;
      background-color: #002fa7;
      display: flex;
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
    }
    .left_Title_Text {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;
      color: white;

      #left_Title_img {
        height: 100px;
      }

      #title_Span_1 {
        font-size: 40px;
        font-family: '三极行楷简体-粗';
      }

      #title_Span_2 {
        font-size: 28px;
        font-family: '三极行楷简体-粗';
      }
    }
    .right_Title_Text{
      font-size: 20px;
      a {
        color: black;
      }
    }
  }
}


// 主要区域样式
.main_Areas {
  height: 80%;
  background: url('../assets/Login_bg.png') no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  // 表单总格式
  .login_Form {
    min-width: 460px;
    min-height: 500px;
    background: white;
    margin-right: 12%;
    border-radius: 20px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.4);

    // 切换老师学生登入按钮的格式 
    .S_or_T {
      width: 100%;
      height: 60px;
      background: rgb(201, 201, 201);
      display: flex;
      align-items: center;
      text-align: center;
      font-size: 20px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      //我是学生按钮格式 
      #login_Student {
        width: 50%;
        line-height: 60px;
        border-top-left-radius: 20px;
      }

      //我是老师按钮格式 
      #login_Teacher {
        width: 50%;
        line-height: 60px;
        border-left: 1px solid black;
        border-top-right-radius: 20px;
      }
      // 点击切换样式
      .active {
        background-color: white;
        
      }
    }

    // 表单内部格式
    .el-form {
      margin-top: 40px;
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      // 输入框格式
      .el-input {
        text-align: center;
        font-size: 150%;
        width: 300px;
        height: 55px;
      }

      // 记住密码和忘记密码按钮样式
      .remember_Password {
        width: 100%;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 14px;
      }

      // 登录按钮样式
      .el-button {
        width: 300px;
        height: 50px;
        font-size: 1.5em;
        background-color: #2079ff;
        color: white;
      }

      // 用于去除margin
      .removal_Margin {
        margin: 0;
      }

      //验证码区域 
      .removal_Margin .el-input {
        width: 180px;
        height: 30px;
      }
      //验证码图片 
      .removal_Margin img {
        margin-left: 20px;
        width: 100px;
        height: 30px;
      }
    }
  }
}

// 底栏样式
.bottom_Bar {
  height: 10%;
  background: url(../assets/Login_title_bg.png) no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.12), 0 0 10px rgba(0, 0, 0, 0.04);
  .bottom_Bar_text {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      font-size: 24px;
      width: 400px;
      a {
        color: black;
      }
    }
  }
}
</style>
