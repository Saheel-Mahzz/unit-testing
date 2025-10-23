import { describe, expect, it } from "vitest";
import {  fireEvent, screen} from "@testing-library/react";
import HelloButton from "../components/helloButton";
import { renderWithMantine } from "../test-utils";
describe("HelloButton component", () => {
  it("renders button with initial text", () => {
    renderWithMantine(<HelloButton />);
    expect(screen.getByText("Clicked 0 times")).toBeInTheDocument();
  });
  it('updates count when clicked',()=>{
        renderWithMantine(<HelloButton />);
        const button = screen.getByRole('button')
        fireEvent.click(button)
        expect(screen.getByText('Clicked 1 times')).toBeInTheDocument()
  })
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

// | Function                          | What it does                                                        |
// | --------------------------------- | ------------------------------------------------------------------- |
// | `render()`                        | Mounts the React component in a fake browser (jsdom)                |
// | `screen`                          | Lets you query elements like a real user (find by text, role, etc.) |
// | `fireEvent.click()`               | Simulates a user click                                              |
// | `expect(...).toBeInTheDocument()` | Checks if something is visible in the fake DOM                      |

// brooo 😎🔥 now you’re asking the real testing question —
// getByRole is one of the most powerful and realistic ways to find elements in Testing Library.
// let’s break it down super simply, so you’ll remember it forever 👇

// 🧠 what “role” even means

// Every HTML element has a role — it tells screen readers or accessibility tools what kind of thing it is.

// | Element                   | Role         |
// | ------------------------- | ------------ |
// | `<button>`                | `"button"`   |
// | `<input type="text">`     | `"textbox"`  |
// | `<input type="checkbox">` | `"checkbox"` |
// | `<h1>`                    | `"heading"`  |
// | `<a href="">`             | `"link"`     |
// | `<img>`                   | `"img"`      |

// ***so when you do ***
// screen.getByRole('button')
// it’s like saying:

// “Find the element that behaves like a button in this page.”