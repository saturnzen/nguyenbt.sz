const contents = [
  {
    text: {
      vn: "Phát hiện và góp phần xử lý gian lận giấy chứng nhận của công ty Kera, dẫn đến điều tra, thu hồi sản phẩm và khởi tố theo quy định.",
      en: "Detected and contributed to resolving fraudulent certification practices at Kera, leading to regulatory investigation, product recall, and legal action."
    },
    tags: ["compliance", "investigation"],
    impact: "Regulatory enforcement"
  },
  {
    text: {
      vn: "Nhạy bén thị trường: cung cấp thông tin về hai thuốc giá trị cao không được sản xuất trong thời gian dài, phù hợp với nhu cầu thị trường do hạn chế từ cơ chế đấu thầu.",
      en: "Provided market insight on two high-value drugs with prolonged production gaps, aligning supply decisions with unmet market demand under tender constraints."
    },
    tags: ["market", "supply"],
    impact: "Demand alignment"
  },
  {
    text: {
      vn: "Hỗ trợ tối ưu hóa quy trình kiểm nghiệm từ nguyên liệu đến thành phẩm, theo dõi độ ổn định và điều chỉnh công thức cho thuốc thay thế thuốc chủ lực bị cấm theo quy định mới.",
      en: "Optimized testing workflows from raw materials to finished products, monitored stability, and supported formulation adjustments for replacement of a banned key drug under new regulations."
    },
    tags: ["formulation", "optimization", "regulatory"],
    impact: "Regulatory adaptation"
  },
  {
    text: {
      vn: "Hỗ trợ điều chỉnh công thức độ hòa tan cho một thuốc chủ lực trong bối cảnh khan hiếm nguyên liệu trên toàn thị trường.",
      en: "Adjusted dissolution formulation for a key product during industry-wide raw material shortages, ensuring continued performance and supply."
    },
    tags: ["formulation", "supply"],
    impact: "Supply continuity"
  },
  {
    text: {
      vn: "Hỗ trợ điều chỉnh điều kiện hòa tan cho ba thuốc khi cập nhật tiêu chuẩn dược điển, đảm bảo tuân thủ mà không gián đoạn sản xuất.",
      en: "Adapted dissolution conditions for three products בעקבות pharmacopeia updates, ensuring compliance without disrupting production."
    },
    tags: ["qc", "regulatory", "optimization"],
    impact: "Compliance assurance"
  },
  {
    text: {
      vn: "Hỗ trợ xây dựng công thức và theo dõi đánh giá độ hòa tan cho các thuốc mới (Albendazol, Diosmin, Mebendazol, Ibuprofen bao đường, Clorphenesin carbamat).",
      en: "Supported formulation development and dissolution evaluation for multiple new drugs (Albendazole, Diosmin, Mebendazole, coated Ibuprofen, Chlorphenesin carbamate)."
    },
    tags: ["formulation", "development"],
    impact: "Pipeline support"
  },
  {
    text: {
      vn: "Giải quyết tranh cãi về kết quả kiểm nghiệm của một thuốc chủ lực khi nguyên liệu bị cảnh báo bởi viện kiểm nghiệm.",
      en: "Resolved critical discrepancies in test results for a key product when raw materials were flagged by regulatory laboratories."
    },
    tags: ["qc", "regulatory", "investigation"],
    impact: "Defensible outcome"
  },
  {
    text: {
      vn: "Chịu trách nhiệm kết luận chuyên môn khi có sự khác biệt giữa kết quả kiểm nghiệm của công ty và viện kiểm nghiệm.",
      en: "Took ownership of technical conclusions in cases of conflicting results between internal QC and regulatory laboratories."
    },
    tags: ["qc", "decision-making"],
    impact: "Accountability"
  },
  {
    text: {
      vn: "Đưa ra quyết định chuyên môn khi không đạt được đồng thuận giữa sản xuất và QC về kết quả kiểm nghiệm.",
      en: "Led technical decision-making in cases of disagreement between production and QC regarding testing outcomes."
    },
    tags: ["qc", "cross-functional"],
    impact: "Alignment resolution"
  },
  {
    text: {
      vn: "Thương lượng với nhà cung cấp để thu hồi nguyên liệu lỗi cho thuốc chủ lực, giảm thiểu rủi ro chi phí và đảm bảo chất lượng.",
      en: "Negotiated supplier accountability for defective raw materials in a key product, mitigating cost risks and ensuring quality standards."
    },
    tags: ["supplier", "compliance"],
    impact: "Cost risk mitigation"
  },
  {
    text: {
      vn: "Duy trì hoạt động kiểm nghiệm và đảm bảo cung ứng sản phẩm trong giai đoạn đại dịch COVID-19.",
      en: "Maintained testing operations and product supply continuity during COVID-19 disruptions."
    },
    tags: ["operation", "resilience"],
    impact: "Business continuity"
  }
];

let currentLang = "vn";
let currentFilter = "all";

document.getElementById("langBtn").addEventListener("click", () => {
  currentLang = currentLang === "vn" ? "en" : "vn";
  updateUI();
});

function filterByTag(tag) {
  currentFilter = tag;
  updateUI();
}

function updateUI() {
  renderContents();
  document.getElementById("langBtn").innerText =
    currentLang === "vn" ? "VN" : "EN";
}

function renderContents() {
  const container = document.getElementById("contentList");
  container.innerHTML = "";

  const filtered = contents.filter(item => {
    if (currentFilter === "all") return true;
    return item.tags.includes(currentFilter);
  });

  filtered.forEach(item => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.padding = "10px";
    div.style.margin = "10px";

    const text = document.createElement("p");
    text.innerText = item.text[currentLang];

    const tags = document.createElement("small");
    tags.innerText = "Tags: " + item.tags.join(", ");

    const impact = document.createElement("p");
    impact.innerText = "Impact: " + item.impact;

    div.appendChild(text);
    div.appendChild(tags);
    div.appendChild(impact);

    container.appendChild(div);
  });
}

// init
updateUI();