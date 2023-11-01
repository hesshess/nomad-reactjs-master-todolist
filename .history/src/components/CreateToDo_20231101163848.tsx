function CreateToDo() {
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('toDo', {
          required: 'todo is required',
        })}
        placeholder="write a todo"
      />
      <button>add</button>
    </form>
  );
}

export default CreateToDo;
