import { test, expect } from '@playwright/test';
import { WelcomePage } from '../src/pages/WelcomePage';
import { ContractHelper } from '../src/helpers/contractHelper';
import { ContractPage } from '../src/pages/ContractPage';
import { PlanPaymentHelper } from '../src/helpers/planPaymentHelper';
import { PlanPaymentPage } from '../src/pages/PlanPaymentPage';

let welcomePage: WelcomePage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  welcomePage = new WelcomePage(page);
});

test.afterAll(async ({ page }) => {
  await page.close();
});

test('Contract one dog insurance', async ({ page }) => {
    const contractPage = new ContractPage(page);
    const contractHelper = new ContractHelper(contractPage);
    const planPaymentPage = new PlanPaymentPage(page);
    const planPaymentHelper = new PlanPaymentHelper(planPaymentPage);

    await contractHelper.completePetForm();
    await expect(page).toHaveURL('https://staging.musky.es/cotizacion?utm_source=organic&utm_medium=home&step=6&pet=1');
    await planPaymentHelper.completePlanPayment();
});
