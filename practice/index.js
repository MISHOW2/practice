const expenses = [
  {
    description: 'Grocery Shopping',
    category: 'Food',
    amount: 150,
    date: '2024-10-01'
  },
  {
    description: 'Electricity Bill',
    category: 'Utilities',
    amount: 80,
    date: '2024-10-02'
  },
  {
    description: 'Netflix Subscription',
    category: 'Entertainment',
    amount: 12,
    date: '2024-10-03'
  },
  {
    description: 'Gym Membership',
    category: 'Fitness',
    amount: 50,
    date: '2024-10-05'
  },
  {
    description: 'Car Maintenance',
    category: 'Transport',
    amount: 200,
    date: '2024-10-06'
  }
];

// Using reduce to calculate the total amount of expenses
const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);

console.log(`Total Expenses: R ${totalExpenses}`);
// Output: Total Expenses: R 492


const category = expenses.filter(expense=> console.log(expense.category)
) 


const Sortcategory = expenses.sort(expense=> console.log(expense.category)
) 

