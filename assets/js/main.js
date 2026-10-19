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


  // Section 2 destination links open the group vlog before navigating.
  const vlogModal = document.querySelector("#vlog-modal");
  const vlogFrame = document.querySelector("#vlog-frame");
  const vlogContinue = document.querySelector("#vlog-continue");
  let vlogDestination = null;
  let previousFocus = null;

  const openVlog = (destination = null, destinationTitle = "your selected section") => {
    if (!vlogModal) return;
    vlogDestination = destination;
    previousFocus = document.activeElement;
    const title = document.querySelector("#vlog-title");
    const description = document.querySelector("#vlog-description");
    if (title) title.textContent = destination ? "Before you continue to " + destinationTitle + "." : "The story in under 12 minutes.";
    if (description) description.textContent = destination
      ? "Watch the group vlog before moving to your selected section. When you’re ready, continue to your chosen destination."
      : "The group vlog tells the same story in under 12 minutes. Close the video when you’re ready to return to the introduction.";
    if (vlogContinue) vlogContinue.textContent = destination ? "Continue to selected section →" : "Close vlog and return to reading";
    if (vlogFrame) vlogFrame.src = "https://www.youtube-nocookie.com/embed/WIiF43CbKcg?autoplay=1&rel=0";
    vlogModal.hidden = false;
    document.body.style.overflow = "hidden";
    const closeButton = vlogModal.querySelector(".vlog-close");
    if (closeButton) closeButton.focus();
  };

  const closeVlog = () => {
    if (!vlogModal) return;
    vlogModal.hidden = true;
    if (vlogFrame) vlogFrame.src = "about:blank";
    document.body.style.overflow = "";
    vlogDestination = null;
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  };

  document.querySelectorAll("[data-vlog-gate]").forEach(link => {
    link.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      const title = link.dataset.vlogTitle || link.textContent.trim() || "your selected section";
      openVlog(link.href, title);
    });
  });

  document.querySelectorAll("[data-vlog-open]").forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();
      openVlog();
    });
  });

  if (vlogModal) {
    vlogModal.querySelectorAll("[data-vlog-close]").forEach(control => control.addEventListener("click", closeVlog));
    if (vlogContinue) vlogContinue.addEventListener("click", () => {
      const destination = vlogDestination;
      if (destination) {
        // Stop the embedded video before changing pages.
        if (vlogFrame) vlogFrame.src = "about:blank";
        window.location.href = destination;
      } else {
        closeVlog();
      }
    });
    document.addEventListener("keydown", event => {
      if (!vlogModal.hidden && event.key === "Escape") closeVlog();
    });
  }

});
