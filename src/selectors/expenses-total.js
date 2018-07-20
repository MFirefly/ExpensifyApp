export default (expenses) => {
    // if (expenses.length === 0) {
    //     return 0;
    // } else {
    //     // MY IMPLEMENTATION //
    //     // let total = 0;
    //     // expenses.map(expense => {
    //     //     total += expense.amount;
    //     // });
    //     // return total;
    //     ///////////////////////
    //     return expenses
    //         .map((expense) => expense.amount)
    //         .reduce((sum, value) => sum + value, 0);
    // }
    return expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0);
};
