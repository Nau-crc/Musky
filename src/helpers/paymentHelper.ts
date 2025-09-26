import { PaymentPage } from '../pages/PaymentPage';

export class PaymentHelper {
    constructor(private paymentPage: PaymentPage) {}

    async completePayment(cardNumber: string, expiry: string, cvc: string, cardHolderName: string) {
        const paymentPage = this.paymentPage;
        
        await paymentPage.clickPay();
        await paymentPage.selectCreditCardPayment();
        await paymentPage.selectCreditCardPayment();
        await paymentPage.fillCardDetails('4242424242424242', '12/30', '123', 'Chris Evans');
        await paymentPage.clickPay();
    }
}