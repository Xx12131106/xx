<template>
  <div style="height: 100%">
    <div style="color: red;">
      多行编辑、保存功能：1、可增加编辑行2、可单条保存，也可批量保存3、实现了单条保存验证和批量保存验证4、实现了两个下拉框的级联互动功能
    </div>
    <el-button
        type="success"
        size="small"
        icon="el-icon-circle-check-outline"
        @click="saveAll"
    >
      批量保存
    </el-button>
    <el-form :model="form" ref="form">
      <el-table :data="form.tableData" border stripe>
        <el-table-column label="输入框">
          <template slot-scope="{ row,$index }">
            <template v-if="row.edit">
              <el-form-item :prop="'tableData.' + $index + '.input'"
                            :rules="{required: true, message: '域名不能为空', trigger: 'change'}">
                <el-input v-model="row.input" class="edit-input" size="small"/>
              </el-form-item>
            </template>
            <span v-else>{{ row.input }}</span>
          </template>
        </el-table-column>
        <el-table-column label="食物类型">
          <template slot-scope="{ row,$index }">
            <template v-if="row.edit">
              <el-form-item :prop="'tableData.' + $index + '.foodType'"
                            :rules="{required: true, message: '食物类型不能为空', trigger: 'change'}">
              <el-select v-model="row.foodType" clearable filterable @change="foodTypeChange(row,$index)">
                <el-option
                    v-for="item in foodTypeOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
              </el-select>
              </el-form-item>
            </template>
            <span v-else>{{ row.foodType | typeFilter(foodTypeOption) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="食物">
          <template slot-scope="{ row }">
            <template v-if="row.edit">
              <el-select v-model="row.select" clearable filterable>
                <!--如果父下拉框有值，则根据父下拉框的值筛选子下拉框中的值，否则子下拉框显示全部值-->
                <el-option
                    v-for="item in (row.foodType ? inetSelectOptionsComputed[row.foodType] : inetSelectOptions)"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
              </el-select>
            </template>
            <span v-else>{{ row.select | typeFilter(selectOptions) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="时间框">
          <template slot-scope="{ row }">
            <template v-if="row.edit">
              <el-date-picker
                  v-model="row.time"
                  placeholder="任意时间点"
                  value-format="yyyy-MM-dd"
              >
              </el-date-picker>
            </template>
            <span v-else>{{ row.time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作栏">
          <template slot-scope="{ row, $index }">

            <el-button
                v-if="row.edit"
                type="text"
                size="mini"
                icon="el-icon-check"
                @click="toSaveSingleRow(row, $index)"
            >
              完成
            </el-button>
            <el-button
                v-else
                type="text"
                size="mini"
                icon="el-icon-edit"
                @click="row.edit = !row.edit"
            >
              编辑
            </el-button>
            <el-button
                type="text"
                size="mini"
                icon="el-icon-plus"
                @click="addRow($index)"
            >
              新增
            </el-button>
            <el-button
                type="text"
                size="mini"
                icon="el-icon-minus"
                @click="removeRow($index)"
            >
              删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      // 新增时默认数据
      defaultData: {
        foodType: "",
        input: "",
        select: "",
        time: "",
        edit: true,
      },
      form:{
        // 表格数据
        tableData: [
          {
            foodType: "1",
            input: "12",
            select: "1",
            time: "2022-08-22",
            edit: false,
          },
        ],
      },
      foodTypeOption: [
        {
          value: "1",
          label: "饮料",
        },
        {
          value: "2",
          label: "食品",
        },
        {
          value: "3",
          label: "水果",
        },
      ],
      // 下拉数据
      inetSelectOptions: [
        {
          pvalue: "2",
          value: "1",
          label: "黄金糕",
        },
        {
          pvalue: "2",
          value: "2",
          label: "双皮奶",
        },
        {
          pvalue: "2",
          value: "3",
          label: "蚵仔煎",
        },
        {
          pvalue: "2",
          value: "4",
          label: "龙须面",
        },
        {
          pvalue: "2",
          value: "5",
          label: "北京烤鸭",
        },
        {
          pvalue: "1",
          value: "6",
          label: "可口可乐",
        },
        {
          pvalue: "1",
          value: "7",
          label: "百事可乐",
        },
      ],
      // 下拉数据
      selectOptions: [],
    };
  },
  filters: {
    // 数据类型过滤器
    typeFilter(val, data) {
      //return (data || []).find((item) => item.value == val)?.label;
      return (data || []).find((item) => item.value == val) ? (data || []).find((item) => item.value == val).label : '--';

    },
  },
  computed:{
    //实现子下拉框随着父下拉框数据变更后的数据范围的动态计算
    inetSelectOptionsComputed(){
      //{ass:[]}
      let obj = this.inetSelectOptions.reduce((t,i) => {
        if(t[i.pvalue]) t[i.pvalue].push(i)
        else t[i.pvalue] = [i]
        return t
      },{})

      return obj
    }
  },
  methods: {
    /**
     * @author: ddhhh
     * @param {*} index 当前行索引
     * @return {*}
     * @description: 新增行
     * @Date: 2022-08-22 15:48:11
     */
    addRow(index) {
      this.form.tableData.splice(index + 1, 0, {...this.defaultData});
    },
    /**
     * @author: ddhhh
     * @param {*} index 当前行索引
     * @return {*}
     * @description: 删除行
     * @Date: 2022-08-22 15:48:25
     */
    removeRow(index) {
      this.form.tableData.splice(index, 1);
    },

    /**
     * 批量保存方法
     */
    saveAll() {
      this.$refs["form"].validate((valid) => {
        let editData = this.form.tableData.filter((item) => {
          return item.edit == true;
        });
        console.log(editData);
      });

    },
    /**
     * 食物类型值改变时，实现与食物下拉框的级联互动
     * @param row
     * @param index
     */
    foodTypeChange(row,index){
      //当父下拉框值改变时，如果子下拉框中的值不在父下拉框的值范围内时，在清空子下拉框中的值
      if(!(row.select && this.inetSelectOptions.find(item => item.value == row.select).pvalue == row.foodType)){
        row.select = ''
      }
    },
    /**
     * 单行数据保存方法
     * @param row
     * @param index
     */
    toSaveSingleRow(row,index){
      //单行数据输入校验
      Promise.all(['input','foodType'].map(i => this.validateField(index,i))).then(res => {
        console.log(res)
        row.edit = !row.edit;
      }).catch(err => {
        console.log(err)
      })
    },
    //'tableData.' + index + '.input'
    //`tableData.${index}.${field}`
    /**
     * 单行单字段输入校验，本方法值得研究和学习
     * @param index
     * @param field
     * @returns {Promise<unknown>}
     */
    validateField(index,field){
      console.log(index,field)
      return new Promise((resolve,reject) => {
        this.$refs["form"].validateField(`tableData.${index}.${field}`,(val)=>{
          console.log(val)
          if(!val){
            resolve(true)
          }else{
            reject(false)
          }
        });
      })
    },
  },
};
</script>
<style scoped>
  ::v-deep .el-form-item__error{
    top: 50%;
    transform: translateY(-50%);
    left: 20px;
  }
  .el-form-item--small.el-form-item{
    margin-bottom: 0;
  }
</style>
