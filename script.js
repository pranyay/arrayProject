const work= [
    { task: 1, time: "06:00", taskName: "Wake up" },
    { task: 2, time: "08:00", taskName: "Study" },
    { task: 3, time: "12:00", taskName: "Lunch" }
];

let workList= document.getElementById("workList")
work.forEach(user=>{
    const li= document.createElement("li");
    li.textContent= `Task: ${user.task}, Time: ${user.time}, TaskName: ${user.taskName}` ;
    workList.appendChild(li);
});