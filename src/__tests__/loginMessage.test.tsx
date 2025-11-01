import { describe, expect, it, vi } from "vitest";
import { renderWithMantine } from "../test-utils";
import LoginMessage from "../pages/components/loginMessage";
import { fireEvent, screen } from "@testing-library/dom";

describe("LoginMessage component", () => {
  it("shows 'Please log in.' when isLoggedIn is false", () => {
    renderWithMantine(<LoginMessage isLoggedIn={false} onToggle={() => {}} />);
    expect(screen.getByText("Please log in.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  })
})
  it("shows 'Welcome back' when isLoggedIn is true", () => {
    renderWithMantine(<LoginMessage isLoggedIn={true} onToggle={() => {}} />);
    expect(screen.getByText("Welcome back, Saheel!")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();
  });
  
  it("calls onToggle when button is clicked", () => {
    const mockFn = vi.fn();
    renderWithMantine(<LoginMessage isLoggedIn={false} onToggle={mockFn} />);
    const button = screen.getByRole("button", { name: /login/i });
    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
// ==>screen.getByRole(role: string, options?: object)
// so yes bro, two args —
// 1️⃣ the role (like "button", "textbox", "heading", etc.)
// 2️⃣ an optional options object — lets you filter by name, level, hidden, etc.

// ***other examples ***
// screen.getByRole("heading", { level: 2 })   // <h2>Something</h2>
// screen.getByRole("textbox", { name: /email/i }) // <input aria-label="Email">
// screen.getByRole("link", { name: /home/i }) // <a>Home</a>

// ==>screen.getByRole("button", { name: /login/i });
// /login/i = regular expression
// i means case-insensitive
// So it’ll match: "Login", "LOGIN", "login", "Login Now", etc.
// ✅ Flexible and most used in tests because UI text can vary a little.

// | You write            | Matches                       | Case-sensitive |
// | -------------------- | ----------------------------- | -------------- |
// | `{ name: /login/i }` | *any text containing “login”* | ❌ No           |
// | `{ name: "Login" }`  | *exactly “Login”*             | ✅ Yes          |

// ***so what vi.fn() does ***
// 🧠 simple meaning:
// vi.fn() = “hey Vitest, make me a fake function that I can spy on.”
// it doesn’t do any real logic — but it records:
// how many times it was called,
// with what arguments,
// and what it returned (if you mock return values).
// mockFn replaces the real onToggle callback.
// when you click the button, the component calls that prop.
// so mockFn records that it was called → you check it with .toHaveBeenCalledTimes(1).


// const mockFn = vi.fn();

// mockFn('hello');
// mockFn('world');

// expect(mockFn).toHaveBeenCalledTimes(2); // ✅ passes
// expect(mockFn).toHaveBeenCalledWith('hello'); // ✅ passes
