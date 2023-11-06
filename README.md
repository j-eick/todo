## Fancy little ToDo App

It does what its name says

### TechStack

- TS
- Next.js with React
- Zustand
- TailwindCSS
- Framer Motion

### ...more to come

```javascript
<li
  key={todo.id}
  onMouseDown={(e) => handleMouseDown(e, todo.id)}
  // onMouseUp={(e) => handleMouseUp(e, todo.id)}
  className={`w-[90%] p-3 px-5 rounded-xl 
            bg-opacity-100 backdrop-blur-[2rem] task-shadow bg-slate-100
            sm:max-h-[70dvh] sm:mt-20`}
>
  <div className="relative grid grid-cols-6 gap-0 w-[100%] ">
    {clickedTaskID === todo.id ? (
      <input
        type="text"
        value={taskToEdit}
        onChange={handleOnChange}
        className={`col-span-5 h-[100%] py-[0.2rem] focus:outline-0 
                  border-b-slate-800 bg-slate-100 border-b-[0.1rem] `}
      />
    ) : (
      <p className=" col-span-5 w-[100%]">{todo.task}</p>
    )}
    <button
      type="button"
      onClick={(e) => handleEditButton(e, todo.id)}
      className="bg-blue-200 absolute col-span-1 p-[0.6rem] rounded-[0.6rem]
                  -top-[0.6rem] -right-[1.13rem]
                  "
    >
      edit
    </button>
  </div>
</li>
```

          2n VERSION

```javascript
{
  allTodos.map((todo) =>
    // IF in EDITING-MODE, active LI and passive LI's get their own colors
    clickedTaskID === todo.id ? (
      <li
        key={todo.id}
        onMouseDown={(e) => handleMouseDown(e, todo.id)}
        onMouseUp={(e) => handleMouseUp(e, todo.id)}
        className={`w-[90%] p-3 px-5 rounded-xl 
              bg-opacity-100 backdrop-blur-[2rem] task-shadow bg-slate-100
              sm:max-h-[70dvh] sm:mt-20`}
      >
        {
          <div className="relative grid grid-cols-6 gap-0 w-[100%] ">
            {editing ? (
              <>
                <input
                  type="text"
                  value={taskToEdit}
                  onChange={handleOnChange}
                  className={`col-span-5 h-[100%] py-[0.2rem] focus:outline-0 
                    border-b-slate-800 bg-slate-100 border-b-[0.1rem] `}
                />
                <button
                  type="button"
                  onClick={(e) => handleEditButton(e, todo.id)}
                  className="bg-blue-200 absolute col-span-1 p-[0.6rem] rounded-[0.6rem]
                    -top-[0.6rem] -right-[1.13rem]
                    "
                >
                  edit
                </button>
              </>
            ) : (
              <p className=" col-span-5 w-[100%]">{todo.task}</p>
            )}
          </div>
        }
      </li>
    ) : (
      <li
        key={todo.id}
        onMouseDown={(e) => handleMouseDown(e, todo.id)}
        className={`w-[90%] p-3 px-5 rounded-xl 
              bg-opacity-100 backdrop-blur-[2rem] task-shadow bg-slate-100
              sm:max-h-[70dvh] sm:mt-20`}
      >
        {todo.task}
      </li>
    )
  );
}
```
