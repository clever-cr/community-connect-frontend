import { ReactNode } from "react";

export interface inputProps{
  placeholder?: string;
  value?: string;
  name: string;
  type?: string;
  className?: string;
  onChange?: any
}
export interface buttonProps {
  text: string;
  className?: string;
  textClass?: string;
  icon?: ReactNode;
  onClick?: any;
  type?: "button" | "submit" | "reset";
}