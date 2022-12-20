const tablists = [...document.querySelectorAll(".tab-list")];
const tabs = [...document.querySelectorAll(".tab-item")];
const tabpanels = [...document.querySelectorAll(".tab-panel")];
const firstTab = tabs[0];
const lastTab = tabs[tabs.length - 1];

const setSelectedTab = () => {
  // get tab hash from url
  const tabHash = location.hash;
  
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

const initiateNav = () => {
  const orientation = innerWidth > 768 ? "horizontal" : "vertical";
  
  tablists.forEach((tl) => {
    tl.setAttribute("aria-orientation", orientation);
  });
};

onload = function () {
  initiateNav();

  if(location.hash) {
    // allow time to render content before set selected tab
    setTimeout(() => {
      setSelectedTab();
    }, 100);
  }
};

onresize = function () {
  initiateNav();
};

onhashchange = function () {
  setSelectedTab();
};

tabs.forEach((tab, tabIndex) => {
  tab.addEventListener("keydown", function (e) {
    e.preventDefault();

    const isVerticalOrientation = tablists.every(tl => {
      return tl.getAttribute("aria-orientation") === "vertical";
    });
    
    // activate tab with space key press
    if ((e.keyCode || e.which) === 32) {
      tab.click();
    }
    
    // focus the last tab with end key press
    if ((e.keyCode || e.which) === 35) {
      lastTab.focus();
    }
    
    // focus the first tab with home key press
    if ((e.keyCode || e.which) === 36) {
      firstTab.focus();
    }
    
    // focus the previous tab with left arrow key press
    if ((e.keyCode || e.which) === 37) {
      if (tab === firstTab) {
        lastTab.focus();
      } else {
        const previousTabIndex = tabIndex - 1;
        tabs[previousTabIndex].focus();
      }
    }
    
    // focus the previous tab with top arrow key press if orientation is vertical 
    if ((e.keyCode || e.which) === 38 && isVerticalOrientation) {
      if (tab === firstTab) {
        lastTab.focus();
      } else {
        const previousTabIndex = tabIndex - 1;
        tabs[previousTabIndex].focus();
      }
    }
    
    // focus the next tab with right arrow key press
    if ((e.keyCode || e.which) === 39) {
      if (tab === lastTab) {
        firstTab.focus();
      } else {
        const nextTabIndex = tabIndex + 1;
        tabs[nextTabIndex].focus();
      }
    }
    
    // focus the next tab with down arrow key press if orientation is vertical 
    if ((e.keyCode || e.which) === 40 && isVerticalOrientation) {
      if (tab === lastTab) {
        firstTab.focus();
      } else {
        const nextTabIndex = tabIndex + 1;
        tabs[nextTabIndex].focus();
      }
    }
  });
});