<template>
  <div>
    Login
    <button @click="handleLogin">发送请求</button>
  </div>
</template>

<script>
import { asyncLogin } from "@api/use";

export default {
  name: "Login",
  methods: {
    handleLogin() {
      asyncLogin({
        phone: "13700000000",
        password: "111111",
      })
        .then((val) => {
          console.log(val);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="less" scoped>
</style>
