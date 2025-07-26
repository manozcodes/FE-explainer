// Taskly TODO App - Full Functionality, Japanese-inspired

document.addEventListener("DOMContentLoaded", function () {
  // DOM Elements
  const addTaskForm = document.getElementById("add-task-form");
  const searchForm = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");
  const popup = document.getElementById("task-popup");
  const overlay = document.getElementById("overlay");
  const closePopupBtn = document.getElementById("close-popup");
  const tasksList = document.getElementById("tasks-list");
  const emptyState = document.getElementById("empty-state");
  const popupTitle = document.getElementById("popup-title");
  const popupDesc = document.getElementById("popup-desc");
  const popupDate = document.getElementById("popup-date");
  const popupStatus = document.getElementById("popup-status");
  const popupEdit = document.getElementById("popup-edit");
  const popupDelete = document.getElementById("popup-delete");
  const popupPostpone = document.getElementById("popup-postpone");

  // State
  let tasks = [];
  let filteredTasks = [];
  let selectedTaskId = null;

  // --- Utility Functions ---
  function saveTasks() {
    localStorage.setItem("taskly-tasks", JSON.stringify(tasks));
  }
  function loadTasks() {
    const data = localStorage.getItem("taskly-tasks");
    tasks = data ? JSON.parse(data) : [];
  }
  function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }
  function getTaskById(id) {
    return tasks.find((t) => t.id === id);
  }
  function updateFilteredTasks() {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) {
      filteredTasks = [...tasks];
    } else {
      filteredTasks = tasks.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          (t.description && t.description.toLowerCase().includes(q))
      );
    }
  }

  // --- Render Functions ---
  function renderTasks() {
    updateFilteredTasks();
    tasksList.innerHTML = "";
    if (filteredTasks.length === 0) {
      emptyState.style.display = "flex";
      return;
    }
    emptyState.style.display = "none";
    filteredTasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = "task-item";
      if (task.completed) li.classList.add("completed");
      if (task.postponed) li.classList.add("postponed");
      li.setAttribute("data-id", task.id);
      li.tabIndex = 0;
      li.innerHTML = `
        <div class="task-info">
          <span class="task-title">${escapeHtml(task.title)}</span>
          <span class="task-date"><i class="fa fa-calendar"></i> ${
            task.dueDate || "-"
          }</span>
        </div>
        <div class="task-actions">
          <button class="edit-btn" title="Edit"><i class="fa fa-pen"></i></button>
          <button class="delete-btn" title="Delete"><i class="fa fa-trash"></i></button>
          <button class="postpone-btn" title="Postpone"><i class="fa fa-clock-rotate-left"></i></button>
          <button class="complete-btn" title="Mark as Complete"><i class="fa fa-check"></i></button>
        </div>
      `;
      // Microinteraction: fade in
      li.style.opacity = 0;
      setTimeout(() => (li.style.opacity = 1), 30);
      tasksList.appendChild(li);
    });
  }

  // --- Event Handlers ---
  addTaskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const title = document.getElementById("task-title").value.trim();
    const dueDate = document.getElementById("task-due-date").value;
    if (!title) return;
    const newTask = {
      id: generateId(),
      title,
      description: "", // can be edited in popup
      dueDate,
      completed: false,
      postponed: false,
      createdAt: new Date().toISOString(),
    };
    tasks.unshift(newTask);
    saveTasks();
    renderTasks();
    addTaskForm.reset();
  });

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    renderTasks();
  });
  searchInput.addEventListener("input", renderTasks);

  // Task actions (event delegation)
  tasksList.addEventListener("click", function (e) {
    const li = e.target.closest(".task-item");
    if (!li) return;
    const id = li.getAttribute("data-id");
    if (e.target.closest(".edit-btn")) {
      openPopup(id);
    } else if (e.target.closest(".delete-btn")) {
      if (confirm("Delete this task?")) {
        tasks = tasks.filter((t) => t.id !== id);
        saveTasks();
        renderTasks();
      }
    } else if (e.target.closest(".postpone-btn")) {
      const task = getTaskById(id);
      if (task) {
        task.postponed = !task.postponed;
        saveTasks();
        renderTasks();
      }
    } else if (e.target.closest(".complete-btn")) {
      const task = getTaskById(id);
      if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
      }
    } else {
      openPopup(id);
    }
  });

  // Keyboard accessibility for task items
  tasksList.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      const li = e.target.closest(".task-item");
      if (li) openPopup(li.getAttribute("data-id"));
    }
  });

  // --- Popup Logic ---
  function openPopup(id) {
    const task = getTaskById(id);
    if (!task) return;
    selectedTaskId = id;
    popupTitle.textContent = task.title;
    popupDesc.textContent = task.description || "No description.";
    popupDate.innerHTML = `<i class='fa fa-calendar'></i> Due: ${
      task.dueDate || "--"
    }`;
    popupStatus.innerHTML = `<i class='fa fa-clock'></i> Status: ${
      task.completed ? "Completed" : task.postponed ? "Postponed" : "Active"
    }`;
    popup.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // Animate popup
    popup.style.transform = "translate(-50%, -60%) scale(0.96)";
    setTimeout(() => {
      popup.style.transform = "translate(-50%, -50%) scale(1)";
      popup.style.transition = "transform 0.18s cubic-bezier(.4,2,.6,1)";
    }, 10);
  }
  function closePopup() {
    popup.classList.add("hidden");
    overlay.classList.add("hidden");
    selectedTaskId = null;
  }
  closePopupBtn.addEventListener("click", closePopup);
  overlay.addEventListener("click", closePopup);

  // Popup actions
  popupEdit.addEventListener("click", function () {
    if (!selectedTaskId) return;
    const task = getTaskById(selectedTaskId);
    if (!task) return;
    // Prompt for new title/desc
    const newTitle = prompt("Edit task title:", task.title);
    if (newTitle !== null && newTitle.trim() !== "") {
      task.title = newTitle.trim();
    }
    const newDesc = prompt("Edit task description:", task.description || "");
    if (newDesc !== null) {
      task.description = newDesc.trim();
    }
    saveTasks();
    renderTasks();
    openPopup(selectedTaskId);
  });
  popupDelete.addEventListener("click", function () {
    if (!selectedTaskId) return;
    if (confirm("Delete this task?")) {
      tasks = tasks.filter((t) => t.id !== selectedTaskId);
      saveTasks();
      renderTasks();
      closePopup();
    }
  });
  popupPostpone.addEventListener("click", function () {
    if (!selectedTaskId) return;
    const task = getTaskById(selectedTaskId);
    if (task) {
      task.postponed = !task.postponed;
      saveTasks();
      renderTasks();
      openPopup(selectedTaskId);
    }
  });

  // --- Helpers ---
  function escapeHtml(str) {
    return str.replace(/[&<>'"]/g, function (c) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      }[c];
    });
  }

  // --- Init ---
  loadTasks();
  renderTasks();
});
