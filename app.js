// 四個 GitHub 專案連結
const projects = [
  { name: "自我介紹網站", url: "https://xie-0209.github.io/03-test" },
  { name: "計數器網站", url: "https://xie-0209.github.io/xie-count" },
  { name: "QR Code 生成器", url: "https://xie-0209.github.io/xie-qrcord" },
  { name: "BMI 計算器", url: "https://xie-0209.github.io/xie-BMI" }
];

const container = document.getElementById("cardsContainer");

// 生成每個卡片連結
projects.forEach(project => {
  const a = document.createElement("a");
  a.className = "link-card";
  a.href = project.url;
  a.target = "_blank";
  a.textContent = `🔹 ${project.name}`;
  container.appendChild(a);
});
