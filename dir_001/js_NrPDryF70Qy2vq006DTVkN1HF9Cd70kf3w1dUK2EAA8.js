"use strict";

/**
 * @file
 * Functionality to provide AppNexus integration.
 */
(function ($, Drupal, drupalSettings, apntag) {
  "use strict";

  Drupal.behaviors.appNexus = {
    attach: function attach(context, settings) {
      // Create a queue on the apntag object.
      apntag.anq = apntag.anq || []; // Push commands to loading queue, to allow for async loading.

      apntag.anq.push(function () {
        var adList = drupalSettings.attsite_paragraphs.attsite_bp_ad.list || []; // Set global page options.

        apntag.setPageOpts({
          member: 9367
        }); // Define ad tags.

        $.each(adList, function (id, data) {
          apntag.defineTag({
            tagId: data.tagId,
            sizes: data.sizes,
            targetId: data.targetId,
            keywords: JSON.parse('{' + data.keywords + '}')
          });
        }); // Start loading the tags.

        apntag.loadTags();
      });
    }
  };
})(window.jQuery, window.Drupal, window.drupalSettings, window.apntag = window.apntag || {});;
