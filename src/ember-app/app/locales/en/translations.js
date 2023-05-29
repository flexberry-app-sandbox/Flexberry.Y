import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISYClientLForm from './forms/i-i-s-y-client-l';
import IISYProductLForm from './forms/i-i-s-y-product-l';
import IISYSaleLForm from './forms/i-i-s-y-sale-l';
import IISYClientEForm from './forms/i-i-s-y-client-e';
import IISYProductEForm from './forms/i-i-s-y-product-e';
import IISYSaleEForm from './forms/i-i-s-y-sale-e';
import IISYClientModel from './models/i-i-s-y-client';
import IISYProductModel from './models/i-i-s-y-product';
import IISYSaleModel from './models/i-i-s-y-sale';
import IISYSaleitemModel from './models/i-i-s-y-saleitem';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-y-client': IISYClientModel,
    'i-i-s-y-product': IISYProductModel,
    'i-i-s-y-sale': IISYSaleModel,
    'i-i-s-y-saleitem': IISYSaleitemModel
  },

  'application-name': 'Y',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Y',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Y',
          title: 'Y'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'супер-продажи': {
          caption: 'Супер продажи',
          title: 'Супер продажи',
          'i-i-s-y-sale-l': {
            caption: 'Продажи',
            title: ''
          },
          справочники: {
            caption: 'Справочники',
            title: 'Справочники',
            'i-i-s-y-client-l': {
              caption: 'Клиенты',
              title: 'Client'
            },
            'i-i-s-y-product-l': {
              caption: 'Товары',
              title: 'Product'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-y-client-l': IISYClientLForm,
    'i-i-s-y-product-l': IISYProductLForm,
    'i-i-s-y-sale-l': IISYSaleLForm,
    'i-i-s-y-client-e': IISYClientEForm,
    'i-i-s-y-product-e': IISYProductEForm,
    'i-i-s-y-sale-e': IISYSaleEForm
  },

});

export default translations;
