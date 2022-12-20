const tabs = [...document.querySelectorAll(".tab-item")];

const setSelectedTab = (tab) => {
  const tabHash = tab.hash;

  tabs.forEach((t) => {
    const hash = t.hash;

    if (hash === tabHash) {
      t.removeAttribute("tabindex");
      t.setAttribute("aria-selected", "true");
    } else {
      t.setAttribute("tabindex", "-1");
      t.setAttribute("aria-selected", "false");
    }
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    setSelectedTab(tab);
  });
});