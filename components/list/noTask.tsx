export default function NoTasks() {
  return (
    <div
      className="relative p-5 rounded-lg bg-slate-100 shadow-md
    xs:w-[80%] xs:h-[50%]
    "
    >
      <p>
        Congrats, <br />
        you've got nothing to do... <br />
      </p>
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 text-lg">
        ...yet!
      </span>
    </div>
  );
}
