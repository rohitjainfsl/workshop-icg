/* eslint-disable react/prop-types */
import { MdDelete, MdEdit } from "react-icons/md";
function List({ tasks, handleDelete, handleEdit }) {
  return (
    <>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li className="flex items-center justify-between" key={index}>
              <span className="inline-block w-3/4">{task}</span>
              <p className="flex items-center justify-between w-1/4">
                <MdDelete
                  className="text-2xl cursor-pointer"
                  onClick={() => handleDelete(index)}
                />
                <MdEdit
                  className="text-2xl cursor-pointer"
                  onClick={() => handleEdit(index)}
                />
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default List;
