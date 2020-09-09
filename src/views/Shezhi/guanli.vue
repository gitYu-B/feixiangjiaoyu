<template>
	<div>
		<div class="tou">
			<!-- <img src="../../../public/img/zmian.png" /> -->
			<h2>员工管理</h2>
		</div>
		<div class="text-top">
			<el-input v-model="input" placeholder="请输入内容" class="input"></el-input>
			<el-button type="primary" icon="el-icon-search" class="ss">查找</el-button>
			<el-button type="primary" icon="el-icon-circle-plus-outline" @click="show">新增员工</el-button>
		</div>
		<div class="tanx">
			<div class="tanx2">
				<a>分类</a>
			</div>
			<div class="duoji">
				<el-tree :data="data" node-key="id" default-expand-all @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter"
				 @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop"
				 draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
				</el-tree>
				<div class="zhong">
					<a>（以上分类中包含了在职的、试用期和临时<br>的员工）</a>
				</div>
				<div class="diul">
					<ul>
						<li><i class="el-icon-folder"></i><span>在职的员工</span></li>
						<li><i class="el-icon-folder"></i><span>试用期员工</span></li>
						<li><i class="el-icon-folder"></i><span>临时的员工</span></li>
						<li><i class="el-icon-folder"></i><span>退休的员工</span></li>
						<li><i class="el-icon-folder"></i><span>离职的员工</span></li>
					</ul>
				</div>
			</div>
		</div>
		<div id="table">
			<table cellpadding="0" cellspacing="0">
				<thead>
					<tr>
						<th>姓名</th>
						<th>性别</th>
						<th>工号</th>
						<th>从属于</th>
						<th>职务</th>
						<th>入职日期</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(item,index) in newsList" :key="index">
						<td width="14%">{{item.date}}</td>
						<td width="14%">{{item.name}}</td>
						<td width="14%">{{item.address}}</td>
						<td width="14%">{{item.cong}}</td>
						<td width="14%">{{item.zwu}}</td>
						<td width="14%">{{item.ruzhi}}</td>
						<td width="15%">
							<i @click="edit(item,$event,index)" class="el-icon-edit"></i>
							<i @click="deletelist(item.id,index)" class="el-icon-delete"></i>
						</td>
					</tr>
				</tbody>
			</table>
			<div id="mask" v-if="editlist">
				<div class="mask">
					<div class="title">
						编辑
						<span @click="editlist=false">x</span>
					</div>
					<div class="content">
						<input type="text" v-model="newsList.date" name="title" value="" placeholder="姓名" />
						<input type="text" v-model="newsList.name" name="user" value="" placeholder="性别" />
						<input type="text" v-model="newsList.address" name="date" value="" placeholder="工号" />
						<input type="text" v-model="newsList.cong" name="date" value="" placeholder="从属于" />
						<input type="text" v-model="newsList.zwu" name="date" value="" placeholder="职务" />
						<input type="text" v-model="newsList.ruzhi" name="date" value="" placeholder="入职日期" />
						<button @click="update">更新</button>
						<button @click="editlist=false">取消</button>
					</div>
				</div>
			</div>
			<div id="mask" v-show="is_show">
				<div class="mask">
					<div class="title">
						新增
						<span @click="editlist2=false">x</span>
					</div>
					<div class="content">
						<input type="text" v-model="newsList.date" name="title" value="" placeholder="姓名" />
						<input type="text" v-model="newsList.name" name="user" value="" placeholder="性别" />
						<input type="text" v-model="newsList.address" name="date" value="" placeholder="工号" />
						<input type="text" v-model="newsList.cong" name="date" value="" placeholder="从属于" />
						<input type="text" v-model="newsList.zwu" name="date" value="" placeholder="职务" />
						<input type="text" v-model="newsList.ruzhi" name="date" value="" placeholder="入职日期" />
						<button @click="add">新增</button>
						<button @click="cancel">取消</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="../../../public/vue.js"></script>
