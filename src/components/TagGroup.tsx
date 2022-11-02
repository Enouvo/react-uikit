import React, { useState, ChangeEvent } from "react";
import { Tag, Input } from "antd";

interface Props {
  isDisabled: boolean;
  onChange?: (value: string[]) => void;
}

export function TagGroup({ isDisabled, onChange }: Props) {
  const [emails, setEmails] = useState<string[]>([]);
  const [newEmail, setNewEmail] = useState("");

  const handleClose = (emailRemove: string) => {
    const tags = emails.filter(email => email !== emailRemove);
    setEmails(tags);
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
        closable
        key={index}
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
        className="mt-2"
        disabled={isDisabled}
        onChange={onEmailChange}
        onPressEnter={handleInputConfirm}
        type="email"
        value={newEmail}
      />
    </>
  );
}
