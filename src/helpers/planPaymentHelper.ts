import { PlanPaymentPage } from '../pages/PlanPaymentPage';

export class PlanPaymentHelper {

    constructor(private planPaymentPage: PlanPaymentPage) {}

    async completePlanPayment() {
        const planPaymentPage = this.planPaymentPage;

        await planPaymentPage.selectMonthlyPlan();
        await planPaymentPage.selectCivilLiability();
        await planPaymentPage.selectNoOption();
        await planPaymentPage.clickHire();
        await planPaymentPage.selectFirstPlan();
        await planPaymentPage.selectSecondPlan();
        await planPaymentPage.selectThirdPlan();
        await planPaymentPage.clickContinue();
        await planPaymentPage.fillName('Chris');
        await planPaymentPage.fillLastName('Evans');
        await planPaymentPage.ownerDateOfBirth('1981-06-13');
        await planPaymentPage.fillId('60914375W');
        await planPaymentPage.fillEmail('e@gmail.com');
        await planPaymentPage.fillPhoneNumber('623458982');
        await planPaymentPage.clickContinue();
        await planPaymentPage.fillAddressType('Calle');
        await planPaymentPage.fillAddress('Falsa');
        await planPaymentPage.fillStreetNumber('123');
        await planPaymentPage.fillFloor('1');
        await planPaymentPage.fillDoor('A');
        await planPaymentPage.fillPostalCode('28080');
        await planPaymentPage.clickContinue();
        await planPaymentPage.acceptTermsAndConditions();
        await planPaymentPage.clickPay();
        }
}