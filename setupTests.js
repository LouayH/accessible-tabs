const shuffleArray = (array) => {
  const _array = [...array];

  for(let i = 0; i < _array.length; i++) {
    const currentItem = _array[i];

    const randomIndex = Math.floor(Math.random() * _array.length);
    const randomItem = _array[randomIndex];

    const tempItem = currentItem;
    _array[i] = randomItem;
    _array[randomIndex] = tempItem;
  }

  return _array;
}

document.body.innerHTML = `
  <nav>
    <ul role="tablist" class="tab-list" aria-label="Pages">
      <li role="presentation">
        <a role="tab" id="page-1" class="tab-item" href="#about-us">About us</a>
      </li>
      <li role="presentation">
        <a role="tab" id="page-2" class="tab-item" href="#our-services">Our Services</a>
      </li>
      <li role="presentation">
        <a role="tab" id="page-3" class="tab-item" href="#rewards">Rewards</a>
      </li>
      <li role="presentation">
        <a role="tab" id="page-4" class="tab-item" href="#careers">Careers</a>
      </li>
    </ul>

    <ul class="tab-list" role="tablist" aria-label="Legal">
      <li role="presentation">
        <a role="tab" id="legal-1" class="tab-item" href="#terms-of-use">Terms of use</a>
      </li>
      <li role="presentation">
        <a role="tab" id="legal-2" class="tab-item" href="#privacy-policy">Privacy Policy</a>
      </li>
    </ul>
  </nav>

  <div class="tab-panel-container">
    <section role="tabpanel" id="about-us" aria-labelledby="page-1" class="tab-panel" hidden>
      <div class="content" tabindex="0">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur tellus ac dolor vulputate pellentesque. Sed mauris purus, porttitor id libero nec, sodales congue velit. Suspendisse in diam at justo lobortis facilisis. Donec imperdiet augue suscipit, fermentum magna in, semper magna. Nulla laoreet urna sem. Duis tempor consequat arcu. Suspendisse pellentesque lectus at nibh luctus condimentum. Vestibulum sed scelerisque augue. Praesent ut turpis enim. Etiam posuere ipsum nec velit tincidunt, id mattis elit lobortis. Integer quam dui, condimentum et tristique ac, molestie in tellus. Cras pharetra interdum orci in euismod. Nam semper tellus in elit porttitor, eu accumsan lorem congue.
        </p>
      </div>
    </section>
    <section role="tabpanel" id="our-services" aria-labelledby="page-2" class="tab-panel" hidden>
      <div class="content" tabindex="0">
        <h2>Our Services</h2>
        <p>
          Suspendisse potenti. Etiam mollis egestas sodales. Mauris orci eros, commodo a sapien id, elementum feugiat quam. Mauris velit metus, finibus ac tortor quis, porta tincidunt velit. Vivamus tincidunt sodales quam, venenatis venenatis quam pharetra ut. Suspendisse aliquet elit sit amet eleifend dignissim. Cras faucibus fermentum nulla, ut sagittis est dignissim vel. Etiam faucibus dolor quam, a rhoncus nibh imperdiet eget. Aliquam tincidunt iaculis quam, vel semper sem interdum nec. Pellentesque hendrerit, libero sit amet pharetra molestie, nisi lacus fringilla diam, elementum molestie augue ex a lacus. Vivamus vel feugiat felis, vel mattis quam. Proin purus neque, semper id est ut, eleifend gravida nisl. Nulla pellentesque odio vitae ligula rhoncus aliquet. Aenean eleifend vitae eros sed facilisis. Aenean at eleifend est. Donec a pretium justo.
        </p>
      </div>
    </section>
    <section role="tabpanel" id="rewards" aria-labelledby="page-3" class="tab-panel" hidden>
      <div class="content" tabindex="0">
        <h2>Rewards</h2>
        <p>
          Nullam vel neque eu massa volutpat auctor in nec nunc. Proin sit amet erat eget erat consequat ornare sed vel diam. Suspendisse sit amet viverra eros. Quisque mattis nibh et faucibus luctus. Donec non porttitor mi. Aliquam sollicitudin risus non euismod sodales. Nullam mi enim, placerat at odio a, porttitor porttitor velit. In tristique venenatis nisi. In mi mi, placerat quis quam id, viverra ullamcorper lacus. Donec ac tristique diam, ac aliquam lorem. Etiam accumsan purus at molestie consequat. Nulla quis tincidunt erat. Vivamus tincidunt mattis neque et euismod.
        </p>
      </div>
    </section>
    <section role="tabpanel" id="careers" aria-labelledby="page-4" class="tab-panel" hidden>
      <div class="content" tabindex="0">
        <h2>Careers</h2>
        <p>
          Nullam leo justo, laoreet at tincidunt et, varius nec justo. Suspendisse sed enim feugiat, tincidunt ante id, sodales odio. Suspendisse venenatis tellus quis erat tempus malesuada. Sed eu iaculis orci. Fusce at arcu condimentum, mollis eros in, mattis dolor. Vestibulum consectetur aliquet pellentesque. Pellentesque lacinia, est in tempus sollicitudin, nisl neque maximus elit, eget venenatis nunc odio vitae tortor. Pellentesque ullamcorper egestas sem, sit amet efficitur nisi tincidunt eget. Maecenas in faucibus nisi. Sed blandit nulla vitae elit consectetur, ut feugiat mauris suscipit. Mauris tempor ornare nunc non molestie. Vivamus nec tellus sagittis, porta odio et, semper leo. Pellentesque congue consequat ipsum, quis pellentesque lorem rutrum at. Duis risus velit, ornare et dignissim a, iaculis id sapien.
        </p>
      </div>
    </section>
    <section role="tabpanel" id="terms-of-use" aria-labelledby="legal-1" class="tab-panel" hidden>
      <div class="content" tabindex="0">
        <h2>Terms of use</h2>
        <p>
          Vivamus vel tellus viverra, sodales diam et, aliquam erat. Fusce non quam lacus. Nullam ut bibendum erat, ac consectetur justo. Proin tincidunt nulla in lectus ornare, vitae pulvinar justo malesuada. Donec dapibus lorem eget quam ultrices varius. Aliquam placerat sagittis ipsum vitae efficitur. Proin id dictum tellus. Praesent non lorem augue. In et mauris ac orci pharetra egestas.
        </p>
      </div>
    </section>
    <section role="tabpanel" id="privacy-policy" aria-labelledby="legal-2" class="tab-panel" hidden>
      <div class="content" tabindex="0">
        <h2>Privacy Policy</h2>
        <p>
          Integer non eros et purus feugiat mattis. Sed enim felis, accumsan vel odio sed, malesuada mattis est. Aliquam porttitor ornare luctus. Donec blandit urna eu enim pretium fringilla. Ut nec porta justo, in pretium erat. Curabitur consectetur pellentesque tempus. Vivamus ut libero id nulla suscipit scelerisque. Pellentesque tristique aliquam pulvinar. Ut laoreet sem dictum suscipit iaculis. Nulla condimentum viverra dolor malesuada blandit. Quisque efficitur orci mi, a mattis diam egestas ut.
        </p>
      </div>
    </section>
  </div>
`;

