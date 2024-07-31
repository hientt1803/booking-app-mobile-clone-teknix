"use client";

import { Button, Input } from "@mantine/core";
import React from "react";

interface IGroupInputQuantity {
  quantity: number;
  setQuantity: (newQuantity: number) => void;
}

export const GroupInputQuantity = ({
  quantity,
  setQuantity,
}: IGroupInputQuantity) => {
  const handleOnChangeQuantity = (action: string) => {
    switch (action) {
      case "incr":
        setQuantity(quantity + 1);
        break;

      case "descr":
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
        break;

      default:
        break;
    }
  };

  const handleOnChangeQuantityInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  return (
    <span className="flex">
      <Button
        variant={"default"}
        color="dark"
        className="border-none text-xl"
        onClick={() => handleOnChangeQuantity("descr")}
      >
        -
      </Button>
      <Input
        value={quantity}
        onChange={handleOnChangeQuantityInput}
        className="w-10 text-center border-none text-xl outline-none"
      />
      <Button
        variant={"default"}
        color="dark"
        className="border-none text-xl"
        onClick={() => handleOnChangeQuantity("incr")}
      >
        +
      </Button>
    </span>
  );
};
