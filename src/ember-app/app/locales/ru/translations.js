import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Y',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Y',
          title: 'Y'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