beforeAll(() => {
  global.tablists = [...document.querySelectorAll(".tab-list")];
  global.tabs = [...document.querySelectorAll(".tab-item")];
  global.tabpanels = [...document.querySelectorAll(".tab-panel")];
  global.firstTab = tabs[0];
  global.lastTab = tabs[tabs.length - 1];

  global.setSelectedTab = (tab) => {
    if(tab) {
      tab.clicked();
    }

    const tabHash = tab.hash;
    
    global.tabpanels.forEach((tp) => {
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

    global.tabs.forEach((t) => {
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

  global.initiateNav = () => {
    const orientation = innerWidth > 768 ? "horizontal" : "vertical";
    
    tablists.forEach((tl) => {
      tl.setAttribute("aria-orientation", orientation);
    });
  };

  global.tabs.forEach((tab, tabIndex) => {
    tab.addEventListener("click", function () {
      tab.clicked = jest.fn();
      setSelectedTab(tab);
    });
    
    tab.addEventListener("keydown", function (e) {
      e.preventDefault();
      
      // focus the last tab with end key press
      if ((e.keyCode || e.which) === 35) {
        global.lastTab.focus();
      }
      
      // focus the first tab with home key press
      if ((e.keyCode || e.which) === 36) {
        global.firstTab.focus();
      }
      
      // focus the previous tab with left arrow key press
      if ((e.keyCode || e.which) === 37) {
        if (tab === firstTab) {
          global.lastTab.focus();
        } else {
          const previousTabIndex = tabIndex - 1;
          global.tabs[previousTabIndex].focus();
        }
      }
      
      // focus the next tab with right arrow key press
      if ((e.keyCode || e.which) === 39) {
        if (tab === lastTab) {
          global.firstTab.focus();
        } else {
          const nextTabIndex = tabIndex + 1;
          global.tabs[nextTabIndex].focus();
        }
      }
    });
  });

  // elect 2 randoms tabs to test them
  const shuffledTabs = shuffleArray(global.tabs);

  global.tab1 = shuffledTabs[0];
  global.tab1Index = global.tabs.findIndex(t => t.id === global.tab1.id);

  global.tab2 = shuffledTabs[1];
  global.tab2Index = global.tabs.findIndex(t => t.id === global.tab2.id);
});
