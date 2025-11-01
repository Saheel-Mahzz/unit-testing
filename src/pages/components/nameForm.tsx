import { useState } from "react";
import { Button, TextInput, Text } from "@mantine/core";

export default function NameForm() {
  const [name, setName] = useState<string>("");
  const [submittedName, setSubmittedName] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedName(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <Button type="submit">Submit</Button>
      {submittedName && <Text data-testid="result">Hello, {submittedName}!</Text>}
    </form>
  );
}
