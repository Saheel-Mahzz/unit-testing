import { describe, expect, it } from "vitest";
import {  screen} from "@testing-library/react";
import HelloButton from "../components/helloButton";
import { renderWithMantine } from "../test-utils";
describe("HelloButton component", () => {
  it("renders button with initial text", () => {
    renderWithMantine(<HelloButton />);
    expect(screen.getByText("Clicked 0 times")).toBeInTheDocument();
  });
});
// render(<Button>Click me</Button>)      // 🧱 show the button
// const button = screen.getByText('Click me') // 🔍 find it
// fireEvent.click(button)                // 👆 click it
// expect(button).toBeInTheDocument()     // ✅ check if it exists
// So remember this small story bro 👇

// render → screen → fire → expect
// 🧱 show → 🔍 find → 👆 act → ✅ check

// That’s the full testing cycle in the easiest possible way 💪
// | Tool / Function                       | Simple Meaning                               | How to Remember           |
// | ------------------------------------- | -------------------------------------------- | ------------------------- |
// | **`render()`**                        | shows your component in a fake browser       | 🧱 “put it on the screen” |
// | **`screen`**                          | helps you find stuff (text, buttons, inputs) | 🔍 “look around”          |
// | **`fireEvent.click()`**               | acts like you clicked a button               | 👆 “simulate user click”  |
// | **`expect(...).toBeInTheDocument()`** | check if something is visible on the page    | ✅ “is it showing?”        |

// 🧠 Think of testing like a fake mini-browser

// Vitest + Testing Library create a “fake browser” (called jsdom)
// where your React component runs — no real Chrome, but it behaves the same.

// Inside that fake browser, you can:
// ✅ show a component
// ✅ find things on the screen
// ✅ click / type like a user
// ✅ check if the result looks right