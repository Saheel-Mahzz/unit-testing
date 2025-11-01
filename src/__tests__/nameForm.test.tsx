import { describe, expect, it } from "vitest";
import { renderWithMantine } from "../test-utils";
import NameForm from "../pages/components/nameForm";
import { fireEvent, screen } from "@testing-library/dom";


describe("NameForm component", () => {
  it("updates input value when typing", () => {
    renderWithMantine(<NameForm />);
    const input = screen.getByPlaceholderText("Enter your name");
    fireEvent.change(input, { target: { value: "Saheel" } });
    expect((input as HTMLInputElement).value).toBe("Saheel");
  })
})

  it("shows submitted name after form submit", () => {
    renderWithMantine(<NameForm />);
    const input = screen.getByPlaceholderText("Enter your name");
    const button = screen.getByRole("button", { name: /submit/i });

    fireEvent.change(input, { target: { value: "Saheel" } });
    fireEvent.click(button);

    expect(screen.getByTestId("result")).toHaveTextContent("Hello, Saheel!");
  });

// fireEvent.change(element, eventData)
// 1️⃣ element → the DOM node (like an input, select, textarea)
// 2️⃣ eventData → an object describing the event (what data you want to simulate)

// ==>fireEvent.change(input, { target: { value: "Saheel" } });
// 🧠 why it’s like that:

// React’s onChange event listens for updates to the target.value of an element —
// so when you do fireEvent.change(...), you have to tell it what the new value is inside the event object → { target: { value: ... } }.

// that’s what makes React think:

// “oh, the user typed something new → update state!”

// | Element type              | Example event                                                    |
// | ------------------------- | ---------------------------------------------------------------- |
// | **TextInput / `<input>`** | `fireEvent.change(input, { target: { value: "Saheel" } })`       |
// | **Textarea**              | `fireEvent.change(textarea, { target: { value: "some text" } })` |
// | **Select dropdown**       | `fireEvent.change(select, { target: { value: "option1" } })`     |
// | **Checkbox**              | `fireEvent.click(checkbox)` (not `.change`)                      |
// | **Radio button**          | `fireEvent.click(radio)`                                         |

// ⚠️ only exception:

// If you’re testing custom components (like Mantine’s TextInput),
// you still use fireEvent.change, but make sure you’re targeting the actual <input> inside, not the wrapper.
// That’s why screen.getByPlaceholderText works best — it directly finds the real input element.


// 🧩 1️⃣ screen.getByTestId("result")
// finds an element in the DOM that has data-testid="result".
// in your component, it’s this part:
// <Text data-testid="result">Hello, {submittedName}!</Text>
// so it returns that <Text> element (which becomes a real <p> or <div> in the DOM).
// basically, getByTestId = direct way to grab an element by a custom tag.
// 🧩 2️⃣ .toHaveTextContent("Hello, Saheel!")
// it’s a Jest DOM matcher (Vitest includes these same matchers).
// it checks that the element’s inner text matches "Hello, Saheel!".
// works like this behind the scenes:
// element.textContent === "Hello, Saheel!"
// if the text inside that element matches → ✅ test passes.
// if not → ❌ test fails (and shows the mismatch).
// 🧩 3️⃣ Together:
// expect(screen.getByTestId("result")).toHaveTextContent("Hello, Saheel!");
// means:
// “Find the element with test id result, and check that its text is exactly Hello, Saheel!.”
// 💡 Why we use data-testid here:
// Sometimes the text is dynamic (like “Hello, Saheel!” changes based on user input),
// so using getByText can be messy.
// data-testid gives you a stable selector for testing that element directly.
// so yeah bro ✅
// getByTestId() → finds element by ID
// .toHaveTextContent() → asserts the visible text inside matches.
// you want me to show the difference between getByText() vs getByTestId() next (when to prefer which)?