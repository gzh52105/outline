<template>
<div>
    <h1>用户注册</h1>
    <van-form @submit="onSubmit">
        <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            :rules="rules.username"
        />
        <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            :rules="rules.password"
        />
        <van-field
            v-model="vcode"
            label="验证码"
            :rules="rules.vcode"
        >
            <template #extra>
                <div class="vcode" v-html="vcodeHtml" @click="getVcode"></div>
            </template>
        </van-field>
        <div style="margin: 16px;">
            <van-button block type="info" native-type="submit">注册</van-button>
        </div>
    </van-form>

</div>
</template>
<script>
import {Toast} from 'vant'
import axios from 'axios'
export default {
  name: "Reg",
  data() {
      const checkUsername = function(val){
          return new Promise(async (resolve) => {
            Toast.loading('验证中...');

                // ajax
                const {data} = await axios.get("http://120.76.247.5:2003/api/user/check",{
                    params:{
                        username:val
                    }
                });
                Toast.clear();

                console.log('data',data)
                resolve(data.code === 200)

        });
      }
    return {
        username:'',
        password:'',
        vcode:'',
        vcodeHtml:'',
        rules:{
            username:[
                { required: true, message: '请填写用户名' },
                // 校验用户名是否存在
                {validator:checkUsername,message:'用户名已存在'}
            ],
            password:[
                { required: true, message: '请填写密码' }
            ],
            vcode:[
                { required: true, message: '请填写验证码' }
            ]
        }
    };
  },
  methods:{
      async onSubmit(){
          console.log('onSubmit')
            const {data} = await axios.post("http://120.76.247.5:2003/api/reg",{
                username:this.username,
                password:this.password,
                vcode:this.vcode,
            },{
              withCredentials:true
          });

            if(data.code === 200){
                this.$router.push('/login')
            }else if(data.code === 401){
                Toast.fail('验证码错误')
            }else{
                Toast.fail('注册失败')
            }
      },
      async getVcode(){
          const {data} = await axios.get("http://120.76.247.5:2003/api/vcode/picture",{
              withCredentials:true
          });
          console.log('data=',data)
          this.vcodeHtml = data.data;
      }
  },
  created(){
      this.getVcode();
  }
};
</script>
<style scoped>
    .vcode{}
</style>

