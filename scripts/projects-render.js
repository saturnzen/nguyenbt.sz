// projects.js
import { projects } from "./projects-data.js";

function renderProjects() {
  const container = document.getElementById("projects-container");
  container.innerHTML = projects
    .map(
      (p) => `
      <div class="project_layout">
        <div><img class="project-img img-fluid" src="${p.img}" alt="${p.alt}"></div>
        <div class="border_project"><a href="${p.link}" target="_blank">${p.title}</a></div>
        <div class="border_project">
          <span class="time_btn">${p.year}</span>
          <i class="icon-user-1 icon-3"></i>
          <span>${p.org}</span>
          <i class="icon-lamp icon-3"></i>
          <span>${p.role}</span>
        </div>
        <table>
          <tr><td>Mô tả</td><td>${p.desc}</td></tr>
          <tr><td>Nhiệm vụ</td><td>${p.tasks
            .map((t) => `<li class="job_content_2">${t}</li>`)
            .join("")}</td></tr>
          <tr><td>Công nghệ</td><td>${p.tech
            .map((t) => `<li class="job_content_2">${t}</li>`)
            .join("")}</td></tr>
          ${
            p.extra
              ? `<tr><td>Dự án</td><td>${p.extra
                  .map((e) => `<li class="job_content_2">${e}</li>`)
                  .join("")}</td></tr>`
              : ""
          }
        </table>
      </div>
    `
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);