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
        if (quantity > 0) {
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
        variant={"light"}
        color="dark"
        className="border-none mr-1 text-xl"
        onClick={() => handleOnChangeQuantity("descr")}
      >
        -
      </Button>
      <Input
        value={quantity}
        onChange={handleOnChangeQuantityInput}
        className={`${
          quantity ? quantity.toString().length : 0 > 1 ? "w-11" : "w-9"
        } w-10 text-center text-xl`}
        styles={{
          input: {
            outline: "none",
            border: "none",
          },
        }}
      />
      <Button
        variant={"light"}
        color="dark"
        className="border-none ml-1 text-xl"
        onClick={() => handleOnChangeQuantity("incr")}
      >
        +
      </Button>
    </span>
  );
};
