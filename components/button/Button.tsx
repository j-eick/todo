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

const buttonVariants = cva("border", {
  variants: {
    variant: {
      primary: "fixed place-items-center top-[3%] right-[3%] text-[#3b4749] ",
      secondary: "border-2 text-white border-grey",
      danger: "border-2 bg-red-500",
      clearTodos:
        "fixed place-items-center top-[3%] right-[3%] text-[#3b4749] pointer-cursor",
      addTaskDisabled: `w-[20%] max-w-[120px] py-2 border border-slate-200 rounded-r-md text-slate-200
        xs:text-xs xs:py-1`,
      addTaskEnabled: `w-[20%] py-2 border border-white rounded-r-md text-white
        xs:text-xs xs:py-1`,
    },
    size: {
      sm: "text-sm px-2 py-0 rounded-xl",
      md: "text-base px-2 py-1",
      lg: "text-xl px-3 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
