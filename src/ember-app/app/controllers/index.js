import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.супер-продажи.caption'),
          title: i18n.t('forms.application.sitemap.супер-продажи.title'),
          children: [{
            link: 'i-i-s-y-sale-l',
            caption: i18n.t('forms.application.sitemap.супер-продажи.i-i-s-y-sale-l.caption'),
            title: i18n.t('forms.application.sitemap.супер-продажи.i-i-s-y-sale-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.супер-продажи.справочники.caption'),
            title: i18n.t('forms.application.sitemap.супер-продажи.справочники.title'),
            children: [{
              link: 'i-i-s-y-client-l',
              caption: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-y-client-l.caption'),
              title: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-y-client-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-y-product-l',
              caption: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-y-product-l.caption'),
              title: i18n.t('forms.application.sitemap.супер-продажи.справочники.i-i-s-y-product-l.title'),
              icon: 'tasks',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})