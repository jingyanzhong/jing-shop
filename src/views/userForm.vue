<template>
<div class="userForm">
    <VForm v-slot="{ meta, errors }" @submit="formSubmit">
        <div class="userName">
            <VField class="firstName" name="firstName"  label="姓氏" type="text" placeholder="姓氏" rules="required" :class="{ 'is-invalid': errors['firstName'] }" />
            <VField class="lastName" name="lastName"  label="名字" type="text" placeholder="名字" rules="required" />
        </div>
        <div class="error userNameError">
            <ErrorMessage name="firstName" />
            <ErrorMessage name="lastName" class="lastNameError" />
        </div>
        <div class="phone">
            <VField type="tel" name="tel" label="手機號碼" placeholder="手機號碼" rules="required|numeric|min:10|max:10" />
        </div>
        <div class="error phoneError">
            <ErrorMessage name="tel" />
        </div>
        <div class="mail">
            <VField type="mail" name="email" placeholder="E-mail" rules="required|email" />
        </div>
        <div class="error mailError">
            <ErrorMessage name="email" />
        </div>
        <div class="address">
            <VField class="addNum" name="addressNum"  label="郵遞區號" type="text" placeholder="郵遞區號" rules="required|numeric|min:3|max:6"  />
            <VField type="text" name="address"  label="地址" placeholder="地址" rules="required"  />
        </div>
        <div class="error addressError">
            <ErrorMessage name="addressNum" />
            <ErrorMessage name="address" class="addressError" />
        </div>
        <div class="textArea">
        <VField name="message" v-slot="{ field }">
            <textarea v-bind="field" cols="30" rows="10" placeholder="備註..."></textarea>
        </VField>
        </div>
        <div class="formBtn">
            <button class="resetBtn" type="reset">重填</button>
            <button class="submitBtn" type="submit" :class="{'disabled' : !meta.valid}" :disabled="!meta.valid">下一步</button>
        </div>
    </VForm>
</div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    formSubmit (val) {
      this.form.user.name = val.firstName + val.lastName
      this.form.user.email = val.email
      this.form.user.tel = val.tel
      this.form.user.address = val.addressNum + val.address
      this.form.msg = val.message
      // this.user = val;
      console.log('user', this.form.user)
      console.log('msg', this.form.msg)
      // const order = this.form
      // const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      // this.$http.post(api, { data: order }).then((res) => {
      //   if (res.success) {
      //     this.$router.push('/')
      //   } else {
      //     alert(res.message)
      //   }
      //   console.log(res)
      // })
    }
  }
}
</script>

<style lang="scss">
.userForm {
  margin-top: 24px;
  div {
    display: flex;
    input,
    textarea {
      width: 100%;
      border: 1px solid #D0D3C9;
      border-radius: 20px;
      padding: 8px 16px;
      margin-bottom: 16px;
    }
    .firstName,
    .addNum {
      width: 30%;
      margin-right: 16px;
    }
    textarea {
      flex: 1;
    }
  }
  .error {
    color: #ce0505;
    margin-bottom: 16px;
    span:nth-child(1) {
      width: 25%;
    }
  }
  .formBtn {
    display: block;
    text-align: center;
    button {
      width: 30%;
      color: #fff;
      padding: 8px 16px;
      border: none;
      cursor: pointer;
      transition: all .5s;
    }
    .resetBtn {
      background: #858585;
      margin-right: 16px;
      &:hover {
        background: #585858;
      }
    }
    .submitBtn {
      background: #9EAA8F;
      &:hover {
        background: #4A593D;
      }
    }
    .disabled {
      cursor: not-allowed;
      background: #555555;
      &:hover {
        background: #555555;
      }
    }
  }
}
</style>
