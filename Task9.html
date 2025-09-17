<!DOCTYPE html>
<html>
<head>
  <title>To-Do</title>
  <style>
    .done{text-decoration:line-through;color:gray}
  </style>
</head>
<body>
  <input id="task"><button onclick="add()">Add</button>
  <ul id="list"></ul>
  <script>
    let tasks=JSON.parse(localStorage.getItem("tasks"))||[];
    function render(){
      list.innerHTML="";
      tasks.forEach((t,i)=>{
        let li=document.createElement("li");
        li.textContent=t.text;
        if(t.done)li.classList.add("done");
        li.onclick=()=>{tasks[i].done=!tasks[i].done;save()};
        list.appendChild(li);
      });
    }
    function add(){
      if(task.value.trim()!==""){
        tasks.push({text:task.value,done:false});
        task.value="";save();
      }
    }
    function save(){
      localStorage.setItem("tasks",JSON.stringify(tasks));
      render();
    }
    render();
  </script>
</body>
</html>
