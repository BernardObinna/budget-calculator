var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    status: false,
    // false on the status is single
    gender: false,
    // false on the gender is male
    generated: false,
    client: "John wick",
    categories: [
      { name: "Groceries & Supplies", amount: 30000 },
      { name: "Transportation", amount: 25000 },
      { name: "Bills & Utilities", amount: 30000 },
      { name: "Healthcare", amount: 30000 },
      { name: "Housing", amount: 30000 },
      { name: "Personal Care", amount: 30000 },
      { name: "Savings & investments", amount: 30000 },
      { name: "Family & dependants", amount: 30000 },
      { name: "Miscellaneous", amount: 30000 },
      { name: "Emergency funds", amount: 30000 }
    ]
  },

  methods: {
    change: function() {
      this.message = "yooo";
      console.log(this.status);
    }
  },
  computed: {}
});
