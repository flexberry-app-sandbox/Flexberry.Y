export default {
  projections: {
    SaleE: {
      saleDate: {
        __caption__: 'Дата продажи'
      },
      client: {
        __caption__: 'Клиент',
        name: {
          __caption__: 'Клиент'
        }
      },
      saleitem: {
        __caption__: 'Товарная позиция',
        amount: {
          __caption__: 'Количество'
        },
        product: {
          __caption__: 'Товар',
          name: {
            __caption__: 'Товар'
          }
        }
      }
    },
    SaleL: {
      saleDate: {
        __caption__: 'Дата продажи'
      },
      client: {
        __caption__: 'Клиент',
        name: {
          __caption__: 'Клиент'
        }
      }
    }
  },
  validations: {
    saleDate: {
      __caption__: 'Дата продажи'
    },
    client: {
      __caption__: 'Клиент'
    },
    saleitem: {
      __caption__: 'Товарная позиция'
    }
  }
};
