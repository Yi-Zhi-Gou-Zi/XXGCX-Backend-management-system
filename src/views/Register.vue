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
          <img src="../assets/School_badge.png" style="margin-left: 20px;height: 100%;">
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
      <div style="position: absolute;height: 800px;width: 1200px;">
        <!-- 背景图(电脑) -->
        <img src="../assets/Register_PC.png" alt="" id="main_Areas_photo_PC">
        <!-- 背景图(边框) -->
        <img src="../assets/Register_border.png" alt="" id="main_Areas_photo_border">
        <!-- 注册表单 -->
        <el-form 
        class="register_Form"
        :model="register_information"
        :rules="rules"
        >
          <!-- 姓名 -->
          <el-form-item prop="userName">
            <el-input v-model="register_information.userName" placeholder="请输入姓名" />
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="passWord">
            <el-input v-model="register_information.passWord" type="password" placeholder="请输入密码" show-password/>
          </el-form-item>
          <!-- 工号学号 -->
          <el-form-item prop="personal_Id">
            <el-input v-model="register_information.personal_Id" placeholder="请输入工号/学号"/>
          </el-form-item>
          <!-- 验证码 -->
          <el-form-item class="removal_Margin" prop="verification_Code">
            <el-input v-model="register_information.verification_Code" placeholder="请输入验证码"/>
            <img :src="Verification_Code.message" alt="" @click="get_Verification_Code()">
          </el-form-item>
          <el-button style="width: 280px; height: 50px; background: rgb(78, 195, 241);color: white; font-size: 28px;"
            round> 注册 </el-button>
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
import useLogin from '../Hooks/useRegister'
let { rules , register_information , Verification_Code, get_Verification_Code } = useLogin()
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

  // 电脑图片样式
  #main_Areas_photo_PC {
    width: 450px;
    height: 500px;
    position: absolute;
    z-index: 2;
    left: 40%;
    top: 13%;
  }

  // 边框图片样式
  #main_Areas_photo_border {
    width: 700px;
    height: 500px;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 15%;
  }

  // 注册表单样式
  .register_Form {  
    position: absolute;
    z-index: 3;
    left: 80%;
    bottom: 33%;
  }

  // 表单内部样式
  .el-form {
    width: 280px;

    .el-input {
      height: 50px;
    }

    //验证码区域 
    .removal_Margin .el-input {
      width: 130px;
    }

    //验证码图片 
    .removal_Margin img {
      margin-left: 20px;
      width: 130px;
      height: 50px;
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
}</style>
