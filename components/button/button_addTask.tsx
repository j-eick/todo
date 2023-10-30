type buttonProps = {
  children: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
};

export default function ButtonAddTask({
  children,
  onClick,
  disabled,
}: buttonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-[30%] py-2 border rounded-md hover:bg-slate-100
      xs:text-xs xs:py-1
      "
    >
      {children}
    </button>
  );
}
