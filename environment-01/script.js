"use strict";

window.addEventListener("load", initApp);

let studentList = [];

async function initApp() {
  studentList = await getData();
  console.log(studentList);
  filterStudentsByEnrolled();
  showStudents();
}

async function getData() {
  const response = await fetch("students.json");
  const data = await response.json();

  return data;
}

function showStudents() {
  document.querySelector("#students-list").innerHTML = "";

  for (const student of studentList) {
    showStudent(student);
  }
}

function showStudent(student) {
  const myHTML = `
    <li>${student.name} - ${student.mail}, semester: ${student.semester}, enrolled: ${student.enrolled} </li>
    `;

  document
    .querySelector("#students-list")
    .insertAdjacentHTML("beforeend", myHTML);
}

function filterStudentsByEnrolled(params) {
  studentList = studentList.filter((student) => student.enrolled);
}