<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-date"></i> 简历编辑</el-breadcrumb-item>
                <el-breadcrumb-item>简历操作</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="content-title">简历上传</div>
                <el-upload
                    class="upload-demo"
                    drag
                    action="/api/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将简历拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">支持上传jpg/png/pdf/doc文件，且不超过500kb</div>
                </el-upload>
            </div>
            <br>
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="标签">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="行业">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="jd" label="酒店" value="bbk"></el-option>
                            <el-option key="cy" label="餐饮" value="xtc"></el-option>
                            <el-option key="kx" label="快消" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="岗位">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="form.region" placeholder="请选择">
                            <el-option key="f" label="男" value="bbk"></el-option>
                            <el-option key="m" label="女" value="xtc"></el-option>
                            <el-option key="wz" label="未知" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="出生年月">
                        <el-col :span="11">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="籍贯">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="民族">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="政治面貌">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="婚姻状态">
                        <el-radio-group v-model="form.resource">
                            <el-radio label="未婚"></el-radio>
                            <el-radio label="已婚"></el-radio>
                            <el-radio label="离异"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="期望工作地点">
                        <el-cascader :options="options" v-model="form.options"></el-cascader>
                    </el-form-item>
                    <el-form-item label="期望薪酬">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="学历">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="毕业院校">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="专业">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="工作经验">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="是否在职">
                        <el-switch v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="最近工作单位">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="最近岗位">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="联系电话">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="微信/QQ">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="信息源">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="推荐人">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="联系结果">
                        <el-input v-model="form.name"></el-input>
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
                options:[
                    {
                        value: 'hunan',
                        label: '湖南省',
                        children: [
                            {
                                value: 'changsha',
                                label: '长沙市',
                                children: [
                                    {
                                        value: 'yuelu',
                                        label: '岳麓区'
                                    },
                                    {
                                        value: 'furong',
                                        label: '芙蓉区'
                                    },
                                    {
                                        value: 'tianxin',
                                        label: '天心区'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: true,
                    type: ['步步高'],
                    resource: '小天才',
                    desc: '',
                    options: []
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            },
            noSubmit() {
                this.$message.warning('未保存！');
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
