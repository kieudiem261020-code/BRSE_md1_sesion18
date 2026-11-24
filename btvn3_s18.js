// Dữ liệu mẫu ban đầu giống giao diện đề bài
let todos = [
  { id: 1, title: "Xin việc ở Google", completed: true },
  { id: 2, title: "Mua biệt thự", completed: true },
  { id: 3, title: "Cưới vợ", completed: false },
  { id: 4, title: "Mua xe hơi", completed: false },
  { id: 5, title: "Sinh con", completed: false },
  { id: 6, title: "Đi du lịch vòng quanh thế giới", completed: false },
];

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

// READ: Hiển thị toàn bộ danh sách công việc
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    if (todo.completed) {







      li.classList.add("checked");
    }

    // Nội dung công việc
    const textSpan = document.createElement("span");
    textSpan.textContent = todo.title;
    li.appendChild(textSpan);

    // Click vào dòng để đổi trạng thái hoàn thành (Update status)
    li.addEventListener("click", () => {
      toggleTodo(todo.id);
    });

    // Khu vực nút Sửa & Xóa
    const actionsDiv = document.createElement("div");
    actionsDiv.className = "action-btns";

    // UPDATE: Nút chỉnh sửa tiêu đề công việc
    const editBtn = document.createElement("span");
    editBtn.className = "edit-btn";
    editBtn.textContent = "✎";
    editBtn.title = "Sửa công việc";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Ngăn kích hoạt sự kiện click của thẻ li
      editTodo(todo.id);
    });

    // DELETE: Nút xóa công việc
    const closeBtn = document.createElement("span");
    closeBtn.className = "close-btn";
    closeBtn.textContent = "×";
    closeBtn.title = "Xóa công việc";
    closeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteTodo(todo.id);
    });

    actionsDiv.appendChild(editBtn);
    actionsDiv.appendChild(closeBtn);
    li.appendChild(actionsDiv);

    todoList.appendChild(li);
  });
}

// CREATE: Thêm công việc mới
function addTodo() {
  const title = todoInput.value.trim();
  if (!title) {
    alert("Vui lòng nhập nội dung công việc!");
    return;
  }

  const newTodo = {
    id: Date.now(),
    title: title,
    completed: false,
  };

  todos.push(newTodo);
  todoInput.value = "";
  renderTodos();
}

// UPDATE (Trạng thái hoàn thành)
function toggleTodo(id) {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  renderTodos();
}

// UPDATE (Nội dung tiêu đề)
function editTodo(id) {
  const target = todos.find((todo) => todo.id === id);
  if (!target) return;

  const newTitle = prompt("Cập nhật nội dung công việc:", target.title);
  if (newTitle !== null && newTitle.trim() !== "") {
    target.title = newTitle.trim();
    renderTodos();
  }
}

// DELETE: Xóa công việc
function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  renderTodos();
}

// Gắn sự kiện click nút "Thêm" và phím Enter
addBtn.addEventListener("click", addTodo);
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Khởi chạy giao diện lần đầu
renderTodos();