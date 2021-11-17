import React from "react"
import {create} from "react-test-renderer"
import UserStatus from "../UserStatus";

describe("UserStatus component" , () => {
    test("status from props be in the state", () => {
        const component = create(<UserStatus status ="Test UserStatus Props"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Test UserStatus Props");
    });
    test("after creation span  should be displayed with correct status", () => {
        const component = create(<UserStatus status ="Test UserStatus Props"/>);
        const root = component.root;
        let span = root.findByType("span");
        // .not - инверсия
        expect(span).not.toBeNull();
    });
    test("after creation input  shouldn't  be displayed", () => {
        const component = create(<UserStatus status ="Test UserStatus Props"/>);
        const root = component.root;
        // ожидание ошибки
        expect(()=> {
            let input = root.findByType("input");
        }).toThrow();
    });
    test("after creation span should correct status", () => {
        const component = create(<UserStatus status ="Test UserStatus Props"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("Test UserStatus Props");
    });
    test("input should de displayed in editMode instead of span", () => {
        const component = create(<UserStatus status ="Span->Input"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("Span->Input");
    });
    test("callback should be called", () => {
        const mockCallBack = jest.fn();
        const component = create(<UserStatus status ="Span->Input" updateStatus={mockCallBack}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();

        expect(mockCallBack.mock.calls.length).toBe(1);

    });

});