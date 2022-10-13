/* global googletag,DFPSlots,DFPSlotsLoaded,DFPSlotsTargeting,DFPSlotsRefresh */

const gptadslots = [];

/**
 * Defines DFP slot.
 *
 * @param {string} slot
 *   Ad slot name.
 * @param {string} id
 *   Ad slot id.
 * @param {array<number, number>} sizes
 *   Ad slot sizes.
 * @param {array<string>} pos
 *   Ad slot pos value.
 * @param {array<string, array<number, number>>} map
 *   Size mapping.
 */
function DFPDefineSlot(slot, id, sizes, pos, map) {
  let DFPSlot = sizes.length
    ? googletag.defineSlot(slot, sizes, id)
    : googletag.defineOutOfPageSlot(slot, id);
  if (pos) {
    DFPSlot = DFPSlot.setTargeting('pos', [pos]);
  }

  // https://support.google.com/dfp_premium/answer/3423562?hl=en
  if (map.length) {
    let mapping = googletag.sizeMapping();
    // eslint-disable-next-line no-restricted-syntax, no-var, vars-on-top
    for (var i in map) {
      if (map.hasOwnProperty(i)) {
        mapping = mapping.addSize(map[i][0], map[i][1]);
      }
    }
    mapping = mapping.build();
    DFPSlot = DFPSlot.defineSizeMapping(mapping);
  }

  // https://support.google.com/dfp_premium/answer/3072674?hl=en
  // DFPSlot = DFPSlot.setCollapseEmptyDiv(true);
  if (DFPSlot && typeof DFPSlot.addService === 'function') {
    gptadslots.push(DFPSlot.addService(googletag.pubads()));
  }
}

/**
 * Returns the width of the window.
 *
 * @see http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
 *
 * @return {number}
 *   Window width.
 */
function windowWidth() {
  // Non-IE.
  if (typeof window.innerWidth === 'number') {
    return window.innerWidth;
  }

  // IE 6+ in 'standards compliant mode'
  if (document.documentElement && document.documentElement.clientWidth) {
    return document.documentElement.clientWidth;
  }

  // IE 4 compatible.
  if (document.body && document.body.clientWidth) {
    return document.body.clientWidth;
  }

  // Sorry, your browser is weird.
  return 0;
}

/**
 * Returns the height of the window.
 *
 * @see http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
 *
 * @return {number}
 *   Window height.
 */
// eslint-disable-next-line no-unused-vars
function windowHeight() {
  // Non-IE.
  if (typeof window.innerHeight === 'number') {
    return window.innerHeight;
  }

  // IE 6+ in 'standards compliant mode'
  if (document.documentElement && document.documentElement.clientHeight) {
    return document.documentElement.clientHeight;
  }

  // IE 4 compatible.
  if (document.body && document.body.clientHeight) {
    return document.body.clientHeight;
  }

  // Sorry, your browser is weird.
  return 0;
}

/**
 * Checks if screen size matches mobile breakpoint.
 * @return {number|boolean}
 *   Flag indicating that mobile ads should be used.
 */
function enterpriseAdsIsMobile() {
  const width = windowWidth();
  return width && width < 768;
}

/**
 * Check if slot should be displayed.
 *
 * @param {object} dataset
 *   Ad slot element dataset.
 * @return {boolean|boolean}
 *   Flag indicating that ad element matches breakpoint.
 */
function enterpriseAdsIsDisplayed(dataset) {
  // Has mobile flag.
  if (typeof dataset.mobile !== 'undefined') {
    return enterpriseAdsIsMobile() === !!dataset.mobile;
  }

  // No position is an OOP slot and it should be displayed.
  // If matches the breakpoint.
  const isMobileSlot = dataset.slot.indexOf('_mobile') !== -1;
  return !dataset.pos || enterpriseAdsIsMobile() === isMobileSlot;
}

/**
 * Gets parent by selector.
 *
 * @param {HTMLElement} element
 *   Element to find the parent for.
 * @param {string} selector
 *   Selector.
 * @return {null|*}
 *   Parent found or null if none.
 */
function getParentBySelector(element, selector) {
  // Get the closest matching element
  for (; element && element !== document; element = element.parentNode) {
    if (element.matches(selector)) {
      return element;
    }
  }
  return null;
}

/**
 * Autodetect ad placeholders on the page.
 */
(function () {
  // Define all keys.
  Object.keys(DFPSlots).forEach(function (key) {
    DFPSlotsLoaded[key] = {};
  });

  // Read slots on the page.
  let index;
  let element;
  let parent;

  const elements = document.getElementsByClassName('enterprise-ads');
  for (index = elements.length - 1; index >= 0; index--) {
    element = elements[index];
    if (
      !!element.dataset &&
      typeof DFPSlotsLoaded[element.dataset.slot] !== 'undefined'
    ) {
      // Mobile flag.
      if (typeof DFPSlots[element.dataset.slot].mobile !== 'undefined') {
        element.dataset.mobile = DFPSlots[element.dataset.slot].mobile
          ? '1'
          : '';
      }
      if (enterpriseAdsIsDisplayed(element.dataset)) {
        DFPSlotsLoaded[element.dataset.slot][element.dataset.pos] = element.id;
        continue; // eslint-disable-line no-continue
      }
    }

    // Delete element and its .block-enterprise-ads parent.
    parent = getParentBySelector(element, '.block-enterprise-ads');
    if (!parent) {
      parent = element;
    }
    parent.parentNode.removeChild(parent);
  }
})();

