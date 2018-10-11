<template>
    <div class="login-wrap">
        <div class="ms-title">注册小麦HR后台管理系统</div>
        <div class="ms-login">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                用户名：
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username"></el-input>
                </el-form-item>
                密码：
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                确认密码：
                <el-form-item prop="passwordconfirm">
                    <el-input type="password" placeholder="password" v-model="ruleForm.passwordconfirm" @keyup.enter.native="submitForm('ruleForm')"></el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm('ruleForm')" style="width:68%">注册</el-button>
                    <router-link to="/login">
                        <el-button type="success" @click="gologin" style="width:30%">返回登录</el-button>
                    </router-link>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',
                    passwordconfirm:""
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    passwordconfirm: [
                        { required: true, message: '请输入相同密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if(this.ruleForm.password!=this.ruleForm.passwordconfirm){
                        console.log("两次输入密码不同！");
                        this.$message({
                            message: '两次输入密码不同',
                            type: 'warning'
                        });
                    }
                    else if (valid) {
                        this.$message({
                            message: '注册成功！',
                            type: 'success'
                        });
                        this.$router.push('/login');
                    } else {
                        /*请求后台加入用户数据ajax*/
                        console.log('error submit!!');
                        this.$message({
                            message: '注册失败！',
                            type: 'warning'
                        });
                    }
                });
            },
            gologin(){
                localStorage.removeItem('ms_username');
            }
        }
    }
</script>

<style scoped>
    .login-wrap{
        position: relative;
        width:100%;
        height:100%;
    }
    .ms-title{
        position: absolute;
        top:50%;
        width:100%;
        margin-top: -230px;
        text-align: center;
        font-size:30px;
        color: #fff;

    }
    .ms-login{
        position: absolute;
        left:50%;
        top:50%;
        width:300px;
        height:250px;
        margin:-150px 0 0 -190px;
        padding:40px;
        border-radius: 5px;
        background: #fff;
    }
    .login-btn{
        text-align: center;
    }
    .login-btn button{
        height:36px;
    }
</style>