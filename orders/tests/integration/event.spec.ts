import { describe } from '@jest/globals';
import { createRequest, createResponse } from 'node-mocks-http';
import {
  OrderCreatedMessage,
  Order,
  LineItem,
} from '@commercetools/platform-sdk';
import { post } from '../../src/controllers/event.controller';

describe('Testing Event Controller', () => {
  it('Product Created', () => {
    const orderId = 'fc75c80a-35bb-4414-92b1-d7899534b6f2';

    const lineItem1: LineItem = {
      discountedPricePerQuantity: [],
      perMethodTaxRate: [],
      state: [
        {
          quantity: 1,
          state: {
            typeId: 'state',
            id: '0f088639-b700-472c-a309-9c7dfda01867',
          },
        },
      ],
      id: 'e07dc07c-3b14-4bcb-99a9-cd75a120104c',
      productId: '9660c9cf-d4af-4675-a43c-f41e8566bdde',
      productKey: 'rustic-country-queen-bed',
      name: {
        'en-US': 'Rustic Country Queen Bed',
        'en-GB': 'Rustic Country Queen Bed',
        'de-DE': 'Rustikales Queensize-Bett im Landhausstil',
      },
      productType: {
        typeId: 'product-type',
        id: '2912b0a4-6132-488c-a9c8-b409a6a03c45',
      },
      productSlug: {
        'en-US': 'rustic-country-queen-bed',
        'en-GB': 'rustic-country-queen-bed',
        'de-DE': 'rustikales-country-queen-bett',
      },
      variant: {
        id: 1,
        sku: 'RCQB-01',
        prices: [
          {
            id: 'bf752be4-9bfb-4b50-a359-51e2fd6ba466',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 329900,
              fractionDigits: 2,
            },
            country: 'DE',
          },
          {
            id: 'c2624a81-32a8-4db8-b19e-fef87a4de299',
            value: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 329900,
              fractionDigits: 2,
            },
            country: 'GB',
          },
          {
            id: '1c4d683b-7ec7-4706-86a8-9526674d622b',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 329900,
              fractionDigits: 2,
            },
            country: 'US',
          },
        ],
        images: [
          {
            url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Rustic_Country_Queen_Bed-1.1.jpeg',
            dimensions: {
              w: 5000,
              h: 5000,
            },
          },
        ],
        attributes: [
          {
            name: 'color',
            value: {
              'en-US': 'Tan:#D2B48C',
              'en-GB': 'Tan:#D2B48C',
              'de-DE': 'Bräunen:#D2B48C',
            },
          },
          {
            name: 'finish',
            value: {
              'en-US': 'Saddle Brown:#8b4513',
              'en-GB': 'Saddle Brown:#8b4513',
              'de-DE': 'Sattel braun:#8b4513',
            },
          },
          {
            name: 'productspec',
            value: {
              'en-US':
                '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
              'en-GB':
                '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
              'de-DE':
                '- Leather upholstery\n- Standard Queen size\n- Assembly on site',
            },
          },
        ],
        assets: [],
      },
      price: {
        id: 'c2624a81-32a8-4db8-b19e-fef87a4de299',
        value: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 329900,
          fractionDigits: 2,
        },
        country: 'GB',
      },
      quantity: 1,
      taxRate: {
        name: 'Standard VAT for UK',
        amount: 0.2,
        includedInPrice: true,
        country: 'GB',
        id: 'rcUi3qMF',
        key: 'vat-standard-uk',
        subRates: [],
      },
      addedAt: '2024-09-25T13:44:12.567Z',
      lastModifiedAt: '2024-09-25T13:44:12.567Z',
      priceMode: 'Platform',
      lineItemMode: 'Standard',
      totalPrice: {
        type: 'centPrecision',
        currencyCode: 'GBP',
        centAmount: 329900,
        fractionDigits: 2,
      },
      taxedPrice: {
        totalNet: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 274917,
          fractionDigits: 2,
        },
        totalGross: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 329900,
          fractionDigits: 2,
        },
        // taxPortions: [
        //   {
        //     rate: 0.2,
        //     amount: {
        //       type: 'centPrecision',
        //       currencyCode: 'GBP',
        //       centAmount: 54983,
        //       fractionDigits: 2,
        //     },
        //     name: 'Standard VAT for UK',
        //   },
        // ],
        totalTax: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 54983,
          fractionDigits: 2,
        },
      },
      taxedPricePortions: [],
    };

    const lineItems: Array<LineItem> = [
      lineItem1,
      {
        id: 'c3ea3eff-5a80-4f03-9b82-908b8bd11292',
        productId: '567e55ac-c75e-46b9-a523-1a58d02329e0',
        productKey: 'opal-king-bed',
        name: {
          'en-GB': 'Opal King Bed',
          'de-DE': 'Opal King Bett',
          'en-US': 'Opal King Bed',
        },
        productType: {
          typeId: 'product-type',
          id: '2912b0a4-6132-488c-a9c8-b409a6a03c45',
        },
        productSlug: {
          'en-GB': 'opal-king-bed',
          'de-DE': 'opal-kingsize-bett',
          'en-US': 'opal-king-bed',
        },
        variant: {
          id: 1,
          sku: 'MTB-023',
          prices: [
            {
              id: 'd486a23c-bd20-47f9-af7d-d3557cccd372',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 129900,
                fractionDigits: 2,
              },
              country: 'DE',
            },
            {
              id: '6a9bee7f-a486-49f3-97cd-e1244052e357',
              value: {
                type: 'centPrecision',
                currencyCode: 'GBP',
                centAmount: 129900,
                fractionDigits: 2,
              },
              country: 'GB',
            },
            {
              id: '63672a2c-0b65-4200-bf59-999dd715926e',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 129900,
                fractionDigits: 2,
              },
              country: 'US',
            },
          ],
          images: [
            {
              url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Opal_King_Bed-1.1.jpeg',
              dimensions: {
                w: 2000,
                h: 2000,
              },
            },
          ],
          attributes: [
            {
              name: 'productspec',
              value: {
                'en-GB': '- Assembly included',
                'de-DE': '- Montage inklusive',
                'en-US': '- Assembly included',
              },
            },
            {
              name: 'color',
              value: {
                'en-GB': 'Black:#000000',
                'de-DE': 'Schwarz:#000000',
                'en-US': 'Black:#000000',
              },
            },
          ],
          assets: [],
        },
        price: {
          id: '6a9bee7f-a486-49f3-97cd-e1244052e357',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 129900,
            fractionDigits: 2,
          },
          country: 'GB',
        },
        quantity: 1,
        discountedPricePerQuantity: [],
        taxRate: {
          name: 'Standard VAT for UK',
          amount: 0.2,
          includedInPrice: true,
          country: 'GB',
          id: 'rcUi3qMF',
          key: 'vat-standard-uk',
          subRates: [],
        },
        perMethodTaxRate: [],
        addedAt: '2024-09-25T13:44:12.567Z',
        lastModifiedAt: '2024-09-25T13:44:12.567Z',
        state: [
          {
            quantity: 1,
            state: {
              typeId: 'state',
              id: '0f088639-b700-472c-a309-9c7dfda01867',
            },
          },
        ],
        priceMode: 'Platform',
        lineItemMode: 'Standard',
        totalPrice: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 129900,
          fractionDigits: 2,
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 108250,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 129900,
            fractionDigits: 2,
          },
          // taxPortions: [
          //   {
          //     rate: 0.2,
          //     amount: {
          //       type: 'centPrecision',
          //       currencyCode: 'GBP',
          //       centAmount: 21650,
          //       fractionDigits: 2,
          //     },
          //     name: 'Standard VAT for UK',
          //   },
          // ],
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 21650,
            fractionDigits: 2,
          },
        },
        taxedPricePortions: [],
      },
      {
        id: 'e0503877-3a5c-44cf-9c63-e68bf94a20b7',
        productId: 'face9cfb-3804-410f-bc44-b425a652b6d5',
        productKey: 'geometric-pillow-case',
        name: {
          'en-US': 'Geometric Pillow Case',
          'en-GB': 'Geometric Pillow Case',
          'de-DE': 'Geometrischer Kissenbezug',
        },
        productType: {
          typeId: 'product-type',
          id: '2912b0a4-6132-488c-a9c8-b409a6a03c45',
        },
        productSlug: {
          'en-US': 'geometric-pillow-case',
          'en-GB': 'geometric-pillow-case',
          'de-DE': 'geometrischer-kissenbezug',
        },
        variant: {
          id: 1,
          sku: 'GPC-01',
          prices: [
            {
              id: '4429e36e-6a0e-4ccd-a1ec-08cd04837c32',
              value: {
                type: 'centPrecision',
                currencyCode: 'EUR',
                centAmount: 1999,
                fractionDigits: 2,
              },
              country: 'DE',
            },
            {
              id: 'e5a0bb82-49b2-4347-b237-e7c37305e209',
              value: {
                type: 'centPrecision',
                currencyCode: 'GBP',
                centAmount: 1999,
                fractionDigits: 2,
              },
              country: 'GB',
            },
            {
              id: '8a14e988-d13f-49e0-91d0-bb63d508905a',
              value: {
                type: 'centPrecision',
                currencyCode: 'USD',
                centAmount: 1999,
                fractionDigits: 2,
              },
              country: 'US',
            },
          ],
          images: [
            {
              url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-1.1.jpeg',
              dimensions: {
                w: 5000,
                h: 5000,
              },
            },
            {
              url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/b2c-lifestyle/Geometric_Pillow_Case-1.2.jpeg',
              dimensions: {
                w: 5000,
                h: 5000,
              },
            },
          ],
          attributes: [
            {
              name: 'color',
              value: {
                'en-US': 'Silver:#C0C0C0',
                'en-GB': 'Silver:#C0C0C0',
                'de-DE': 'Silber:#C0C0C0',
              },
            },
            {
              name: 'productspec',
              value: {
                'en-US':
                  '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable\n',
                'en-GB':
                  '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable',
                'de-DE':
                  '- Velvet fabric\n- Cotton lining\n- Pillow case comes with zip for easy removal\n- Pillow not included\n- Washable',
              },
            },
          ],
          assets: [],
        },
        price: {
          id: 'e5a0bb82-49b2-4347-b237-e7c37305e209',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 1999,
            fractionDigits: 2,
          },
          country: 'GB',
        },
        quantity: 1,
        discountedPricePerQuantity: [],
        taxRate: {
          name: 'Standard VAT for UK',
          amount: 0.2,
          includedInPrice: true,
          country: 'GB',
          id: 'rcUi3qMF',
          key: 'vat-standard-uk',
          subRates: [],
        },
        perMethodTaxRate: [],
        addedAt: '2024-09-25T13:44:12.567Z',
        lastModifiedAt: '2024-09-25T13:44:12.567Z',
        state: [
          {
            quantity: 1,
            state: {
              typeId: 'state',
              id: '0f088639-b700-472c-a309-9c7dfda01867',
            },
          },
        ],
        priceMode: 'Platform',
        lineItemMode: 'Standard',
        totalPrice: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 1999,
          fractionDigits: 2,
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 1666,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 1999,
            fractionDigits: 2,
          },
          // taxPortions: [
          //   {
          //     rate: 0.2,
          //     amount: {
          //       type: 'centPrecision',
          //       currencyCode: 'GBP',
          //       centAmount: 333,
          //       fractionDigits: 2,
          //     },
          //     name: 'Standard VAT for UK',
          //   },
          // ],
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 333,
            fractionDigits: 2,
          },
        },
        taxedPricePortions: [],
      },
    ];
    const order: Order = {
      customLineItems: [],
      customerId: '728af8d3-fd34-4bdc-8fe3-1be4b6dfbe88',
      customerEmail: 'jen@example.uk',
      totalPrice: {
        type: 'centPrecision',
        currencyCode: 'GBP',
        centAmount: 461799,
        fractionDigits: 2,
      },
      id: orderId,
      createdAt: '2024-09-25T13:44:12.776Z',
      lastModifiedAt: '2024-10-09T15:41:45.130Z',
      lineItems: lineItems,
      refusedGifts: [],
      syncInfo: [],
      version: 0,
      taxedPrice: {
        totalNet: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 384833,
          fractionDigits: 2,
        },
        totalGross: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 461799,
          fractionDigits: 2,
        },
        taxPortions: [
          {
            rate: 0.2,
            amount: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 76966,
              fractionDigits: 2,
            },
            name: 'Standard VAT for UK',
          },
        ],
        totalTax: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 76966,
          fractionDigits: 2,
        },
      },
      country: 'GB',
      taxedShippingPrice: {
        totalNet: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 0,
          fractionDigits: 2,
        },
        totalGross: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 0,
          fractionDigits: 2,
        },
        taxPortions: [
          {
            rate: 0.2,
            amount: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 0,
              fractionDigits: 2,
            },
            name: 'Standard VAT for UK',
          },
        ],
        totalTax: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 0,
          fractionDigits: 2,
        },
      },
      orderState: 'Confirmed',
      shipmentState: 'Pending',
      paymentState: 'Paid',
      taxMode: 'Platform',
      inventoryMode: 'None',
      taxRoundingMode: 'HalfEven',
      taxCalculationMode: 'LineItemLevel',
      origin: 'Merchant',
      shippingMode: 'Single',
      shippingInfo: {
        shippingMethodName: 'Standard Delivery',
        price: {
          type: 'centPrecision',
          currencyCode: 'GBP',
          centAmount: 10000,
          fractionDigits: 2,
        },
        shippingRate: {
          price: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 10000,
            fractionDigits: 2,
          },
          tiers: [],
        },
        taxRate: {
          name: 'Standard VAT for UK',
          amount: 0.2,
          includedInPrice: true,
          country: 'GB',
          id: 'rcUi3qMF',
          key: 'vat-standard-uk',
          subRates: [],
        },
        taxCategory: {
          typeId: 'tax-category',
          id: '6352fb61-6770-44d6-a45d-6475a03739fb',
        },
        deliveries: [
          {
            id: '3bf47b74-b50b-4eab-b50f-7a82769efae3',
            createdAt: '2024-10-09T15:17:34.883Z',
            items: [],
            parcels: [],
          },
          {
            id: '1ccf1a0b-d676-49ad-ae0b-831d04fe65dd',
            createdAt: '2024-10-09T15:41:45.122Z',
            items: [
              {
                id: 'e07dc07c-3b14-4bcb-99a9-cd75a120104c',
                quantity: 1,
              },
              {
                id: 'c3ea3eff-5a80-4f03-9b82-908b8bd11292',
                quantity: 1,
              },
              {
                id: 'e0503877-3a5c-44cf-9c63-e68bf94a20b7',
                quantity: 1,
              },
            ],
            parcels: [
              {
                id: 'b3063cbc-f352-4b96-9780-8d83a100df8e',
                createdAt: '2024-10-09T15:41:45.123Z',
                trackingData: {
                  trackingId: 'UA9123919239',
                  isReturn: false,
                },
                items: [],
              },
            ],
          },
        ],
        shippingMethod: {
          typeId: 'shipping-method',
          id: 'def8501c-30a4-4aaa-944d-46907232e768',
        },
        discountedPrice: {
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 0,
            fractionDigits: 2,
          },
          includedDiscounts: [
            {
              discount: {
                typeId: 'cart-discount',
                id: 'acb82655-f296-4f36-b802-c0f6cac686f9',
              },
              discountedAmount: {
                type: 'centPrecision',
                currencyCode: 'GBP',
                centAmount: 10000,
                fractionDigits: 2,
              },
            },
          ],
        },
        taxedPrice: {
          totalNet: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 0,
            fractionDigits: 2,
          },
          totalGross: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 0,
            fractionDigits: 2,
          },
          // taxPortions: [
          //   {
          //     rate: 0.2,
          //     amount: {
          //       type: 'centPrecision',
          //       currencyCode: 'GBP',
          //       centAmount: 0,
          //       fractionDigits: 2,
          //     },
          //     name: 'Standard VAT for UK',
          //   },
          // ],
          totalTax: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 0,
            fractionDigits: 2,
          },
        },
        shippingMethodState: 'MatchesCart',
      },
      shippingAddress: {
        firstName: 'Jennifer',
        lastName: 'Jones',
        streetName: 'Main Road',
        streetNumber: '100',
        postalCode: 'SW1A2AA',
        city: 'Westminster',
        country: 'GB',
      },
      shipping: [],
      discountCodes: [],
      cart: {
        typeId: 'cart',
        id: 'f4287488-bcae-42fa-b2e4-f587b443adf1',
      },
      paymentInfo: {
        payments: [
          {
            typeId: 'payment',
            id: 'dd92dfb8-777e-4495-95b8-362cf354c42d',
          },
        ],
      },
      billingAddress: {
        firstName: 'Jennifer',
        lastName: 'Jones',
        streetName: 'Main Road',
        streetNumber: '100',
        postalCode: 'SW1A2AA',
        city: 'Westminster',
        country: 'GB',
      },
    };
    const orderCreatedMessage: OrderCreatedMessage = {
      createdAt: '',
      id: '',
      lastModifiedAt: '',
      resource: { id: orderId, typeId: 'order' },
      resourceVersion: 0,
      sequenceNumber: 0,
      type: 'OrderCreated',
      version: 0,
      order: order,
    };
    const request = createRequest({
      method: 'POST',
      body: {
        message: {
          data: Buffer.from(JSON.stringify(orderCreatedMessage)).toString(
            'base64'
          ),
        },
      },
    });
    post(request, createResponse());
  });
});
