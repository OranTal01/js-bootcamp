const account = {
    name: 'Oran Tal',
    expenses: [],
    income: [],
    addExpense: function(description, expense) {
        this.expenses.push({ description, expense })
    },
    addIncome: function(description, amount) {
        this.income.push({ description, amount })
    },
    getAccountSummary: function() {
        let expenseAmount = 0
        let incomeAmount = 0
        this.expenses.forEach(function(element) {
            expenseAmount += element.expense
        })
        this.income.forEach(function(element) {
            incomeAmount += element.amount
        })
        return (`${this.name} has a balance of: $${incomeAmount - expenseAmount}. $${incomeAmount} in income. $${expenseAmount} in expenses. `)
    }
}

account.addExpense('Rent', 2500)
account.addExpense('Coffee', 2)
account.addIncome('Job', 4000)
console.log(account.getAccountSummary())