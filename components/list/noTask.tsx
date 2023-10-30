export default function NoTasks() {
  return (
    <div className="relative h-[100dvh]">
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[10%]  p-5 rounded-lg shadow-md bg-white
    xs:w-[80%] xs:h-[30%]
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
    </div>
  );
}
