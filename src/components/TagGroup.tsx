import React, { useState, ChangeEvent } from "react";
import { Tag, Input } from "antd";

interface Props {
  isDisabled: boolean;
  onChange?: (value: string[]) => void;
}

export function TagGroup({ isDisabled, onChange }: Props) {
  const [emails, setEmail] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");

  const handleClose = (emailRemove: string) => {
    const tags = emails.filter(email => email !== emailRemove);
    setEmail(tags);
    onChange?.(tags);
  };
  const onEmailChange = (email: ChangeEvent<HTMLInputElement>) => {
    setNewEmail(email.target.value);
  };

  const handleInputConfirm = () => {
    if (newEmail && !emails.includes(newEmail)) {
      emails.push(newEmail);
      onChange?.(emails);
    }
    setNewEmail("");
  };

  function EmailTag(item: string, index: number) {
    return (
      <Tag
        key={index}
        closable
        onClose={email => {
          email.preventDefault();
          handleClose(item);
        }}
      >
        {item}
      </Tag>
    );
  }

  return (
    <>
      {emails.map((item, index) => EmailTag(item, index))}
      <Input
        type="email"
        className="mt-2"
        onChange={onEmailChange}
        value={newEmail}
        onPressEnter={handleInputConfirm}
        disabled={isDisabled}
      />
    </>
  );
}
