/* global instantsearch algoliasearch */
const search = instantsearch({
  indexName: 'wp_posts_product',
  searchClient: algoliasearch('X56ACOG9VF', '57d28028c810fd42ad1c8b5ea96872a6'),
  searchParameters: {
    attributesToSnippet: ["content"] 
  }
});
search.addWidgets([
  
  instantsearch.widgets.configure({
      hitsPerPage: 8,
  }),

  instantsearch.widgets.searchBox({
    container: '#marketplace-search',
    placeholder: 'Search for products, companies, articles and announcements',
  }),

  instantsearch.widgets.hits({
    container: '#search-hits',
    templates: {
      item: `
      <div class="ms-list">
          <a href="{{ permalink}}">
              <h6>{{#taxonomies.category.0}}<span class="ab__category">{{ taxonomies.category.0 }}</span>{{/taxonomies.category.0}} {{post_title}}</h6>
          </a>
      </div>
    `,
    },
  }),

  instantsearch.widgets
  .index({ indexName: 'wp_posts_company' })
  .addWidgets([
    instantsearch.widgets.hits({
      container: '#search-hits--company',
      templates: {
      item: `
          <div class="ms-list">
              <a href="{{ permalink}}"> 
                  <h6>{{post_title}}</h6>
              </a>
          </div>
            `,
      }
    }),
  ]),

  instantsearch.widgets
  .index({ indexName: 'wp_posts_articles' })
  .addWidgets([
    instantsearch.widgets.hits({
      container: '#search-hits--articles',
      templates: {
      item: `
          <div class="ms-list">
              <a href="{{ permalink}}"> 
                  <h6>{{#taxonomies.category.0}}<span class="ab__category">{{ taxonomies.category.0 }}</span>{{/taxonomies.category.0}} {{post_title}}</h6>
              </a>
          </div>
            `,
      }
    }),
  ]),

  instantsearch.widgets
  .index({ indexName: 'wp_posts_post' })
  .addWidgets([
    instantsearch.widgets.hits({
      container: '#search-hits--announcements',
      templates: {
      item: `
          <div class="ms-list">
              <a href="{{ permalink}}"> 
                  <h6>{{#taxonomies.category.0}}<span class="ab__category">{{ taxonomies.category.0 }}</span>{{/taxonomies.category.0}} {{post_title}}</h6>
              </a>
          </div>
            `,
      }
    }),
  ]),

]);

search.start();