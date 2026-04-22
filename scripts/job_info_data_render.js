import { jobInfoData } from "./job_info_data.js";

export function renderJobInfo() {
  const container = document.getElementById("job-info-layout");

  if (!container) return;

  container.innerHTML = `
    <div class="job-info-layout el-c1h1">
      <div class="job-info-title"><h1>Kinh nghiệm</h1></div>
      <div class="icon_1">
        <span><i class="ic-toolbox icon_2"></i></span>
      </div>
      <ul class="job-info-content">
        ${jobInfoData.map(job => `
          <li class="job-item">
            <div class="job-title">${job.title}</div>
            <div class="job-time">
              <span class="timeline">${job.start} - </span>
              <span class="time_btn">${job.end}</span>
            </div>
            <ul>
              ${job.contents.map(c => `<li class="job_content">${c}</li>`).join("")}
            </ul>
          </li>
        `).join("")}
      </ul>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", renderJobInfo);