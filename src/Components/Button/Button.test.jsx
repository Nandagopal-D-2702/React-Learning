import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { expect, test } from "vitest";

describe("Button component", () => {
    test("renders with label text", () => {
        render(<Button label="Click Me" />);
        expect(screen.getByRole("button", {name:"Click Me"})).toBeInTheDocument();
    });

    test("calls onClick when clicked", () => {
        const handleClick = vi.fn();
        render(<Button label="Click Me" onClick={handleClick} />);
        fireEvent.click(screen.getByRole('button', {name: "Click Me"}));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    test("does not call onClick when disabled", () => {
        const handleClick = vi.fn();
        render(<Button label="Click Me" onClick={handleClick} disabled />);
        fireEvent.click(screen.getByRole("button", {name: "Click Me" }));
        expect(handleClick).not.toHaveBeenCalled();
    });

    test("applies the primary variant by default", () => {
        render(<Button label="Primary" />);
        const btn = screen.getByRole("button", { name: "Primary" });
        expect(btn.className).toMatch(/primary/);
    });

    test("applies the secondary variant when passed", () => {
        render(<Button label="Secondary" variant="secondary" />);
        const btn = screen.getByRole("button", { name: "Secondary" });
        expect(btn.className).toMatch(/secondary/);
    })

    test("warns if label is missing in development mode", () => {
        const spy = vi.spyOn(console, "warn").mockImplementation(() => {}); // 👈 vi.spyOn
        const OLD_ENV = process.env.NODE_ENV;
        process.env.NODE_ENV = "development";

        render(<Button />);

        expect(spy).toHaveBeenCalledWith(
        "Button rendered without a label - check your usage."
        );

        process.env.NODE_ENV = OLD_ENV;
        spy.mockRestore();
    });
})