import { languagesData } from "./languages_data.js";

export function renderSkills() {
  const container = document.querySelector(".job-info-layout.el-c1h3");
  if (!container) return;

  container.innerHTML = `
        <h1 class="job-info-title">Ngôn ngữ</h1>
        <div class="icon_1">
      <i class="ic-tools-2 icon_2"></i>
    </div>
    <div class="job-info-content">
      <ul class="skills-list">
        ${languagesData.map(skill => `
          <li>
            <b>${skill.name}:</b> ${skill.label}
            <div class="skill-bar">
              ${renderLevel(skill.level)}
            </div>
            <span class="skill-desc">${skill.desc}</span>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

function renderLevel(level) {
  const total = 5;

  return Array.from({ length: total }, (_, i) => `
    <div class="grade_level ${i < level ? "" : "grade_level_gray"}"></div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSkills);