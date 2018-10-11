<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 简历查看</el-breadcrumb-item>
                <el-breadcrumb-item>简历操作</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">

                    <el-form-item label="简历文件">
                        <a href='./static/vuetable.json' target="_blank">刘伟乐的简历</a>
                    </el-form-item>

                    <el-form-item label="标签">
                        <el-input v-model="form.label" :disabled=true placeholder="优秀"></el-input>
                    </el-form-item>

                    <el-form-item label="姓名">
                        <el-input v-model="form.name" :disabled=true placeholder="刘伟"></el-input>
                    </el-form-item>

                    <el-form-item label="性别">
                        <el-input v-model="form.sex" :disabled=true placeholder="男"></el-input>
                    </el-form-item>

                    <el-form-item label="出生年月">
                        <el-input v-model="form.birthday" :disabled=true placeholder="1994-03-25"></el-input>
                    </el-form-item>

                    <el-form-item label="年龄">
                        <el-input v-model="form.age" :disabled=true placeholder="24"></el-input>
                    </el-form-item>

                    <el-form-item label="籍贯">
                        <el-input v-model="form.addr" :disabled=true placeholder="安徽蚌埠"></el-input>
                    </el-form-item>

                    <el-form-item label="民族">
                        <el-input v-model="form.group" :disabled=true placeholder="汉族"></el-input>
                    </el-form-item>

                    <el-form-item label="政治面貌">
                        <el-input v-model="form.pol" :disabled=true placeholder="群众"></el-input>
                    </el-form-item>

                    <el-form-item label="婚姻状态">
                        <el-input v-model="form.marry" :disabled=true placeholder="未婚"></el-input>
                    </el-form-item>

                    <el-form-item label="期望工作地点">
                        <el-input v-model="form.hopePosition" :disabled=true placeholder="北京"></el-input>
                    </el-form-item>

                    <el-form-item label="期望薪酬">
                        <el-input v-model="form.hopeSalary" :disabled=true placeholder="12000"></el-input>
                    </el-form-item>

                    <el-form-item label="学历">
                        <el-input v-model="form.education" :disabled=true placeholder="硕士"></el-input>
                    </el-form-item>

                    <el-form-item label="毕业院校">
                        <el-input v-model="form.school" :disabled=true placeholder="中国科学院大学"></el-input>
                    </el-form-item>

                    <el-form-item label="专业">
                        <el-input v-model="form.major" :disabled=true placeholder="计算机技术"></el-input>
                    </el-form-item>

                    <el-form-item label="工作经验">
                        <el-input v-model="form.experience" :disabled=true placeholder="一年"></el-input>
                    </el-form-item>

                    <el-form-item label="是否在职">
                        <el-input v-model="form.onJob" :disabled=true placeholder="在职"></el-input>
                    </el-form-item>

                    <el-form-item label="行业">
                        <el-input v-model="form.industry" :disabled=true placeholder="计算机/互联网"></el-input>
                    </el-form-item>

                    <el-form-item label="最近工作单位">
                        <el-input v-model="form.company" :disabled=true placeholder="华为"></el-input>
                    </el-form-item>

                    <el-form-item label="最近岗位">
                        <el-input v-model="form.position" :disabled=true placeholder="云计算开发工程师"></el-input>
                    </el-form-item>

                    <el-form-item label="联系电话">
                        <el-input v-model="form.tel" :disabled=true placeholder="17605608458"></el-input>
                    </el-form-item>

                    <el-form-item label="微信/QQ">
                        <el-input v-model="form.wechat" :disabled=true placeholder="17605608458/1805859320"></el-input>
                    </el-form-item>
                    <el-form-item label="信息源">
                        <el-input v-model="form.source" :disabled=true placeholder="牛客网"></el-input>
                    </el-form-item>

                    <el-form-item label="推荐人">
                        <el-input v-model="form.referee" :disabled=true placeholder="伯乐"></el-input>
                    </el-form-item>

                    <el-form-item label="联系结果">
                        <el-input v-model="form.contratResult"></el-input>
                    </el-form-item>
                    <el-form-item label="评价">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="备注">
                        <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">表单提交</el-button>
                        <el-button @click="noSubmit">取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'baseform',
        data: function(){
            return {
                form: {
                    
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
                this.$router.go(-1);
            },
            noSubmit() {
                this.$message.warning('未保存！');
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .content-title{
        font-weight: 400;
        line-height: 50px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
    }
</style>
