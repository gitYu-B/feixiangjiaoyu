<template>
  <div id="app">
    <div id="nav">
     
    </div>
    <router-view/>
  </div>
</template>
<script>
// import qs from 'qs'
// import axios from 'axios'
// axios.defaults.headers.common['Authentication-Token'] = localStorage.getItem("userToken");
// export default {
//   name: "",
// 		created() {
// 			//alert(this.$store.state.username)
// 		},
// 		mounted() {
// 			this.$store.commit("set_user", localStorage.getItem("user"));
// 			if (this.timer) {
// 				clearInterval(this.timer)
// 			} else {
// 				this.timer = setInterval(() => {
// 					if ("/index" != this.$route.path) {
// 						//alert(localStorage.getItem('userToken'))
// 						const tokenData = qs.stringify({
// 							'userToken': localStorage.getItem('userToken')
// 						})
// 						axios.post("http://www.chenmin.work:8081/examsystem/getUsersState", tokenData).then(response => {
// 							//console.log(response)
// 							if (response.data.errorCode == '4002') {
// 								localStorage.removeItem("userToken");
// 								alert("登录验证已过期,请重新登录")
// 								this.$router.push("/index")

// 							} else if (response.data.errorCode == '0') {
// 								//alert("没有")
// 								//alert("fdsd")
// 							}
// 						}).catch(error => {
// 							console.log(error)
// 							localStorage.removeItem("userToken");
// 							alert("登录验证已过期,请重新登录");
// 							this.$router.push("/index")
// 						})
// 					}
// 				}, 5000);
// 			}
// 		}
// }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.router-link-active {
  text-decoration: none;
}
*{
  padding: 0px;
  margin: 0px;
}
#nav {
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
