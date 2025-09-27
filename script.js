// IntersectionObserver for reveal animations
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  items.forEach(item => observer.observe(item));

  // Registration form handler
  const form = document.getElementById("regForm");
  const regMsg = document.getElementById("regMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const college = document.getElementById("college").value.trim();
    const role = document.getElementById("role").value;

    if (!name || !email) {
      regMsg.textContent = "Please fill in Name and Email.";
      return;
    }

    const entry = { name, email, college, role, ts: new Date().toISOString() };
    let regs = JSON.parse(localStorage.getItem("tinkhack_reg") || "[]");
    regs.push(entry);
    localStorage.setItem("tinkhack_reg", JSON.stringify(regs));

    regMsg.textContent = "✅ Thanks! Registration saved.";
    form.reset();
  });
});

