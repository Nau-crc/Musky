import { expect } from 'playwright/test';
import { PaymentPage } from '../pages/PaymentPage';

export class PaymentHelper {
    constructor(private paymentPage: PaymentPage) {}

    async completePayment(cardNumber: string, expiry: string, cvc: string, cardHolderName: string) {
        const paymentPage = this.paymentPage;
        
        await paymentPage.clickPay();
        await paymentPage.selectCreditCardPayment();
        await paymentPage.selectCreditCardPayment();
        await paymentPage.fillCardDetails(cardNumber, expiry, cvc, cardHolderName);
        await paymentPage.submitPayment();
        
    }

    async verifyPaymentSuccess() {
        const paymentPage = this.paymentPage;
        return await paymentPage.verifyPaymentSuccess();
    }

    async verifyPaymentError() {
        const paymentPage = this.paymentPage;
        return await paymentPage.errorMessageVisible();
    }
}