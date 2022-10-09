onLoadTasks = () => {
  tasks = JSON.parse(localStorage.getItem("Tasks"));
  if (tasks !== null) {
    for (item of tasks) {
      var entry = document.createElement("li");
      entry.id = item.title + item.id;
      var a = document.createElement("a");
      entry.className = "p-3";
      a.appendChild(
        document.createTextNode(
          `${item.title} -- ${item.id} -- | Click here if it has been done. |`
        )
      );
      var deleteButton = document.createElement("button");
      deleteButton.appendChild(document.createTextNode("delete"));
      a.appendChild(deleteButton);
      if (item.status === "Done") {
        a.classList.add(
          "border",
          "border-dark",
          "p-3",
          "rounded-2",
          "text-bg-secondary"
        );
      } else {
        a.classList.add("border", "border-dark", "p-3", "rounded-2");
      }
      const x = item;
      a.onclick = function () {
        var tasks = JSON.parse(localStorage.getItem("Tasks"));
        var selected = x;
        var index = tasks.findIndex((i) => i.id === selected.id);

        if (index > -1) {
          // only splice array when item is found
          tasks[index].status = "Done"; // 2nd parameter means remove one item only
        }
        window.localStorage.setItem("Tasks", JSON.stringify(tasks));
        document
          .getElementById(selected.id)
          .getElementsByTagName("a")[0]
          .classList.add("text-bg-secondary");
      };
      deleteButton.onclick = function () {
        deleteTask(x);
      };
      entry.appendChild(a);
      tasksList.appendChild(entry);
    }
  } else {
    var tasks = [];
  }
};

addTask = () => {
  tasks = JSON.parse(localStorage.getItem("Tasks"));
  if (tasks !== null) {
  } else {
    var tasks = [];
  }
  var TaskStatus = "To do";
  const TaskTitle = document.getElementById("TaskTitle").value;
  const TaskId = Math.floor(Math.random() * 10000000);
  task = {
    status: TaskStatus,
    title: TaskTitle,
    id: TaskId,
  };
  tasks.push(task);

  window.localStorage.setItem("Tasks", JSON.stringify(tasks));
  showTasks();
};

showTasks = () => {
  tasks = JSON.parse(localStorage.getItem("Tasks"));
  if (tasks !== null) {
  } else {
    var tasks = [];
  }
  for (item of tasks) {
    var entry = document.createElement("li");
    entry.id = item.title + item.id;
    var a = document.createElement("a");
    entry.className = "p-3";
    a.appendChild(
      document.createTextNode(
        `${item.title} -- ${item.id} -- | Click here if it has been done. |`
      )
    );
    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("delete"));
    a.appendChild(deleteButton);
    a.classList.add("border", "border-dark", "p-3", "rounded-2");
    const x = item;
    a.onclick = function () {
      var tasks = JSON.parse(localStorage.getItem("Tasks"));
      var selected = x;
      var index = tasks.findIndex((i) => i.id === selected.id);

      if (index > -1) {
        // only splice array when item is found
        tasks[index].status = "Done"; // 2nd parameter means remove one item only
      }
      window.localStorage.setItem("Tasks", JSON.stringify(tasks));
      document
        .getElementById(selected.id)
        .getElementsByTagName("a")[0]
        .classList.add("text-bg-secondary");

      tasks = JSON.parse(localStorage.getItem("Tasks"));
    };
    deleteButton.onclick = function () {
      deleteTask(x);
    };
    entry.appendChild(a);
  }
  tasksList.appendChild(entry);
};

doneTask = (r) => {
  var tasks = JSON.parse(localStorage.getItem("Tasks"));
  var selected = r;
  var index = tasks.findIndex((i) => i.id === selected.id);
  if (index > -1) {
    // only splice array when item is found
    tasks[index].status = "Done"; // 2nd parameter means remove one item only
  }
  window.localStorage.setItem("Tasks", JSON.stringify(tasks));
  document
    .getElementById(selected.id)
    .getElementsByTagName("a")[0]
    .classList.add("text-bg-secondary");
};

deleteTask = (r) => {
  var tasks = JSON.parse(localStorage.getItem("Tasks"));
  var selected = r;
  var index = tasks.findIndex((i) => i.id === selected.id);
  if (index > -1) {
    // only splice array when item is found
    tasks.splice(index, 1); // 2nd parameter means remove one item only
  }
  window.localStorage.setItem("Tasks", JSON.stringify(tasks));
  document.getElementById(selected.id).remove();
};
