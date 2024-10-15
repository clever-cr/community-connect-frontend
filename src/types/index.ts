import { ReactNode } from "react";

export interface inputProps{
  placeholder?: string;
  value?: string;
  name: string;
  type?: string;
  className?: string;
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: any
}
export interface buttonProps {
  text: string;
  className?: string;
  textClass?: string;
  icon?: ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  type?: "button" | "submit" | "reset";
}