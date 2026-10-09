document.addEventListener("DOMContentLoaded", () => {
  const ripple = document.querySelector("#ripple");
  if (ripple) {
    const splash = () => {
      ripple.classList.remove("splash");
      void ripple.offsetWidth;
      ripple.classList.add("splash");
    };
    ripple.addEventListener("click", splash);
    ripple.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        splash();
      }
    });
  }

  document.querySelectorAll("[data-demand]").forEach(button => {
    button.addEventListener("click", () => {
      const value = Number(button.dataset.demand);
      const meter = document.querySelector("#demandMeter");
      const label = document.querySelector("#demandLabel");
      const description = document.querySelector("#demandText");
      if (meter) meter.style.width = `${value}%`;
      if (label) label.textContent = `Household demand · ${value}%`;
      if (description) {
        description.textContent = value < 50
          ? "A drought scenario: conservation becomes critical to maintaining service."
          : value > 80
            ? "A peak day: demand spikes, testing network capacity and resilience."
            : "A typical service day: steady demand with room for resilience.";
      }
    });
  });

  const droplet = document.querySelector(".droplet");
  if (droplet && window.matchMedia("(pointer:fine)").matches) {
    document.addEventListener("pointermove", event => {
      const x = (event.clientX / window.innerWidth - 0.5) * 10;
      const y = (event.clientY / window.innerHeight - 0.5) * 8;
      droplet.style.setProperty("--pointer-x", `${x}px`);
      droplet.style.setProperty("--pointer-y", `${y}px`);
    });
  }

  const currentPath = window.location.pathname.replace(/\/$/, "");
  document.querySelectorAll(".river-stop").forEach(link => {
    const href = new URL(link.href).pathname.replace(/\/$/, "");
    if (href && href === currentPath) link.classList.add("active");
  });
});
