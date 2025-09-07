const container = document.getElementById('certificate-grid-container');
const template = document.getElementById('certificate-template');
import { data } from './certificates.js';

data.forEach(cert => {
  const clone = template.content.cloneNode(true);
  const wrapper = clone.querySelector('.certificate_container_flex');
  wrapper.classList.add(`cert--${cert.id}`);
  if (cert.id % 2 === 0) wrapper.classList.add('border_for_cert');

  const aTag = clone.querySelector('a');
  aTag.href = cert.link;
  const imgTag = clone.querySelector('.cert-img');
  imgTag.src = cert.img;

  clone.querySelector('.name_of_cert').textContent = cert.name;
  const jobContents = clone.querySelectorAll('.job_content');
  jobContents[0].textContent = cert.info1 || '';
  jobContents[1].textContent = cert.info2 || '';
  jobContents[2].textContent = cert.info3 || '';
  jobContents[3].textContent = cert.courses || '';

  container.appendChild(clone);
});
