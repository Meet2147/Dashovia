// Product menu, phone menu, and the invite form. Pages work without it; it only adds behaviour.
(() => {
  const menu = document.querySelector(".menu");
  if (menu) {
    const btn = menu.querySelector("button");
    let hoveredAt = 0;   // a click right after hover-open shouldn't close it again
    const set = (open) => { menu.classList.toggle("open", open); btn.setAttribute("aria-expanded", String(open)); };
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      set(Date.now() - hoveredAt < 600 ? true : !menu.classList.contains("open"));
    });
    menu.querySelector(".drop").addEventListener("click", (e) => e.stopPropagation());
    menu.addEventListener("mouseenter", () => { if (matchMedia("(hover: hover)").matches) { hoveredAt = Date.now(); set(true); } });
    menu.addEventListener("mouseleave", () => matchMedia("(hover: hover)").matches && set(false));
    document.addEventListener("click", () => set(false));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { set(false); btn.focus(); } });
  }
  const burger = document.querySelector(".burger"), sheet = document.querySelector(".sheet");
  if (burger && sheet) {
    burger.addEventListener("click", () => {
      const open = !sheet.classList.contains("open");
      sheet.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });
  }

  const form = document.getElementById("form");
  if (form) {
    const RELAY = "https://toneos-relay.dashovia.workers.dev";
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const msg = document.getElementById("msg"), send = document.getElementById("send");
      const email = document.getElementById("email").value.trim();
      send.disabled = true; send.textContent = "Requesting…";
      try {
        const r = await fetch(RELAY + "/v1/waitlist", {
          method: "POST", headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, role: document.getElementById("role").value, os: document.getElementById("os").value }),
        });
        const out = await r.json().catch(() => ({}));
        if (!r.ok) throw new Error(out.error || "Couldn't add you just now. Try again in a minute.");
        msg.textContent = out.emailed ? "Your invite code is on its way to " + email + ". Check your inbox, and your spam folder just in case."
          : out.invited ? "You're in. We'll email your invite code to " + email + " within a day."
          : out.already ? "You're already on the list. Your invite code will come to " + email + " within a day."
          : "You're on the list. All 250 beta seats are taken for now; we'll email " + email + " when the next batch opens.";
        send.textContent = "Requested";
      } catch (err) {
        msg.textContent = err.message === "Failed to fetch" ? "Couldn't reach ToneOS. Check your connection and try again." : err.message;
        send.disabled = false; send.textContent = "Request an invite";
      }
    });
  }
})();
