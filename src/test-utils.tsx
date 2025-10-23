import { MantineProvider } from "@mantine/core";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";

export function renderWithMantine(ui: ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}
