import { Edit, Trash2 } from "lucide-react";

export const TodoItems = ({ data, onDelete, onEdit, onToggle }) => {
  return (
    <div className="todo-item">
      <div className="todo-item-content">
        <input
          type="checkbox"
          checked={data.completed}
          onChange={() => onToggle(data.id)}
        />
        <p
          style={{ textDecoration: `${data.completed ? "line-through" : ""}` }}
        >
          {data.todo}
        </p>
      </div>
      <div className="todo-item-actions">
        <span onClick={() => onEdit(data.id, data.todo)}>
          <Edit color="blue" />
        </span>
        <span onClick={() => onDelete(data.id)}>
          <Trash2 color="red" />
        </span>
      </div>
    </div>
  );
};
