<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<el-button class="button" :icon="Plus" type="primary">添加</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe border style="width: 100%">
			<el-table-column type="index" label="序号" width="80" align="center"/>
			<el-table-column prop="tmName" label="品牌名称" />
			<el-table-column prop="logoUrl" label="品牌LOGO">
        <template v-slot="{row}">
          <img :src="row.logoUrl" style="width:100px;height:60px">
        </template>
      </el-table-column>
			<el-table-column  label="操作">
        <template v-slot="scope">
          <el-button title="修改" type="warning" size="small" :icon="Edit"></el-button>
          <el-button title="删除" type="danger" size="small" :icon="Delete"></el-button>
        </template>
      </el-table-column>
		</el-table>

    <el-pagination 
      style="margin-top: 20px; text-align: center;" 
      v-model:currentPage="currentPage"
      v-model:page-size="pageSize" 
      :page-sizes="[3, 6, 9]" 
      :total="total" 
      layout="prev, pager, next, jumper, ->, sizes, total"
    />
	</el-card>
</template>

<script lang="ts">
export default {
	name: 'Trademark'
};
</script>

<script lang="ts" setup>
import { getTrademarkListApi } from '/@/api/product/trademark';
import { TrademarkListModel } from '/@/api/product/model/trademarkModel';
import {ref ,onMounted} from 'vue'
import { Plus, Edit, Delete} from '@element-plus/icons-vue';

const tableData = ref<TrademarkListModel>([]);

const currentPage = ref<number>(1);
const pageSize = ref<number>(3);
const total = ref<number>();
const loading = ref<boolean>(false);


const getTrademarkList = async ()=>{
  loading.value= true;

  const result = await getTrademarkListApi(currentPage.value,pageSize.value);

  loading.value= false;
  tableData.value = result.records;
  total.value = result.total;
}

onMounted(()=>{
  // console.log('mounted')
  getTrademarkList();
})
</script>
