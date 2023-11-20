import { cva, VariantProps } from "class-variance-authority";
import cn from "@/util/cn";

type WarningProps = VariantProps<typeof warningVariants> & {
  children: React.ReactNode;
};

export default function Warning({ children, variant, size }: WarningProps) {
  return (
    <div className={cn(warningVariants({ variant, size }))}>{children}</div>
  );
}

const warningVariants = cva("border border-black bg-neutral", {
  variants: {
    variant: {
      primary: "fixed bg-red-300 border-none rounded-sm top-[5%]",
      secondary: "bg-red-800",
    },
    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-3 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
  },
});
