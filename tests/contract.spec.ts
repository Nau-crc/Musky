import { test, expect } from '@playwright/test';
import { WelcomePage } from '../src/pages/WelcomePage';
import { ContractHelper } from '../src/helpers/contractHelper';
import { ContractPage } from '../src/pages/ContractPage';
import { PlanPaymentHelper } from '../src/helpers/planPaymentHelper';
import { PlanPaymentPage } from '../src/pages/PlanPaymentPage';
import { PaymentHelper } from '../src/helpers/paymentHelper';
import { PaymentPage } from '../src/pages/PaymentPage';

let welcomePage: WelcomePage;
let contractHelper: ContractHelper;
let planPaymentHelper: PlanPaymentHelper;
let paymentHelper: PaymentHelper;

test.describe('Pet insurance contracts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    welcomePage = new WelcomePage(page);

    const contractPage = new ContractPage(page);
    contractHelper = new ContractHelper(contractPage);

    const planPaymentPage = new PlanPaymentPage(page);
    planPaymentHelper = new PlanPaymentHelper(planPaymentPage);

    const paymentPage = new PaymentPage(page);
    paymentHelper = new PaymentHelper(paymentPage);
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('Single contract one dog insurance', async () => {
    await contractHelper.startContract();
    await contractHelper.petInfoFiller({});
    await contractHelper.contactInfoFiller({});
    await contractHelper.finalSteps();
    await planPaymentHelper.completePlanPayment();
    await paymentHelper.completePayment('4242424242424242', '12/30', '123', 'Chris Evans');
  });

  test('Contract two dogs insurance', async () => {
    await contractHelper.startContract();
    await contractHelper.petInfoFiller({});
    await planPaymentHelper.addPetToPlan();
    await contractHelper.petInfoFiller({});
    await contractHelper.contactInfoFiller({});
    await contractHelper.promoCodeFiller({});
    await contractHelper.finalSteps();


    await planPaymentHelper.completePlanPayment();
  });

  test('Contract one dog insurance with discount coupon', async () => {
    await contractHelper.startContract();
    await contractHelper.petInfoFiller({});
    await contractHelper.contactInfoFiller({});
    await contractHelper.promoCodeFiller({});
    await planPaymentHelper.completePlanPayment();
  });

  test('Edit pet info', async () => {
    await contractHelper.startContract();
    await contractHelper.petInfoFiller({});
    await contractHelper.contactInfoFiller({});
    await contractHelper.finalSteps();
    await planPaymentHelper.completePlanPayment();
    await contractHelper.petInfoFiller({petName: 'Max'});

  });
  
});
