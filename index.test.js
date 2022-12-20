describe('initiate tabs', () => {
  test('orientation is horizontal', () => {
    // default innerWidth by jsdom is 1024
    global.initiateNav();

    expect(tablists.every(tl => tl.getAttribute("aria-orientation") === "horizontal")).toBeTruthy();
  });

  test('orientation is vertical', () => {
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 600,
    });

    global.initiateNav();
    
    expect(tablists.every(tl => tl.getAttribute("aria-orientation") === "vertical")).toBeTruthy();
  });
});

describe('click random tab 1', () => {
  let tab, index;

  beforeAll(() => {
    tab = global.tab1;
    index = global.tab1Index;
  })

  test('trigger click method of the tab', () => {
    tab.click();
    expect(location.hash).toBe(tab.hash);
  });
  
  test('only clicked tab is selected', () => {
    expect(tab.getAttribute("aria-selected") === "true").toBeTruthy();
    expect(global.tabs.filter(t => t.getAttribute("aria-selected") === "false")).toHaveLength(global.tabs.length - 1);
  });
  
  test('only related tab panel is shown', () => {
    const tabpanel = global.tabpanels.find(tp => tp.getAttribute("aria-labelledby") === tab.id);
    expect(tabpanel.hasAttribute("hidden")).toBeFalsy();
    expect(global.tabpanels.filter(tp => tp.hasAttribute("hidden"))).toHaveLength(global.tabpanels.length - 1);
  });

  test('move focus to the last tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 35 }));
    expect(document.activeElement).toEqual(global.lastTab);
  });

  test('move focus to the first tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 36 }));
    expect(document.activeElement).toEqual(global.firstTab);
  });

  test('move focus to the previous tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 37 }));

    if (tab === global.firstTab) {
      expect(document.activeElement).toEqual(global.lastTab);
    } else {
      const previousTabIndex = index - 1;
      const previousTab = global.tabs[previousTabIndex];
      expect(document.activeElement).toEqual(previousTab);
    }
  });

  test('move focus to the next tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 39 }));

    if (tab === global.lastTab) {
      expect(document.activeElement).toEqual(global.firstTab);
    } else {
      const nextTabIndex = index + 1;
      const nextTab = global.tabs[nextTabIndex];
      expect(document.activeElement).toEqual(nextTab);
    }
  });
});

describe('click random tab 2', () => {
  let tab, index;

  beforeAll(() => {
    tab = global.tab2;
    index = global.tab2Index;
  })

  test('trigger click method of the tab', () => {
    tab.click();
    expect(location.hash).toBe(tab.hash);
  });
  
  test('only clicked tab is selected', () => {
    expect(tab.getAttribute("aria-selected") === "true").toBeTruthy();
    expect(global.tabs.filter(t => t.getAttribute("aria-selected") === "false")).toHaveLength(global.tabs.length - 1);
  });
  
  test('only related tab panel is shown', () => {
    const tabpanel = global.tabpanels.find(tp => tp.getAttribute("aria-labelledby") === tab.id);
    expect(tabpanel.hasAttribute("hidden")).toBeFalsy();
    expect(global.tabpanels.filter(tp => tp.hasAttribute("hidden"))).toHaveLength(global.tabpanels.length - 1);
  });

  test('move focus to the last tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 35 }));
    expect(document.activeElement).toEqual(global.lastTab);
  });

  test('move focus to the first tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 36 }));
    expect(document.activeElement).toEqual(global.firstTab);
  });

  test('move focus to the previous tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 37 }));

    if (tab === global.firstTab) {
      expect(document.activeElement).toEqual(global.lastTab);
    } else {
      const previousTabIndex = index - 1;
      const previousTab = global.tabs[previousTabIndex];
      expect(document.activeElement).toEqual(previousTab);
    }
  });

  test('move focus to the next tab', () => {
    tab.dispatchEvent(new KeyboardEvent('keydown',  { 'keyCode': 39 }));

    if (tab === global.lastTab) {
      expect(document.activeElement).toEqual(global.firstTab);
    } else {
      const nextTabIndex = index + 1;
      const nextTab = global.tabs[nextTabIndex];
      expect(document.activeElement).toEqual(nextTab);
    }
  });
});
