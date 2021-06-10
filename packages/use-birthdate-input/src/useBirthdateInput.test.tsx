import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  useBirthdateInput,
  UseBirthdateInputOptions,
} from "./useBirthdateInput";

const BirthdateInput = (props: UseBirthdateInputOptions) => {
  const { getInputProps } = useBirthdateInput(props);
  return (
    <div>
      <label htmlFor="birthdate">birthdate</label>
      <input id="birthdate" {...getInputProps()} />
    </div>
  );
};

describe("useBirthdateInput", () => {
  const getInput = () => screen.getByLabelText("birthdate");
  it("receive default value as string", () => {
    render(<BirthdateInput defaultValue="10/01/2000" />);

    expect(getInput()).toHaveValue("10/01/2000");
  });

  it("should have these html attributes", () => {
    render(<BirthdateInput />);

    expect(getInput()).toHaveAttribute("size", "10");
    expect(getInput()).toHaveAttribute("inputmode", "numeric");
  });

  it("receive only number", () => {
    render(<BirthdateInput />);

    userEvent.type(getInput(), "abc/.");
    expect(getInput()).toHaveValue("");
  });

  describe("insert separator", () => {
    it("able to type separator at third", () => {
      render(<BirthdateInput defaultValue="1" />);

      userEvent.type(getInput(), "0");

      expect(getInput()).toHaveValue("10/");
    });

    it("able to type separator at sixth", () => {
      render(<BirthdateInput defaultValue="10/0" />);

      userEvent.type(getInput(), "1");

      expect(getInput()).toHaveValue("10/01/");
    });
  });

  describe("⌫ backspace", () => {
    it("backspace on the first character", () => {
      render(<BirthdateInput />);

      userEvent.type(getInput(), "1{backspace}");
      expect(getInput()).toHaveValue("");
    });

    it("backspace on separator should also remove second character", () => {
      render(<BirthdateInput defaultValue="10/" />);

      userEvent.type(getInput(), "{backspace}");
      expect(getInput()).toHaveValue("1");
    });

    it("backspace on separator should also remove fifth character", () => {
      render(<BirthdateInput defaultValue="10/01/" />);

      userEvent.type(getInput(), "{backspace}");
      expect(getInput()).toHaveValue("10/0");
    });
  });

  it("call onChange with the value", () => {
    const onChange = jest.fn();
    render(<BirthdateInput onChange={onChange} />);

    userEvent.type(getInput(), "02");
    expect(onChange).toHaveBeenLastCalledWith("02/");
  });

  it("call all handlers", () => {
    const onChange = jest.fn();
    const onKeyDown = jest.fn();
    const Input = () => {
      const { getInputProps } = useBirthdateInput();
      return (
        <div>
          <label htmlFor="birthdate">birthdate</label>
          <input id="birthdate" {...getInputProps({ onChange, onKeyDown })} />
        </div>
      );
    };

    render(<Input />);

    userEvent.type(getInput(), "10");
    expect(onChange).toHaveBeenLastCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "10/" }),
      })
    );
    expect(onKeyDown).toHaveBeenCalledTimes(2);
  });
});