<script>
	export default {
		data() {
			return {
				is_show: false,
				input: '',
				editlist: false,
				editlist2: false,
				editDetail: {},
				addDetail: {},
				newsList: [{
						date: '谭霞',
						name: '女',
						address: 'Ahz-001',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '赵嘉敏',
						name: '女',
						address: 'Ahz-002',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '傻逼特朗普',
						name: '男',
						address: 'sb-250',
						cong: '傻逼机构',
						zwu: '傻逼公司老板',
						ruzhi: '5050-2.50'
					}, {
						date: '普京',
						name: '男',
						address: 'Ahz-004',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					},
					{
						date: '谭霞',
						name: '女',
						address: 'Ahz-001',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '赵嘉敏',
						name: '女',
						address: 'Ahz-002',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '傻逼特朗普',
						name: '男',
						address: 'sb-250',
						cong: '傻逼机构',
						zwu: '傻逼公司老板',
						ruzhi: '5050-2.50'
					}, {
						date: '普京',
						name: '男',
						address: 'Ahz-004',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					},
					{
						date: '谭霞',
						name: '女',
						address: 'Ahz-001',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '赵嘉敏',
						name: '女',
						address: 'Ahz-002',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '傻逼特朗普',
						name: '男',
						address: 'sb-250',
						cong: '傻逼机构',
						zwu: '傻逼公司老板',
						ruzhi: '5050-2.50'
					}, {
						date: '普京',
						name: '男',
						address: 'Ahz-004',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					},
					{
						date: '谭霞',
						name: '女',
						address: 'Ahz-001',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '赵嘉敏',
						name: '女',
						address: 'Ahz-002',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '傻逼特朗普',
						name: '男',
						address: 'sb-250',
						cong: '傻逼机构',
						zwu: '傻逼公司老板',
						ruzhi: '5050-2.50'
					}, {
						date: '普京',
						name: '男',
						address: 'Ahz-004',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					},
					{
						date: '谭霞',
						name: '女',
						address: 'Ahz-001',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}, {
						date: '赵嘉敏',
						name: '女',
						address: 'Ahz-002',
						cong: '杭州机构',
						zwu: '公司经理',
						ruzhi: '5050-5.20'
					}
				],
				editid: '',
				data: [{
						id: 1,
						label: '显示所有'
					}, {
						id: 2,
						label: '集团',
						children: [{
								id: 5,
								label: '总经办'
							}, {
								id: 6,
								label: '人事部'
							},
							{
								id: 7,
								label: '财务部'
							}
						]
					}, {
						id: 3,
						label: '科技公司'
					},
					{
						id: 4,
						label: '工程公司'
					},
					{
						id: 5,
						label: '现代事务所',
						children: [{
								id: 8,
								label: '北京机构'
							}, {
								id: 9,
								label: '杭州机构'
							},
							{
								id: 10,
								label: '上海机构'
							},
							{
								id: 11,
								label: '深圳机构'
							}
						]
					}
				],
				defaultProps: {
					children: 'children',
					label: 'label'
				}
			};
		},
		methods: {
			show() {
				this.is_show = true;
			},
			cancel() {
				this.is_show = false;
			},
			addlist: function(item) {
				this.editlist2 = true
			},
			add() {
				var item = {
					date: this.newsList.date,
					name: this.newsList.name,
					address: this.newsList.address,
					cong: this.newsList.cong,
					zwu: this.newsList.zwu,
					ruzhi: this.newsList.ruzhi,
				};
				this.newsList.push(item);
				this.is_show = false;
			},
			edit(item, event, index) {
				this.editlist = true;
				this.newsList.date = item.date;
				this.newsList.name = item.name;
				this.newsList.address = item.address;
				this.newsList.cong = item.cong;
				this.newsList.zwu = item.zwu;
				this.newsList.ruzhi = item.ruzhi;
				this.newsList.index = index;
			},
			update() {
				var dt = {
					date: this.newsList.date,
					name: this.newsList.name,
					address: this.newsList.address,
					cong: this.newsList.cong,
					zwu: this.newsList.zwu,
					ruzhi: this.newsList.ruzhi,
				};
				this.$set(this.newsList, this.newsList.index, dt);
				this.editlist = false;
			},
			deletelist: function(id, i) {
				this.newsList.splice(i, 1);
			},
			handleDragStart(node, ev) {
				console.log('drag start', node);
			},
			handleDragEnter(draggingNode, dropNode, ev) {
				console.log('tree drag enter: ', dropNode.label);
			},
			handleDragLeave(draggingNode, dropNode, ev) {
				console.log('tree drag leave: ', dropNode.label);
			},
			handleDragOver(draggingNode, dropNode, ev) {
				console.log('tree drag over: ', dropNode.label);
			},
			handleDragEnd(draggingNode, dropNode, dropType, ev) {
				console.log('tree drag end: ', dropNode && dropNode.label, dropType);
			},
			handleDrop(draggingNode, dropNode, dropType, ev) {
				console.log('tree drop: ', dropNode.label, dropType);
			},
			allowDrop(draggingNode, dropNode, type) {
				if (dropNode.data.label === '二级 3-1') {
					return type !== 'inner';
				} else {
					return true;
				}
			},
			allowDrag(draggingNode) {
				return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
			}
		}
	};
