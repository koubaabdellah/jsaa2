(function ($) {
  Drupal.behaviors.himss_subscription = {
    attach: function (context) {
      $('form.himss-subscription', context)
        .once('himss_subscription', function (i, e) {
          var $form = $(e);

          $form.on('submit', function (event) {
            event.preventDefault();

            // Collect data.
            var data = {};
            $form.serializeArray().map(function (item) {
              data[item.name] = item.value;
            });

            // Trigger request.
            $form.trigger('subscription.request', [$form]);

            // Request.
            var prevent = $form.hasClass('prevent-default');
            $.post('https://www.himss.org/subscription', data)
              .always(function () {
                if (!prevent) {
                  $form.find('.form-content').hide();
                }
              })
              .done(function (response) {
                if (!prevent) {
                  $form.find('.form-success').show();
                }
                $form.trigger('subscription.success', [$form, response]);
              })
              .fail((response) => {
                if (!prevent) {
                  $form.find('.form-failure').show();
                }
                $form.trigger('subscription.failure', [$form, response]);
              });
          });
        });
    }
  };
})(jQuery);
;
