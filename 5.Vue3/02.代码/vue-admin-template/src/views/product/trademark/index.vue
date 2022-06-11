<template>
	<el-card class="box-card">
		<template #header>
			<div class="card-header">
				<el-button class="button" :icon="Plus" @click="dialogFormVisible = true" type="primary">添加</el-button>
			</div>
		</template>

		<el-table v-loading="loading" :data="tableData" stripe border style="width: 100%">
			<el-table-column type="index" label="序号" width="80" align="center" />
			<el-table-column prop="tmName" label="品牌名称" />
			<el-table-column prop="logoUrl" label="品牌LOGO">
				<template v-slot="{ row }">
					<img :src="row.logoUrl" style="width: 100px; height: 60px" />
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template v-slot="scope">
					<el-button title="修改" type="warning" size="small" :icon="Edit"></el-button>
					<el-button title="删除" type="danger" size="small" :icon="Delete"></el-button>
				</template>
			</el-table-column>
		</el-table>

		<el-pagination
			style="margin-top: 20px; text-align: center"
			v-model:currentPage="currentPage"
			v-model:page-size="pageSize"
			:page-sizes="[3, 6, 9]"
			:total="total"
			layout="prev, pager, next, jumper, ->, sizes, total"
			@current-change="handleCurrentChange"
			@size-change="handleSizeChange"
		/>
	</el-card>

	<el-dialog v-model="dialogFormVisible" title="添加品牌">
		<el-form :model="form" style="width: 80%" label-width="100px">
			<el-form-item label="品牌名称">
				<el-input v-model="form.tmName" autocomplete="off" />
			</el-form-item>
			<el-form-item label="品牌logo">
				<el-upload
					class="avatar-uploader"
					:action="`${BASE_URL}/admin/product/fileUpload`"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
				>
					<img v-if="imageUrl" :src="imageUrl" class="avatar" />
					<el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
				</el-upload>
			</el-form-item>
		</el-form>
		<template #footer>
			<span class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取消</el-button>
				<el-button type="primary" @click="isOk">保存</el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts">
export default {
	name: 'Trademark',
};
</script>

<script lang="ts" setup>
import { getTrademarkListApi, saveTrademarkApi } from '/@/api/product/trademark';
import { TrademarkListModel, TrademarkModel } from '/@/api/product/model/trademarkModel';
import { ref, reactive, onMounted } from 'vue';
import { Plus, Edit, Delete } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import type { UploadProps } from 'element-plus';

const tableData = ref<TrademarkListModel>([]);

const BASE_URL = import.meta.env.VITE_API_URL;
// console.log(BASE_URL)

const currentPage = ref<number>(1);
const pageSize = ref<number>(3);
const total = ref<number>();
const loading = ref<boolean>(false);

const getTrademarkList = async () => {
	loading.value = true;

	const result = await getTrademarkListApi(currentPage.value, pageSize.value);

	loading.value = false;
	tableData.value = result.records;
	total.value = result.total;
};

onMounted(() => {
	// console.log('mounted')
	getTrademarkList();
});

const handleCurrentChange = (current: number) => {
	currentPage.value = current;
	getTrademarkList();
};

const handleSizeChange = (size: number) => {
	currentPage.value = 1;
	pageSize.value = size;
	getTrademarkList();
};

const dialogFormVisible = ref<boolean>(false);

const form = reactive<TrademarkModel>({
	tmName: '',
	logoUrl: '',
});

const imageUrl = ref<string>('');

const handleAvatarSuccess: UploadProps['onSuccess'] = (response) => {
	// 将内存中存在的本地图片读取出来展示
	// imageUrl.value = URL.createObjectURL(uploadFile.raw!)

	// 此处我们需要将服务器返回的网络图片链接进行展示
	// console.log(response);

  // 保证图片可以在upload组件中显示
  imageUrl.value = response.data;

  // 用于等会儿发送请求使用
  form.logoUrl = response.data;
};

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
	if (rawFile.type !== 'image/jpeg') {
		ElMessage.error('Avatar picture must be JPG format!');
		return false;
	} else if (rawFile.size / 1024 / 1024 > 2) {
		ElMessage.error('Avatar picture size can not exceed 2MB!');
		return false;
	}
	return true;
};

const isOk =async ()=>{
  await saveTrademarkApi(form);

  dialogFormVisible.value = false;
  currentPage.value = 1;
  getTrademarkList();

  ElMessage('请求成功,正在刷新');
}
</script>

<style scoped>
.avatar-uploader .avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>
