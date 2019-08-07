var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    firstName: "",
    lastName: "",
    fullName: "",
    income: 10000,
    // income: null,
    age: null,
    dependants: "",

    status: false,
    // false on the status is single
    gender: false,
    // false on the gender is male
    sex: "",
    generated: false,
    client: "John wick",

    priority: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],

    categories: [
      { name: "Groceries & Supplies", amount: 30000 },
      { name: "Transportation", amount: 25000 },
      { name: "Bills & Utilities", amount: 30000 },
      { name: "Healthcare", amount: 30000 },
      { name: "Housing", amount: 30000 },
      { name: "Personal Care", amount: 30000 },
      { name: "Savings & investments", amount: 30000 },
      { name: "Family & dependants", amount: 30000 },
      { name: "Miscellaneous eg entertainment", amount: 30000 },
      { name: "Gadgets", amount: 30000 }
    ]
  },

  methods: {
    change: function() {
      this.message = "yooo";
      console.log(this.status);
    },

    generator: function() {
      let temp_priority = [];
      if (this.age < 30) {
        this.priority.forEach((element, index) => {
          temp_priority.push(element - 1);
          index == 5 ? (temp_priority[index] += 2) : temp_priority;
          index == 8 ? (temp_priority[index] += 3) : temp_priority;
          index == 9 ? (temp_priority[index] += 5) : temp_priority;
        });
        this.priority = temp_priority;
      }
      if (this.age > 30) {
        this.priority.forEach((element, index) => {
          temp_priority.push(element - 1);
          index == 9 ? (temp_priority[index] += 10) : temp_priority;
        });
        this.priority = temp_priority;
      }

      this.calculator();
    },

    calculator: function() {
      this.categories.forEach((element, index) => {
        element.amount = (this.priority[index] / 100) * this.income;
      });
    },

    submit: function() {
      this.client = this.firstName + " " + this.lastName;
      !this.gender ? (this.sex = "Mr") : (this.sex = "Mrs");
      !this.status && this.gender ? (this.sex = "Miss") : this.sex;

      // console.log(this.age);
      this.generator();
      this.generated = !this.generated;
      console.log(this.priority);
    },
    flip: function() {
      this.firstName = "";
      this.lastName = "";
      this.fullName = "";
      this.income = null;
      this.age = null;
      this.dependants = "";

      this.client = "";
      this.gender = false;
      this.generated = !this.generated;
    }
  },
  computed: {}
});
