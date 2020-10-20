<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-alert
              v-if="errorMsg"
              v-bind:message="errorMsg"
              type="error"
              dismissible="true"
              dense>{{ errorMsg }}</v-alert>
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <div class="text-center">
                  <v-progress-linear
                    indeterminate
                    color="primary"
                    :active="loading"
                  ></v-progress-linear>
                </div>
                <v-form
                  ref="form"
                  @submit.prevent="validate"
                  v-model="valid"
                  :lazy-validation="lazy"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    required
                    label="Email"
                    name="email"
                    prepend-icon="email"
                    type="email"
                    v-on:keyup.enter="nextPlease"
                  />

                  <v-text-field
                    v-model="password"
                    :rules="passRules"
                    required
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-on:keyup.enter="toButton"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  :disabled="!valid"
                  color="primary"
                  class="mr-4"
                  @click="validate"
                  block
                  id="button"
                  v-on:keyup.enter="validate"
                  >Login</v-btn
                >
              </v-card-actions>
              <v-divider class="mx-2"></v-divider>
              <v-card-text class="text-center">
                <!--router-link to="/register">Create account</router-link-->
                <!--v-icon>arrow_right</v-icon-->
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  props: {
    source: String
  },
  data: () => ({
    errorMsg: "",
    valid: true,
    loading: false,
    lazy: false,
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    password: "",
    passRules: [
      v => !!v || "Password is required",
      v => (v && v.length >= 6) || "Min. 6 characters"
    ]
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
        this.loading = true;

        // LOGIN USER
        
      }
    },
    nextPlease() {
      document.getElementById("password").focus();
    },
    toButton() {
      document.getElementById("button").focus();
    }
  }
}
</script>