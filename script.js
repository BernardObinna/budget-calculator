var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    status: false,
    // false on the status is single
    gender: false
    // false on the gender is male
  },

  methods: {
    change: function() {
      this.message = "yooo";
      console.log(this.status);
    }
  },
  computed: {}
});
