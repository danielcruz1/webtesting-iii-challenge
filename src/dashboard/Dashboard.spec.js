// Test away

import React from "react";
import Dashboard from "./dashboard";
import { render, fireEvent } from "react-testing-library";

test("default gate setting is unlocked and open", () => {
    const dashboard = render(<Dashboard/>);

    const lockBtn = dashboard.getByText(/locK gate/i);
    const openBtn = dashboard.getByText(/close gate/i);

    expect(lockBtn.disabled).toBe(true);
    expect(openBtn.disabled).toBe(false);
})

test("gate opens", () => {
    const { getByText, findByText } = render(<Dashboard/>);
    fireEvent.click(getByText("Close Gate"));
    findByText(/open gate/i);
});

test("if locked gate cannot be closed or open", () => {
    const dashboard = render(<Dashboard/>);

    const closeBtn = dashboard.getByText(/close gate/i);
    fireEvent.click(closeBtn);

    const lockBtn = dashboard.getByText(/lock gate/i);
    fireEvent.click(lockBtn);

    const openBtn = dashboard.getByText(/open gate/i);
    fireEvent.click(openBtn);
}) 