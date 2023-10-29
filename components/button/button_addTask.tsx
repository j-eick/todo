type childrenProps = {
  children: string;
};

export default function Button_AddTask({ children }: childrenProps) {
  return (
    <button
      className="w-[30%] py-2 border rounded-md hover:bg-slate-100
      xs:text-xs xs:py-1
      "
    >
      {children}
    </button>
  );
}
