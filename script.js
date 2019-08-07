var app = new Vue({
  el: "#app",
  data: {
    firstName: "",
    lastName: "",
    fullName: "",
    income: 10000,
    // income: null,
    age: null,
    dependants: null,

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
    generator: function() {
      let temp_priority = [];
      if (this.age < 30) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;
          index == 0 ? (temp_priority[index] += 1.2) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 2) : temp_priority; //transport
          index == 2 ? (temp_priority[index] -= 2.5) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 2.7) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 1) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 2.5) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 1.5) : temp_priority; //savings
          index == 7 ? (temp_priority[index] -= 2) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 3) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 6) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      if (this.age >= 30) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;

          index == 0 ? (temp_priority[index] += 2.7) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 2.5) : temp_priority; //transport
          index == 2 ? (temp_priority[index] += 0.2) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 2) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 2.6) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 0.5) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 2.6) : temp_priority; //savings
          index == 7 ? (temp_priority[index] -= 2.3) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 2) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 1) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      if (this.status == true) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;

          index == 0 ? (temp_priority[index] += 3) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 2.5) : temp_priority; //transport
          index == 2 ? (temp_priority[index] += 0.4) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 2) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 2.6) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 0) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 1) : temp_priority; //savings
          index == 7 ? (temp_priority[index] -= 0) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 1.3) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 1) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      if (this.gender == true) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;

          index == 0 ? (temp_priority[index] += 2.5) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 2) : temp_priority; //transport
          index == 2 ? (temp_priority[index] += 1) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 1.7) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 2) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 2) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 0) : temp_priority; //savings
          index == 7 ? (temp_priority[index] -= 0) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 1) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 1) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      if (this.dependants > 2) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;

          index == 0 ? (temp_priority[index] += 3) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 2) : temp_priority; //transport
          index == 2 ? (temp_priority[index] += 0) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 1) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 2.3) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 0) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 1) : temp_priority; //savings
          index == 7 ? (temp_priority[index] += 1.5) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 1) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 0) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      if (this.dependants > 4) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;

          index == 0 ? (temp_priority[index] += 1.5) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 2) : temp_priority; //transport
          index == 2 ? (temp_priority[index] += 0.4) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 1) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 2.1) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 0) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 1) : temp_priority; //savings
          index == 7 ? (temp_priority[index] += 3) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 0.8) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 0) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      if (this.dependants > 6) {
        this.priority.forEach((element, index) => {
          temp_priority[index] = element - 1;

          index == 0 ? (temp_priority[index] += 1) : temp_priority; //groceries
          index == 1 ? (temp_priority[index] += 1) : temp_priority; //transport
          index == 2 ? (temp_priority[index] += 0.4) : temp_priority; //bills
          index == 3 ? (temp_priority[index] -= 1) : temp_priority; //health
          index == 4 ? (temp_priority[index] += 2.1) : temp_priority; //housing
          index == 5 ? (temp_priority[index] += 0) : temp_priority; //personal care
          index == 6 ? (temp_priority[index] += 0) : temp_priority; //savings
          index == 7 ? (temp_priority[index] += 6.3) : temp_priority; //family
          index == 8 ? (temp_priority[index] += 0) : temp_priority; // misc
          index == 9 ? (temp_priority[index] += 0) : temp_priority; //gadgets
        });
        this.priority = temp_priority;
      }
      this.calculator();
    },

    calculator: function() {
      this.categories.forEach((element, index) => {
        let amount = (this.priority[index] / 100) * this.income;
        amount = amount.toFixed(2);
        element.amount = new Intl.NumberFormat("en").format(amount);
      });
    },

    submit: function() {
      this.fullName = this.firstName + " " + this.lastName;
      !this.gender ? (this.sex = "Mr") : (this.sex = "Mrs");
      !this.status && this.gender ? (this.sex = "Miss") : this.sex;
      this.generator();
      this.generated = !this.generated;
    },
    flip: function() {
      this.firstName = "";
      this.lastName = "";
      this.fullName = "";
      this.income = null;
      this.age = null;
      this.dependants = null;

      this.client = "";
      this.gender = false;
      this.generated = !this.generated;
    }
  }
});
