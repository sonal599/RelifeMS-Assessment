<template>
  <div>
    <!-- code for payfees page -->
    <div>
      <router-link
        class="float-left mb-3 ml-4 mt-3"
        @click.native="remove"
        to="/students"
        >Back to student</router-link
      >
    </div>
    <div class="container mt-5">
      <form class="form">
        <div class="form-group row mt-2">
          <label for="name" class="mr-2">FirstName</label>
          <!-- id="exampleInputPassword1" -->
          <div class="col-sm-6">
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="name" class="mr-2">LastName</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="exampleInputEmail1" class="mr-4">Email Id</label>
          <div class="col-sm-6">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
        </div>

        <div class="form-group row">
          <label for="name" class="mr-4">Address</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="form-group row">
          <label for="name" class="mr-4">Amount</label>
          <div class="col-sm-6">
            <input type="number" class="form-control" />
          </div>
        </div>

        <button type="submit" class="btn btn-primary mr-4">Pay</button>
        <button type="submit" class="btn btn-danger">Cancle</button>
      </form>
    </div>
  </div>
</template>

<script>
</script>

<style scopped>
.container {
  width: 50%;
  justify-content: center;
}
</style>