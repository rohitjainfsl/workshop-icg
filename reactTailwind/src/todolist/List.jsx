function List({ tasks }) {
  return (
    <>
      <ul>
        {tasks.map((task, index) => {
          return <li key={index}>{task}</li>;
        })}
      </ul>
    </>
  );
}
export default List;
