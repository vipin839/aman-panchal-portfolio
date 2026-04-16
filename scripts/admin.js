(function () {
  const store = window.portfolioStore;
  if (!store) {
    return;
  }

  const ADMIN_ID = "AmanaPanchal";
  const ADMIN_PASS = "123456789";
  const AUTH_KEY = "amanPortfolioAdminAuth";

  const loginWrap = document.getElementById("adminLoginWrap");
  const loginForm = document.getElementById("adminLoginForm");
  const loginStatus = document.getElementById("loginStatus");
  const adminContent = document.getElementById("adminContent");

  if (!loginWrap || !loginForm || !loginStatus || !adminContent) {
    return;
  }

  const sectionLabels = {
    home: "Home",
    experience: "Experience",
    skills: "Skill Set",
    projects: "Projects",
    awards: "Honor & Awards",
    contact: "Contact me"
  };

  const tabsEl = document.getElementById("adminTabs");
  const cardsEl = document.getElementById("adminCards");
  const addCardBtn = document.getElementById("addCardBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");
  const logoutBtn = document.getElementById("logoutBtn");
  const statusEl = document.getElementById("adminStatus");

  let data = store.load();
  let activeSection = "home";
  let dirty = false;
  let editorInitialized = false;

  function setLoginStatus(message, mode) {
    loginStatus.textContent = message;
    loginStatus.classList.remove("ok", "warn", "error");
    if (mode) {
      loginStatus.classList.add(mode);
    }
  }

  function showLogin() {
    loginWrap.hidden = false;
    adminContent.hidden = true;
  }

  function showAdmin() {
    loginWrap.hidden = true;
    adminContent.hidden = false;

    if (!editorInitialized) {
      initEditor();
      editorInitialized = true;
    }
  }

  function initEditor() {
    if (!tabsEl || !cardsEl || !addCardBtn || !saveBtn || !resetBtn || !statusEl) {
      return;
    }

    function setStatus(message, mode) {
      statusEl.textContent = message;
      statusEl.classList.remove("warn", "ok");
      if (mode) {
        statusEl.classList.add(mode);
      }
    }

    function markDirty() {
      dirty = true;
      setStatus("Unsaved changes", "warn");
    }

    function generateId(prefix) {
      return prefix + "-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6);
    }

    function createTab(key) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "admin-tab" + (key === activeSection ? " active" : "");
      btn.textContent = sectionLabels[key] || key;
      btn.addEventListener("click", function () {
        activeSection = key;
        renderTabs();
        renderEditors();
      });
      return btn;
    }

    function renderTabs() {
      tabsEl.innerHTML = "";
      Object.keys(sectionLabels).forEach(function (key) {
        tabsEl.appendChild(createTab(key));
      });
    }

    function updateCardField(index, field, value) {
      const list = data.sections[activeSection] || [];
      if (!list[index]) {
        return;
      }
      list[index][field] = value;
      markDirty();
    }

    function removeCard(index) {
      data.sections[activeSection].splice(index, 1);
      markDirty();
      renderEditors();
    }

    function createEditorCard(card, index) {
      const wrapper = document.createElement("article");
      wrapper.className = "editor-card";

      const head = document.createElement("div");
      head.className = "editor-head";

      const heading = document.createElement("strong");
      heading.textContent = "Card " + String(index + 1);

      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove-btn";
      remove.textContent = "Remove";
      remove.addEventListener("click", function () {
        removeCard(index);
      });

      head.appendChild(heading);
      head.appendChild(remove);

      const grid = document.createElement("div");
      grid.className = "editor-grid";

      const titleLabel = document.createElement("label");
      titleLabel.textContent = "Title";
      const titleInput = document.createElement("input");
      titleInput.value = card.title || "";
      titleInput.placeholder = "Card title";
      titleInput.addEventListener("input", function (event) {
        updateCardField(index, "title", event.target.value);
      });
      titleLabel.appendChild(titleInput);

      const durationLabel = document.createElement("label");
      durationLabel.textContent = "Duration (month-year or full date)";
      const durationInput = document.createElement("input");
      durationInput.value = card.duration || "";
      durationInput.placeholder = "e.g. Oct 2023 - Feb 2024 or 15 Jul 2024 - Present";
      durationInput.addEventListener("input", function (event) {
        updateCardField(index, "duration", event.target.value);
      });
      durationLabel.appendChild(durationInput);

      const descLabel = document.createElement("label");
      descLabel.textContent = "Description (new line = bullet point)";
      const descInput = document.createElement("textarea");
      descInput.value = card.description || "";
      descInput.placeholder = "Add details";
      descInput.addEventListener("input", function (event) {
        updateCardField(index, "description", event.target.value);
      });
      descLabel.appendChild(descInput);

      grid.appendChild(titleLabel);
      grid.appendChild(durationLabel);
      grid.appendChild(descLabel);

      wrapper.appendChild(head);
      wrapper.appendChild(grid);
      return wrapper;
    }

    function renderEditors() {
      const cards = data.sections[activeSection] || [];
      cardsEl.innerHTML = "";

      if (!cards.length) {
        const empty = document.createElement("p");
        empty.className = "card";
        empty.textContent = "No cards in this section. Click Add Card to create one.";
        cardsEl.appendChild(empty);
        return;
      }

      cards.forEach(function (card, index) {
        cardsEl.appendChild(createEditorCard(card, index));
      });
    }

    addCardBtn.addEventListener("click", function () {
      const card = {
        id: generateId(activeSection),
        title: "New Card",
        duration: "",
        description: ""
      };
      data.sections[activeSection].push(card);
      markDirty();
      renderEditors();
    });

    saveBtn.addEventListener("click", function () {
      data = store.save(data);
      dirty = false;
      setStatus("Changes saved", "ok");
    });

    resetBtn.addEventListener("click", function () {
      const approved = window.confirm("Reset all sections to resume-based default cards?");
      if (!approved) {
        return;
      }

      data = store.reset();
      dirty = false;
      activeSection = "home";
      renderTabs();
      renderEditors();
      setStatus("Data reset to default resume content", "ok");
    });

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        localStorage.removeItem(AUTH_KEY);
        dirty = false;
        setLoginStatus("Logged out successfully", "ok");
        showLogin();
      });
    }

    window.addEventListener("beforeunload", function (event) {
      if (!dirty) {
        return;
      }
      event.preventDefault();
      event.returnValue = "";
    });

    renderTabs();
    renderEditors();
    setStatus("No unsaved changes", "ok");
  }

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const enteredId = String(formData.get("adminId") || "").trim();
    const enteredPass = String(formData.get("adminPassword") || "");

    if (enteredId === ADMIN_ID && enteredPass === ADMIN_PASS) {
      localStorage.setItem(AUTH_KEY, "1");
      setLoginStatus("Login successful", "ok");
      loginForm.reset();
      showAdmin();
      return;
    }

    setLoginStatus("Invalid ID or password", "error");
  });

  if (localStorage.getItem(AUTH_KEY) === "1") {
    showAdmin();
  } else {
    setLoginStatus("Waiting for login", "warn");
    showLogin();
  }
})();
