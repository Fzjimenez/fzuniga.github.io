const observer = new IntersectionObserver(
  entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    }
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
