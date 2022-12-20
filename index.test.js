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