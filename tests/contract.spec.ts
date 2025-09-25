import { test, expect } from '@playwright/test';
import { WelcomePage } from '../src/pages/WelcomePage';
import { ContractHelper } from '../src/helpers/contractHelper';
import { ContractPage } from '../src/pages/ContractPage';
import { PlanPaymentHelper } from '../src/helpers/planPaymentHelper';
import { PlanPaymentPage } from '../src/pages/PlanPaymentPage';

let welcomePage: WelcomePage;
let contractHelper: ContractHelper;
let planPaymentHelper: PlanPaymentHelper;

test.describe('Pet insurance contracts', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    welcomePage = new WelcomePage(page);

    const contractPage = new ContractPage(page);
    contractHelper = new ContractHelper(contractPage);

    const planPaymentPage = new PlanPaymentPage(page);
    planPaymentHelper = new PlanPaymentHelper(planPaymentPage);
  });

  test.afterAll(async ({ page }) => {
    await page.close();
  });

  test('Single contract one dog insurance', async () => {
    await contractHelper.fillPetForm();
    await planPaymentHelper.completePlanPayment();
  });

  test('Contract two dogs insurance', async () => {
    await contractHelper.fillPetForm();

    await welcomePage.addAnotherPet();

    await contractHelper.fillPetForm();

    await planPaymentHelper.completePlanPayment();
  });

  test('Contract one dog insurance with discount coupon', async () => {
    await contractHelper.fillPetForm({ promoCode: 'CHRIS20S' });
    await planPaymentHelper.completePlanPayment();
  });

  test('Edit pet info', async () => {
    await contractHelper.fillPetForm();
    await planPaymentHelper.completePlanPayment();

    await contractHelper.editPetForm();
  });
});
