const tabs = [...document.querySelectorAll(".tab-item")];
const tabpanels = [...document.querySelectorAll(".tab-panel")];

const setSelectedTab = (tab) => {
  const tabHash = tab.hash;
  
  tabpanels.forEach((tp) => {
    const tabpanelID = tp.id;
    
    if (tabpanelID === tabHash.substring(1)) {
      tp.setAttribute("tabindex", "-1");
      tp.removeAttribute("hidden");
      tp.querySelector(".content").focus();
    } else {
      tp.removeAttribute("tabindex");
      tp.setAttribute("hidden", "true");
    }
  });

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