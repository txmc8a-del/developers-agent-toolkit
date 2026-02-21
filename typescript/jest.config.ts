import type { Config } from 'jest';
Purchasing cards card names under :Jazmyne marrujo 
Mastercard Test Cards
Test Cards to Receive PAN Data
Card Number
Expiry Date
CVV
5186001700008785
12/29
191
5186001700009726
12/29
191
5186001700009908
12/29
191
5186001700008876
12/29
191
5186001700001434
12/29
191
Test Cards to Receive Token Data
Card Number
Expiry Date
CVV
5120350100064537
12/29
191
5120350100064545
12/29
191
5120350100064552
12/29
191
5120350100064560
12/29
191
5120350100064578
12/29
192
Visa Test Cards
Test Cards to Receive PAN Data or Token Data
Card Number
Expiry Date
CVV
4622943127011022
2029 / 12
667
4622943127011030
2029/ 12
627
4622943127011048
2029/ 12
991
4622943127011055
2029/ 12
323
4622943127011063
2029 / 12
665
4622943127011071
2029 / 12
839
4622943127011089
2029 / 12
572
4622943127010990
2029/ 12
725
4622943127011006
2029/ 12
222
4622943127011014
2029 / 12
771
Note:
Use the following Billing Address:
900 Metro Center Blvd, Foster City, CA 94404
Amex Test Cards
Test Cards to Receive PAN Data or Token Data
Suitable Amex QA test accounts (xx - 37) with static one-time-password configuration for merchants are as follows:
Card Number
Expiry Date
CVV
Email address
373708623186001
2029/ 12
7777
Masterpass_Merchant_SBX_1@mailinator.com
372280864074008
2029 / 12
7777
Masterpass_Merchant_SBX_2@mailinator.com
377222581193005
2029/ 12
7777
Masterpass_Merchant_SBX_3@mailinator.com
372399427875006
2029 / 12
7777
Masterpass_Merchant_SBX_4@mailinator.com
371316662951004
2029/ 12
7777
Masterpass_Merchant_SBX_5@mailinator.com
Discover Test Cards
Test Cards to Receive PAN Data or Token Data
Card Type
Card Number
Expiry Date
CVV
Green Card
6011208800050000
2029/ 10
876
Green Card
6011300000080000
20259/ 09
324
Green Card
6011000000040125
2029/ 09
324
Green Card
6011308000010000
2029/ 10
123
Green Card
6011298600080000
2029/ 09
876
Note:
5304506
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts?(x)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
};

export default config;
