<template>
  <div class="login">
    <div class="left">
      <img src="../assets/nttf.jpg" alt="" />
    </div>
    <div class="right">
      <div class="header">Login</div>
      <form action="">
        <label for=""
          >Email
          <input type="email" />
        </label>
        <label for=""
          >Password
          <input type="password" />
        </label>
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.login {
  display: flex;
  height: 100vh;
  background: rgb(255, 255, 255);
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
}
form {
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.header {
  display: none;
}
label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  margin: 1rem;
  color: rgb(39, 39, 38);
}
input[type="email"],
input[type="password"] {
  width: 100%;
  margin-top: 0.5rem;
  padding: 10px 5px;
  font-size: 20px;
  border: none;
  border-radius: 5px;
  color: rgb(39, 39, 38);
}
input[type="submit"] {
  cursor: pointer;
  padding: 8px 30px;
  font-size: 25px;
  text-transform: uppercase;
  border: none;
  margin: 1rem;
  border-radius: 5px;
  background: rgb(121, 86, 186);
  color: rgb(255, 255, 255);
  letter-spacing: 3px;
}
input[type="submit"]:hover {
  transition: all 0.2s ease-in-out;
  box-shadow: 0 0 30px 1px rgb(253, 211, 58);
}
.right {
  background: rgb(248, 78, 130);
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
}
img {
  height: 80%;
  width: 100%;
}
@media screen and (max-width: 977px) {
  .login {
  }
  img {
    display: none;
  }
  .right {
    width: 100%;
    justify-content: flex-end;
  }
  .header {
    display: block;
    font-size: 30px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 4rem;
  }
}
</style>