/**
 * GoogleTag: define slots.
 */
googletag.cmd.push(function () {
  // Define slots.
  let DFPSlot;
  // eslint-disable-next-line no-restricted-syntax
  for (DFPSlot in DFPSlots) {
    // Javascript.
    if (!DFPSlots.hasOwnProperty(DFPSlot)) {
      continue; // eslint-disable-line no-continue
    }

    // Slot is not added to the page.
    if (typeof DFPSlotsLoaded[DFPSlot] === 'undefined') {
      continue; // eslint-disable-line no-continue
    }

    // Positions loaded.
    /* eslint-disable no-loop-func */
    Object.keys(DFPSlotsLoaded[DFPSlot]).forEach(function (pos) {
      const id = DFPSlotsLoaded[DFPSlot][pos];

      const slot = DFPSlots[DFPSlot].slot;
      const map = DFPSlots[DFPSlot].map || [];
      const sizes = DFPSlots[DFPSlot].sizes;

      DFPDefineSlot(slot, id, sizes, pos, map);
    });
    /* eslint-enable no-loop-func */
  }

  // Hides the ad slots if not filled, can be defined by slot:
  // https://support.google.com/dfp_premium/answer/3072674
  googletag.pubads().collapseEmptyDivs();

  // Custom targeting.
  if (typeof DFPSlotsTargeting !== 'undefined') {
    Object.keys(DFPSlotsTargeting).forEach(function (key) {
      googletag.pubads().setTargeting(key, DFPSlotsTargeting[key]);
    });
  }

  // Enable single request.
  // googletag.pubads().enableSingleRequest();

  // Execute.
  googletag.enableServices();
});

// Display ads.
googletag.cmd.push(function () {
  const nodes = document.getElementsByClassName('enterprise-ads');

  if (nodes.length) {
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Display.
      if (enterpriseAdsIsDisplayed(node.dataset)) {
        googletag.display(node.id);
      }
    }
  }
});

/**
 * Quick check that ad slot element is fully visible on screen.
 *
 * @param {HTMLElement} element
 *   Element to find the parent for.
 * @returns {boolean}
 *   Flag if visible.
 */
function enterpriseAdsIsElementFullyVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= windowHeight();
}

/**
 * Quick check that ad slot is visible partially on screen.
 *
 * @param gptadslot
 *   DFP ad slot.
 * @returns {boolean}
 *   Flag if visible.
 */
function enterpriseAdsIsSlotFullyVisible(gptadslot) {
  const id = gptadslot.getSlotElementId();
  const element = document.getElementById(id);
  return element ? enterpriseAdsIsElementFullyVisible(element) : false;
}

/**
 * Get slot position.
 *
 * @param gptadslot
 * @returns {string|boolean}
 */
function enterpriseAdsGetSlotPos(gptadslot) {
  const id = gptadslot.getSlotElementId();
  const element = document.getElementById(id);
  return element && element.dataset && element.dataset.pos || false;
}

/**
 * Get slot name.
 *
 * @param gptadslot
 * @returns {string|boolean}
 */
function enterpriseAdsGetSlotName(gptadslot) {
  const id = gptadslot.getSlotElementId();
  const element = document.getElementById(id);
  return element && element.dataset && element.dataset.slot || false;
}

// Refresh ads.
if (DFPSlotsRefresh && DFPSlotsRefresh.interval) {
  // Refresh N times.
  // -1 is infinite.
  let refreshLimit = parseInt(DFPSlotsRefresh.limit || -1);
  if (refreshLimit) {
    const refreshVisible = !!DFPSlotsRefresh.visible;
    const refreshSlots = DFPSlotsRefresh.slots || [];
    const refreshLog = !!DFPSlotsRefresh.log;

    window.gptRefreshCounter = 0;
    googletag.cmd.push(function () {
      window.gptRefreshInterval = setInterval(function () {
        if (refreshLog) {
          console.log('gpt:refresh', 'tick', window.gptRefreshCounter % DFPSlotsRefresh.interval);
        }
        if (++window.gptRefreshCounter % DFPSlotsRefresh.interval === 0) {
          if (!refreshVisible) {
            googletag.pubads().refresh(gptadslots);

            // Dec the limit.
            refreshLimit--;
          } else {
            let refreshed = false;
            gptadslots.forEach(function (gptadslot) {
              const pos = enterpriseAdsGetSlotPos(gptadslot);
              const slot = enterpriseAdsGetSlotName(gptadslot);

              // Skip if limiting by slot is on.
              if (refreshSlots.length && refreshSlots.indexOf(pos || slot || '') === -1) {
                return;
              }

              // Check if visible.
              if (enterpriseAdsIsSlotFullyVisible(gptadslot)) {
                googletag.pubads().refresh([gptadslot]);

                // Log.
                if (refreshLog) {
                  console.log('gpt:refresh', 'refreshed', pos, slot);
                }

                // Mark that something was refreshed.
                refreshed = true;
              } else {
                // Log.
                if (refreshLog) {
                  console.log('gpt:refresh', 'not in view', pos, slot);
                }
              }
            });

            // Dec the limit if refreshed.
            if (refreshed) {
              refreshLimit--;
            }
          }

          // Limit is 0.
          if (refreshLog) {
            console.log('gpt:refresh', 'limit', refreshLimit);
          }
          if (refreshLimit === 0) {
            clearInterval(window.gptRefreshInterval);
          }
        }
      }, 1000);
    });
  }
}
;
