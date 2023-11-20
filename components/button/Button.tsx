import cn from "@/util/cn";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    children: React.ReactNode;
  };

export default function Button({
  children,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }))} {...props}>
      {children}
    </button>
  );
}

const buttonVariants = cva("border rounded-[7px]", {
  variants: {
    variant: {
      primary:
        "absolute place-items-center top-[5%] right-[5%] text-[#3b4749] hover:bg-neutral-200",
      secondary: "border-2 text-white border-grey",
      danger: "border-2 bg-red-500",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-3 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
