import {  screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import StatusBadge from "../pages/components/statusBadge";
import { renderWithMantine } from "../test-utils";
import { MantineProvider } from "@mantine/core";


describe("StatusBadge component", () => {
  it("renders Active status correctly", () => {
    renderWithMantine(<StatusBadge status="active" />);
    const badge = screen.getByTestId("status-badge");
    expect(badge).toHaveTextContent("Active");
  });

  it("renders Inactive status correctly", () => {
    renderWithMantine(<StatusBadge status="inactive" />);
    const badge = screen.getByTestId("status-badge");
    expect(badge).toHaveTextContent("Inactive");
  });

  it("renders Pending status correctly", () => {
    renderWithMantine(<StatusBadge status="pending" />);
    const badge = screen.getByTestId("status-badge");
    expect(badge).toHaveTextContent("Pending");
  });

  it("updates text when props change (using rerender)", () => {
    const { rerender } = renderWithMantine(<StatusBadge status="active" />);
    expect(screen.getByTestId("status-badge")).toHaveTextContent("Active");

    rerender(<MantineProvider><StatusBadge status="inactive" /></MantineProvider>);
    expect(screen.getByTestId("status-badge")).toHaveTextContent("Inactive");
  });
});
