import React from "react";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import {EditExpensePage} from "../../components/EditExpensePage";

let editExpenseSpy, removeExpenseSpy, historySpy, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn();
    removeExpenseSpy = jest.fn();
    historySpy = {push: jest.fn()};
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpenseSpy}
            removeExpense={removeExpenseSpy}
            history={historySpy}
            expense={expenses[2]}
        />)
});

test("Should render EditExpensePage", () => {
    expect(wrapper).toMatchSnapshot();
});

test("Should handle editExpense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
    expect(historySpy.push).toHaveBeenLastCalledWith("/");
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test("Should handle removeExpense", () => {
    wrapper.find("button").simulate("click");
    expect(historySpy.push).toHaveBeenLastCalledWith("/");
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({
        id: expenses[2].id
    });
});