</script>

<style>
	.el-icon-edit {
		margin-left: 20px;
	}

	.el-icon-delete {
		margin-left: 50px;
	}

	#mask {
		background: rgba(0, 0, 0, .5);
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 4;
		top: 0;
		left: 0;
	}

	.mask {
		background: rgba(255, 255, 255, 1);
		width: 300px;
		height: 300px;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		margin: auto;
		z-index: 47;
		border-radius: 5px;
	}

	.title {
		padding: 10px;
		border-bottom: 1px solid #eee;
	}

	.title span {
		float: right;
		cursor: pointer;
	}

	.content {
		padding: 10px;
	}

	.content input {
		width: 270px;
		margin-bottom: 15px;
	}

	#table table {
		width: 100%;
		font-size: 14px;
		border: 1px solid #eee;
		position: relative;
		left: 280px;
		top: -680px;
	}

	#table {
		padding: 0 10px;
	}

	#table thead th {
		background: #f5f5f5;
		padding: 10px;
		text-align: left;
	}

	#table tbody td {
		padding: 10px;
		text-align: left;
		border-bottom: 1px solid #eee;
		border-right: 1px solid #eee;
	}

	#table tbody td span {
		padding: 0 10px;
		cursor: pointer;
	}

	.diul ul li {
		list-style: none;
		margin-top: 15px;
	}

	.diul ul li span {
		margin-left: 10px;
	}

	.tanx2 a {
		float: left;
		margin-top: 10px;
		margin-left: 30px;
	}

	.biaoge {
		margin-left: 300px;
		margin-top: -680px;
	}

	.duoji {
		margin: 20px;
	}

	.text-top {
		margin-top: -25px;
	}

	.ss {
		background: white;
		color: #9A9A9A;
		margin-left: 20px;
	}

	.zx {
		background: white;
		color: #9A9A9A;
	}

	.input {
		width: 420px;
		height: 35px;
		margin-left: 500px;
	}

	.tou img {
		margin-top: 40px;
	}

	.tou h2 {
		margin-left: 30px;
		margin-top: -34px;
	}

	.tanx {
		width: 260px;
		height: 680px;
		border: 1px solid #DDDDDD;
		margin-top: 30px;
	}

	.zhong {
		width: 260px;
		height: 60px;
		border: 1px solid #DDDDDD;
		margin-left: -20px;
		margin-top: 20px;
	}

	.zhong a {
		font-size: 12px;
		float: left;
		margin-top: 20px;
		margin-left: 15px;
	}

	.tanx2 {
		width: 260px;
		height: 40px;
		border-bottom: 1px solid #DDDDDD;
		background-color: rgba(245, 245, 245, 1);
	}
</style>
