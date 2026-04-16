(function () {
  const store = window.portfolioStore;
  if (!store) {
    return;
  }

  const data = store.load();
  const page = document.body.getAttribute("data-page") || "home";

  function getPathValue(root, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : "";
    }, root);
  }

  function bindProfile() {
    document.querySelectorAll("[data-bind]").forEach(function (node) {
      const value = getPathValue(data, node.getAttribute("data-bind"));
      if (value !== "") {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-bind-src]").forEach(function (node) {
      const value = getPathValue(data, node.getAttribute("data-bind-src"));
      if (value) {
        node.setAttribute("src", value);
      }
    });
  }

  function renderDescription(text) {
    const lines = String(text || "")
      .split("\n")
      .map(function (line) {
        return line.trim();
      })
      .filter(Boolean);

    if (lines.length > 1) {
      const list = document.createElement("ul");
      lines.forEach(function (line) {
        const item = document.createElement("li");
        item.textContent = line;
        list.appendChild(item);
      });
      return list;
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = lines[0] || "No description added.";
    return paragraph;
  }

  function createCard(card) {
    const article = document.createElement("article");
    article.className = "card";

    const top = document.createElement("div");
    top.className = "card-top";

    const title = document.createElement("h3");
    title.textContent = card.title || "Untitled";
    top.appendChild(title);

    if (card.duration) {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = card.duration;
      top.appendChild(pill);
    }

    article.appendChild(top);
    article.appendChild(renderDescription(card.description));

    return article;
  }

  function renderSectionCards() {
    const targets = document.querySelectorAll("[data-section-cards]");
    targets.forEach(function (target) {
      const key = target.getAttribute("data-section-cards");
      const cards = data.sections[key] || [];

      target.innerHTML = "";
      if (!cards.length) {
        const empty = document.createElement("p");
        empty.className = "card";
        empty.textContent = "No cards available in this section.";
        target.appendChild(empty);
        return;
      }

      cards.forEach(function (card) {
        target.appendChild(createCard(card));
      });
    });
  }

  function setActiveNav() {
    const active = document.querySelector('[data-nav="' + page + '"]');
    if (active) {
      active.classList.add("active");
    }
  }

  function setupMobileNav() {
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("siteNav");
    if (!toggle || !menu) {
      return;
    }

    toggle.addEventListener("click", function () {
      menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", menu.classList.contains("open") ? "true" : "false");
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setYear() {
    const year = new Date().getFullYear();
    document.querySelectorAll("#year").forEach(function (node) {
      node.textContent = String(year);
    });
  }

  bindProfile();
  renderSectionCards();
  setActiveNav();
  setupMobileNav();
  setYear();
})();
