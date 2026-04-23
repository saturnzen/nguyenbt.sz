import { personalInfoData } from "./personal_info_data.js";

export function render_personal_info() {
  const container = document.getElementById("personal-info");
  if (!container) return;

  container.innerHTML = `
    <h1 class="section-title mt-80">Thông tin cá nhân</h1>

    <ul class="mt-40 info">
      ${personalInfoData.basic.map(item => `
        <li>
          <span>${item.label}</span>
          <span class="info2">
            : ${
              item.link
                ? `<a href="${item.value}" target="_blank">${item.value}</a>`
                : item.value
            }
          </span>
        </li>
      `).join("")}

      <li class="cv-section">
        <span>CV</span>
        <span class="info2">
          : ${personalInfoData.cv.map(cv => `
              <a href="${cv.link}" target="_blank" style="margin-right:10px;">
                ${cv.name}
              </a>
            `).join("")}
        </span>
      </li>

      <li class="social_icon">
        ${personalInfoData.social.map(s => `
          <a href="${s.link}" target="_blank">
            <i class="${s.icon}"></i>
          </a>
        `).join("")}
      </li>
    </ul>
  `;
}

document.addEventListener("DOMContentLoaded", render_personal_info);