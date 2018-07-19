// react-test-renderer allows us to render out components inside react renderer
import React from "react";
import {shallow} from 'enzyme';
// import ReactShallowRenderer from "react-test-renderer/shallow";
import Header from "../../components/Header";

test("Should render Header correctly", () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot();
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
