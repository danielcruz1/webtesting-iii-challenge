// Test away!

import React from "react";
import { render } from "react-testing-library";
import Display from "./Display";
import "react-testing-library";

test("green background when unlocked or open", () => {
    const display = render(<Display closed={false} locked={false}/>);
    const lockStatus = display.getByText(/unlocked/i);
    const openStatus = display.getByText(/open/i);
    expect(lockStatus.className).toBe("led green-led");
    expect(openStatus.className).toBe("led green-led");
}) 