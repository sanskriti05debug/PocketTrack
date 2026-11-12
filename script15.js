
// Function to get saved expenses

function getExpenses() {

    let data = localStorage.getItem("expenses");

    if (data == null) {
        return [];
    }

    return JSON.parse(data);
}


// Function to add an expense

function addExpense() {

    let name = document.getElementById("name").value;
    let amount = Number(document.getElementById("amount").value);
    let category = document.getElementById("category").value;

    if (name.trim() == "" || amount <= 0 || category.trim() == "") {

        document.getElementById("message").textContent =
            "Please fill all details correctly.";

    }

    else {

        let expenses = getExpenses();

        let newExpense = {
            name: name,
            amount: amount,
            category: category
        };

        expenses.push(newExpense);

        localStorage.setItem("expenses", JSON.stringify(expenses));

        document.getElementById("message").textContent =
            "Expense added successfully!";

        document.getElementById("name").value = "";
        document.getElementById("amount").value = "";
        document.getElementById("category").value = "";

    }
}


// Display expenses on the Expenses page

let list = document.getElementById("expenseList");

if (list != null) {

    let expenses = getExpenses();

    if (expenses.length == 0) {

        list.textContent = "No expenses added yet.";

    }

    for (let i = 0; i < expenses.length; i++) {

        let item = document.createElement("p");

        item.textContent =
            expenses[i].name + " - Rs. " +
            expenses[i].amount + " - " +
            expenses[i].category;

        list.appendChild(item);

    }
}
