import styled from "@emotion/styled";
import React, { useRef, useState } from "react";

const Wrapper = styled.div`
  & > input {
    display: inline-block;
    margin: 5px;
    width: 3.75rem;
    height: 3.75rem;
    font-size: 1.135rem;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #d9d9d9;
  }
`;

const isValidCode = (code: string) => /^\w+$/.test(code);

interface CodeInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string, isCompleted: boolean) => void;
}

export function InputCode({ length = 6, onChange }: CodeInputProps) {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef<HTMLInputElement[]>([]);

  const changeCode = (newCode: string[]) => {
    setCode(newCode);
    const codeValue = newCode.join("");
    onChange?.(codeValue, codeValue.length === length);
  };

  const processInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    slot: number
  ) => {
    const num = e.target.value;
    if (!isValidCode(num)) return;

    const newCode = [...code];
    newCode[slot] = num;
    if (slot !== length - 1) {
      inputs.current[slot + 1]?.focus();
    }
    changeCode(newCode);
  };

  const onKeyUp = (e: React.KeyboardEvent, slot: number) => {
    if (e.code === "Backspace") {
      const newCode = [...code];
      if (code[slot]) {
        newCode[slot] = "";
      } else if (slot !== 0) {
        newCode[slot - 1] = "";
        inputs.current[slot - 1]?.focus();
      }
      changeCode(newCode);
    }
  };

  const handlePaste = async (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const copiedText = await navigator.clipboard.readText();
    const text = copiedText.trim().slice(0, length);
    if (text.length && isValidCode(text)) {
      const newCode = code.map((_, idx) => text[idx] ?? "");
      inputs.current[text.length]?.focus();
      changeCode(newCode);
    }
  };

  return (
    <Wrapper className="flex flex-nowrap justify-between">
      {code.map((num, idx) => (
        <input
          autoFocus={!code[0].length && idx === 0}
          inputMode="numeric"
          key={idx}
          maxLength={1}
          onChange={e => processInput(e, idx)}
          onKeyUp={e => onKeyUp(e, idx)}
          onPaste={handlePaste}
          ref={ref => ref && inputs.current.push(ref)}
          type="text"
          value={num}
        />
      ))}
    </Wrapper>
  );
}
