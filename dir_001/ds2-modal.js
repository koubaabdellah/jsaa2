/* IMMEDIATELY ENVOKED */
! function ($) {
   "use strict";
   
   
   /* =========================================================
    * bootstrap-modal.js v2.3.2
    * http://twitter.github.com/bootstrap/javascript.html#modals
    * =========================================================
    * Copyright 2012 Twitter, Inc.
    *
    * Licensed under the Apache License, Version 2.0 (the "License");

    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * ========================================================= */
   /* MODAL CLASS DEFINITION
    * ====================== */

   var Modal = function (element, options) {
      this.options = options;
      this.$element = $(element).delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this));
      this.options.remote && this.$element.load(this.options.remote);
   };

   Modal.prototype = {
      constructor: Modal,
      toggle: function () {
         return this[!this.isShown ? 'show' : 'hide']()
      },

      show: function () {
         var that = this,
            e = $.Event('show');

         $('html, body').addClass('styled-by-modal');
         this.$element.trigger(e);
         $('body').attr('data-scroll-position', $(document).scrollTop());
         this.$element.closest('.modalwrapper').addClass('active');


         if (this.isShown || e.isDefaultPrevented()) return;

         this.isShown = true;

         this.escape();

         this.backdrop(function () {
            var transition = $.support.transition && that.$element.hasClass('fade');

            if (!that.$element.parent().length) {
               that.$element.appendTo(document.body); //don't move modals dom position
            }
            
            if(that.$element.height() > that.$element.closest('.modalwrapper').height()) {
               that.$element.addClass('modal-long-adjust');
            }

            if (transition) {
               that.$element[0].offsetWidth // force reflow
            }

            that.$element
               .addClass('in')
               .attr({
                    'aria-hidden': 'false'
                  , 'tabindex': '-1'
               });

            $('body > header, body > div, body > footer').not('.modal.fade, .modalwrapper, #modalwrappersdemo').addClass('hidden-by-modal').attr('aria-hidden', 'true');

            transition ?
               that.$element.one($.support.transition.end, function (e) {
                  // alert('show\n' + e.type + '\n' + e.target.className) // check if this gets fired on iPhone
                  that.$element.trigger('shown'), 
                  that.$element.parent().scrollTop(0),
                  that.$element.find(':focusable').eq(0).focus();
               }) :
               that.$element.trigger('shown'), 
               that.$element.parent().scrollTop(0),
               that.$element.find(':focusable').eq(0).focus();
            
         })
         $(document)
         .on('click.modal.backdrop', '.modalwrapper.active:not(.alertdialog)', $.proxy(this.hide, this))
         .on('click.modal.backdrop-content', '.modalwrapper.active *', function(e) { e.stopPropagation(); })
         .on('focusin.modal', function(e) {
            var $modal = $('.modal.fade.in');
            if(typeof $modal[0] !== 'undefined' && $modal[0] != e.target && !$modal.has($(e.target)).length) {
               $modal.find(':focusable')[0].focus();
            }
         });
      },

      hide: function (e) {         
         
         e && e.preventDefault();

         var that = this;

         e = $.Event('hide');

         this.$element.trigger(e);

         if (!this.isShown || e.isDefaultPrevented()) return;

         this.isShown = false;

         this.escape();

         $(document).off('focusin.modal');

         this.$element
            .removeClass('in')
            .attr({
               'aria-hidden': 'true',
               'tabindex': '-1'
            });
         
         $.support.transition && this.$element.hasClass('fade') ? this.hideWithTransition() : this.hideModal();
         
         //$('[data-toggle="modal"]').button('reset');
         $('html, body').removeClass('styled-by-modal');		 
		 this.$element.parent().removeClass('active');
		 $("div.modal-backdrop").remove();
         $(document).off('click.modal.backdrop').off('click.modal.backdrop-content');
      },

      escape: function () {
         var that = this;
         if (this.isShown && this.options.keyboard) {
            this.$element.on('keyup.dismiss.modal', function (e) {
               e.which == 27 && that.hide()
            })
         } else if (!this.isShown) {
            this.$element.off('keyup.dismiss.modal')
         }
      },

      hideWithTransition: function () {
         var that = this;
         this.$element.one($.support.transition.end, function () {
            that.$backdrop && that.$backdrop.removeClass('in');
            that.removeBackdrop();            
         })
      },

      hideModal: function () {
         var that = this;
         this.$element.removeClass('in');
      },

      removeBackdrop: function () {
         var that = this,
          timeout = setTimeout(function () {
             that.$backdrop && that.$backdrop.remove();
             that.$backdrop = null;
             that.$element.trigger('hidden');
             that.hideModal();
             $('.modalwrapper').removeClass('active');
             $('.hidden-by-modal').removeClass('hidden-by-modal').removeAttr('aria-hidden');               
          }, 350);
      },

      backdrop: function (callback) {
         var that = this,
            animate = this.$element.hasClass('fade') ? 'fade' : '';

         if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;

            this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
               .appendTo(document.body);

            this.$backdrop.click(
               this.options.backdrop == 'static' ?
               $.proxy(this.$element[0].focus, this.$element[0]) : $.proxy(this.hide, this)
            );

            if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

            this.$backdrop.addClass('in');

            if (!callback) return;

            doAnimate ?
               this.$backdrop.one($.support.transition.end, callback) :
               callback()

         } 
         else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass('in');

            $.support.transition && this.$element.hasClass('fade') ?
               this.$backdrop.one($.support.transition.end, callback) :
               callback()

         } 
         else if (callback) {
            callback()
         }
      }
   };


   /* MODAL PLUGIN DEFINITION
    * ======================= */

   var old = $.fn.modal;

   $.fn.modal = function (option) {
      return this.each(function () {
         var $this = $(this),
            data = $this.data('modal'),
            options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option);
         if (!data) $this.data('modal', (data = new Modal(this, options)));
         if (typeof option == 'string') data[option]();
         else if (options.show) data.show()
      })
   };

   $.fn.modal.defaults = {
      backdrop: true,
      keyboard: true,
      show: true
   };

   $.fn.modal.Constructor = Modal;


   /* MODAL NO CONFLICT
    * ================= */

   $.fn.modal.noConflict = function () {
      $.fn.modal = old;
      return this
   };


   /* MODAL DATA-API
    * ============== */

   $(document).on('click.modal.data-api', '[data-toggle="modal"]', function (e) {
      var $this = $(this),
           href = $this.attr('href'),
        $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, '') ) ), //strip for ie7
         option = $target.data('modal') ? 'toggle' : $.extend({
            remote: !/#/.test(href) && href
         }, $target.data(), $this.data());

      e.preventDefault();

      $target.modal(option).one('hidden', function () {
         $this.focus();
      });

   })
   .on('shown', '.modal', function () {
      setTimeout(function () {
         //DS2.modalDockedButtons();
      }, 0);
   })
   .on('hide', '.modal', function (e) {
      if ($(e.target).is('.modal')) {
         $(document).scrollTop($('body').attr('data-scroll-position'));
         $('body').removeAttr('data-scroll-position');
      }
   });
}(window.jQuery)