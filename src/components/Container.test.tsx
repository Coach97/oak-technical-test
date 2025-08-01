import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Container } from "./Container";

describe("Container Component", () => {
  it("calls the onActiveChange callback when clicked", async () => {
    const handleClick = vi.fn();
    render(<Container active={false} onActiveChange={handleClick} />);
    await userEvent.click(await screen.findByRole("checkbox"));
    expect(handleClick).toHaveBeenCalledOnce();
  });
  it("toggles active when clicked", async () => {
    const handleClick = vi.fn((active: boolean) => active);
    render(<Container active={false} onActiveChange={handleClick} />);
    await userEvent.click(await screen.findByRole("checkbox"));
    expect(handleClick).toHaveBeenCalledOnce();
    expect(handleClick).toHaveReturnedWith(true);
  });
  it("resets when active", async () => {
    const handleClick = vi.fn((active: boolean) => active);
    render(<Container active={true} onActiveChange={handleClick} />);
    await waitFor(
      () => {
        expect(handleClick).toHaveBeenCalledOnce();
        expect(handleClick).toHaveReturnedWith(false);
      },
      {
        timeout: 2300,
      }
    );
  });
});
