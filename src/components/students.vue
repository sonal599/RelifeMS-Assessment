<template>
  <div>
    <router-link class="float-left mb-3 ml-4 mt-3" @click.native="remove" to="/"
      >Back to home</router-link
    >
    <b-button
      v-b-modal.modal-prevent-closing
      variant="primary"
      class="float-right mb-4 mr-4"
      size="lg"
      >Add Students</b-button
    >

    <!-- student data table -->

    <div class="mt-4 mb-4 mr-4">
      <h5 class="float-left ml-4 mt-3">Registered Names:</h5>
      <div v-if="submittedNames.length === 0">--</div>

      <div v-else class="mb-0 pl-3">
        <table class="table table-bordered table-hover">
          <thead>
            <tr class="table-success">
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Pay Fees</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="data in submittedNames" id="dataarray" v-bind:key="data">
              <td scope="col">
                <h5>{{ data[0] }}</h5>
              </td>
              <td scope="col">
                <h5>{{ data[1] }}</h5>
              </td>
              <td scope="col">{{ data[2] }}</td>
              <td scope="col">{{ data[3] }}</td>
              <td scope="col">{{ data[4] }}</td>
              <td>
                <b-button
                  v-b-modal.modal-prevent-closing
                  v-on:click.capture="editItem(data.indexOf(data), data)"
                  variant="success"
                  >Edit</b-button
                >
              </td>
              <td>
                <b-button
                  v-on:click.capture="
                    showMsgBoxOne(submittedNames.indexOf(data))
                  "
                  variant="danger"
                  >Delete</b-button
                >
              </td>
              <td>
                <b-button variant="primary" v-on:click="showMsgBoxTwo(data)"
                  >Pay Fees</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Edit  button modal code -->
    <b-modal
      v-if="editmodel"
      id="modal-prevent-closing"
      ref="modal"
      title="Update your details"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleUpdateSubmit"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="firstnameState"
        >
          <b-form-input
            id="name-input"
            v-model="firstnameState"
            value="student.firstname"
            :state="firstnameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="last Name"
          label-for="lastname-input"
          invalid-feedback="lastname is required"
          :state="lastnameState"
        >
          <b-form-input
            id="lastname-input"
            v-model="lastname"
            :state="lastnameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Phone Number"
          label-for="phonenumber-input"
          invalid-feedback="phone number is required"
          :state="phonenumberState"
        >
          <b-form-input
            id="phonenumber-input"
            v-model="phonenumber"
            :state="phonenumberState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Email Address"
          label-for="email-input"
          invalid-feedback="Email address is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Address"
          label-for="addess-input"
          invalid-feedback="address is required"
          :state="addressState"
        >
          <b-form-input
            id="address-input"
            v-model="address"
            :state="addressState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>

    <!-- add student modal code -->
    <b-modal
      v-else
      id="modal-prevent-closing"
      ref="modal"
      title="Submit Your Name"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="First Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="firstnameState"
        >
          <b-form-input
            id="name-input"
            v-model="firstname"
            :state="firstnameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="last Name"
          label-for="lastname-input"
          invalid-feedback="lastname is required"
          :state="lastnameState"
        >
          <b-form-input
            id="lastname-input"
            v-model="lastname"
            :state="lastnameState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Phone Number"
          label-for="phonenumber-input"
          invalid-feedback="phone number is required"
          :state="phonenumberState"
        >
          <b-form-input
            id="phonenumber-input"
            v-model="phonenumber"
            :state="phonenumberState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Email Address"
          label-for="email-input"
          invalid-feedback="Email address is required"
          :state="emailState"
        >
          <b-form-input
            id="email-input"
            v-model="email"
            :state="emailState"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          label="Address"
          label-for="addess-input"
          invalid-feedback="address is required"
          :state="addressState"
        >
          <b-form-input
            id="address-input"
            v-model="address"
            :state="addressState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      address: "",
      editmodel: false,
      boxTwo: "",
      boxOne: "",
      addressState: null,
      emailState: null,
      phonenumberstate: null,
      lastnameState: null,
      firstnameState: null,
      submittedNames: [
        [
          "Sonali",
          "Patil",
          9096921972,
          "sonali@gmail.com",
          "Main Road, Mauli Nivas,Kolhapur",
        ],
      ],
    };
  },
  //validation check
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity();
      this.firstnameState = valid;
      this.lastnameState = valid;
      this.phonenumberState = valid;
      this.addressState = valid;
      this.emailState = valid;

      return valid;
    },
    //for resetting modal
    resetModal() {
      this.lastname = "";
      this.firstname = "";
      this.phonenumber = "";
      this.email = "";
      this.address = "";
      this.addressState = null;
      this.emailState = null;
      this.phonenumberState = null;
      this.firstnameState = null;
      this.lastnameState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleUpdate(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleUpdateSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.push([
        this.firstname,
        this.lastname,
        this.phonenumber,
        this.email,
        this.address,
      ]);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },

    //for updating data in record
    handleUpdateSubmit() {
      if (!this.checkFormValidity()) {
        return;
      }
      // Push the name to submitted names
      this.submittedNames.pop([
        this.firstname,
        this.lastname,
        this.phonenumber,
        this.email,
        this.address,
      ]);
    },

    //edit item
    editItem: function (index, student) {
      this.editmodel = true;
      this.index = index;
      this.student = student;
      this.submittedNames.push([
        this.firstname,
        this.lastname,
        this.phonenumber,
        this.email,
        this.address,
      ]);
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
    //popup for payment confirmation
    showMsgBoxTwo(data) {
      this.boxTwo = "";
      this.$bvModal
        .msgBoxConfirm("Hello " + data[0] + ", Do you want to pay Fees  ", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value === true) {
            this.$router.push("/paynow");
          }
        });
    },

    //delete item confirmation and operation
    showMsgBoxOne(name) {
      this.boxOne = "";
      this.$bvModal
        .msgBoxConfirm(" Do you want to delete this record ? ", {
          title: "Please Confirm",
          size: "sm",
          buttonSize: "sm",
          okVariant: "danger",
          okTitle: "YES",
          cancelTitle: "NO",
          footerClass: "p-2",
          hideHeaderClose: false,
          centered: true,
        })
        .then((value) => {
          if (value === true) {
            this.submittedNames.splice(name, 1);
          }
        });
    },
  },
};
</script>
