<template>
    <div>
        <h2>Login</h2>
        <form>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
</template>


<script>
export default {
  name: 'Login',
  methods: {
 login: function () {
   const { username, password } = this;
        // eslint-disable-next-line no-console
        console.log(username, password);
   }
 }
};
</script>>
