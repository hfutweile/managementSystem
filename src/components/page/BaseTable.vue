<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-cascades"></i> 简历列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>

                <!-- 条件筛选 -->
                <el-select v-model="select_sex" placeholder="筛选性别" class="handle-select mr10">
                    <el-option key="0" label="不限" value="不限"></el-option>
                    <el-option key="1" label="男" value="男"></el-option>
                    <el-option key="2" label="女" value="女"></el-option>
                </el-select>
                <el-select v-model="select_education" placeholder="筛选学历" class="handle-select mr10">
                    <el-option key="0" label="不限" value="不限"></el-option>
                    <el-option key="1" label="初中及以下" value="初中"></el-option>
                    <el-option key="2" label="高中" value="高中"></el-option>
                    <el-option key="3" label="本科" value="本科"></el-option>
                    <el-option key="4" label="硕士" value="硕士"></el-option>
                    <el-option key="5" label="博士" value="博士"></el-option>
                </el-select>
                <el-select v-model="select_age" placeholder="筛选年龄" class="handle-select mr10">
                    <el-option key="1" label="不限" value="不限"></el-option>
                    <el-option key="2" label="18-20" value="18-20"></el-option>
                    <el-option key="3" label="21-30" value="21-30"></el-option>
                    <el-option key="4" label="31-40" value="31-40"></el-option>
                    <el-option key="5" label="41-50" value="41-50"></el-option>
                    <el-option key="6" label="51-60" value="51-60"></el-option>
                    <el-option key="7" label="60以上" value="60以上"></el-option>
                </el-select>
                <el-select v-model="select_cate" placeholder="筛选省份" class="handle-select mr10">
                    <el-option key="0" label="不限" value="不限"></el-option>
                    <el-option key="1" label="广东省" value="广东省"></el-option>
                    <el-option key="2" label="湖南省" value="湖南省"></el-option>
                </el-select>
                <el-select v-model="select_industry" placeholder="筛选行业" class="handle-select mr10">
                    <el-option key="0" label="不限" value="不限"></el-option>
                    <el-option key="1" label="销售/客服/营销" value="销售/客服/营销"></el-option>
                    <el-option key="2" label="财务" value="财务"></el-option>
                    <el-option key="3" label="人力资源/行政后勤" value="人力资源/行政后勤"></el-option>
                    <el-option key="4" label="IT/互联网/通信" value="IT/互联网/通信"></el-option>
                    <el-option key="5" label="房地产/物业" value="房地产/物业"></el-option>
                    <el-option key="6" label="建筑" value="建筑"></el-option>
                    <el-option key="7" label="金融" value="金融"></el-option>
                    <el-option key="8" label="交通/物流" value="交通/物流"></el-option>
                    <el-option key="9" label="生产/制造" value="生产/制造"></el-option>
                    <el-option key="10" label="传媒/设计/推广" value="传媒/设计/推广"></el-option>
                    <el-option key="11" label="教育/翻译" value="教育/翻译"></el-option>
                    <el-option key="12" label="法律" value="法律"></el-option>
                    <el-option key="13" label="商场/服务/收银" value="商场/服务/收银"></el-option>
                    <el-option key="14" label="能源/环保/农业" value="能源/环保/农业"></el-option>
                    <el-option key="15" label="医药" value="医药"></el-option>
                    <el-option key="16" label="酒店/餐饮/快消" value="酒店/餐饮/快消"></el-option>
                    <el-option key="17" label="普工" value="普工"></el-option>
                    <el-option key="18" label="兼职/实习" value="兼职/实习"></el-option>
                    <el-option key="19" label="其他" value="其他"></el-option>
                </el-select>
                <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input>
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>

            <!-- 数据展示 -->
            <el-table :data="data" border class="table" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="resumeId" label="简历ID" sortable width="150">
                </el-table-column>
                <el-table-column prop="name" label="姓名" sortable width="150">
                </el-table-column>
                <el-table-column prop="tel" label="电话号码" width="120">
                </el-table-column>
                <el-table-column prop="hopePosition" label="期望岗位">
                </el-table-column>

                <!-- 数据操作框 -->
                <el-table-column label="操作" width="300" align="center">
                    <template slot-scope="scope">
                        <el-button type="text" icon="el-icon-view" @click="handleView(scope.$index, scope.row)">查看</el-button>
                        <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>

            </el-table>

            <!-- 翻页页脚 -->
            <div class="pagination">
                <el-pagination background @current-change="handleCurrentChange" layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="简历编号">
                    <el-input v-model="form.resumeId" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="form.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="form.tel" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="期望岗位">
                    <el-input v-model="form.hopePosition" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="联系结果">
                    <el-input v-model="form.contactResult"></el-input>
                </el-form-item>
                <el-form-item label="评价">
                    <el-input v-model="form.evaluate"></el-input>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input v-model="form.remake"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false" @close="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'basetable',
        data() {
            return {
                url: './static/vuetable1.json',
                tableData: [],
                cur_page: 1,
                multipleSelection: [],
                select_cate: '',
                select_sex: '',
                select_education:'',
                select_age:'',
                select_industry:'',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    resumeId:'',
                    name: '',
                    tel:'',
                    hopePosition:'',
                    contactResult: '',
                    evaluate: '',
                    remark:''
                },
                idx: -1
            }
        },
        created() {
            this.getData();
        },
        computed: {
            data() {
                return this.tableData.filter((d) => {
                    console.log(d);
                    let is_del = false;
                    for (let i = 0; i < this.del_list.length; i++) {
                        if (d.name === this.del_list[i].name) {
                            is_del = true;
                            break;
                        }
                    }
                    if (!is_del) {
                        if (d.name.indexOf(this.select_word) > -1) {
                            return d;
                        }
                    }
                })
            }
        },
        methods: {
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            // 获取 easy-mock 的模拟数据
            getData() {
                // 开发环境使用 easy-mock 数据，正式环境使用 json 文件
                if (process.env.NODE_ENV === 'development') {
                    this.url = 'https://easy-mock.com/mock/5bbeabb6f4b86703a7bef679/example/getResume';
                };
                this.url='https://easy-mock.com/mock/5bbeabb6f4b86703a7bef679/example/getResume';
                this.$axios.post(this.url, {
                    page: this.cur_page
                }).then((res) => {
                    this.tableData = res.data.list;
                })
                this.$axios.post(this.url,{}).then((res) => {
                    this.tableData = res.data.list;
                })
            },
            search() {
                this.is_search = true;
            },
            //数据显示的必须函数
            filterTag(value, row) {
                return row.tag === value;
            },

            //点击查看事件
            handleView(index,row){
                this.idx = index;
                const item = this.tableData[index];
                name=localStorage.getItem('ms_username');
                if(name=="admin")this.$router.push('/form');
                else{
                    this.$router.push('/resume');
                }
                //页面间传值
                localStorage.setItem('resumeId',item.resumeId);
            },

            //点击编辑事件
            handleEdit(index, row) {
                this.idx = index;
                const item = this.tableData[index];
                this.form = {
                    resumeId:item.resumeId,
                    tel:item.tel,
                    hopePosition:item.hopePosition,
                    name: item.name,
                }
                this.editVisible = true;
            },

            //点击删除事件
            handleDelete(index, row) {
                this.idx = index;
                name=localStorage.getItem('ms_username');
                if(name=="admin"){
                    this.delVisible = true;
                }
                else{
                    this.$message.error('您不具有删除简历权限！');
                }
            },
            delAll() {
                name=localStorage.getItem('ms_username');
                if(name=="admin"){
                    const length = this.multipleSelection.length;
                    let str = '';
                    this.del_list = this.del_list.concat(this.multipleSelection);
                    for (let i = 0; i < length; i++) {
                        str += this.multipleSelection[i].name + ' ';
                    }
                    this.$message.error('删除了' + str);
                    this.multipleSelection = [];
                }else{
                    this.$message.error('您不具有删除简历权限！');
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 保存编辑
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改 ${this.tableData[this.idx].name} 的数据`);
            },
            // 确定删除
            deleteRow(){
                this.tableData.splice(this.idx, 1);
                this.$message.success('删除成功');
                this.delVisible = false;
            }
        }
    }

</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
    .table{
        width: 100%;
        font-size: 14px;
    }
    .red{
        color: #ff0000;
    }
</style>
