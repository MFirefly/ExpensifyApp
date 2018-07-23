// react-test-renderer allows us to render out components inside react renderer
import React from "react";
import {shallow} from 'enzyme';
import {Header} from "../../components/Header";
// import ReactShallowRenderer from "react-test-renderer/shallow";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
});

test("Should call startLogout on button click", () => {
    const startLogoutSpy = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogoutSpy}/>);
    wrapper.find("button").simulate("click");
    expect(startLogoutSpy).toHaveBeenCalled();
});


// test("Should render Header correctly", () => {
    // expect(wrapper.find("h1").text()).toBe("Expensify");

    //********* react-test-renderer **********//
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header/>);
    // When toMatchSnapshot() runs for the first time, the test passes and
    // new snapshot is created
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
// });
