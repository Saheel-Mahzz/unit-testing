import { Button, Text } from "@mantine/core";

interface LoginMessageProps {
  isLoggedIn: boolean;
  onToggle: () => void;
}

export default function LoginMessage({ isLoggedIn, onToggle }: LoginMessageProps) {
  return (
    <div>
      <Text>{isLoggedIn ? "Welcome back, Saheel!" : "Please log in."}</Text>
      <Button onClick={onToggle}>{isLoggedIn ? "Logout" : "Login"}</Button>
    </div>
  );
}

// Concept here:
// The component depends on props (isLoggedIn + onToggle).
// It conditionally shows different text and button label.
// We’ll test that both states (true/false) render correctly, and the button works.
