import { Page, Locator } from '@playwright/test';

export class PaymentPage {
    private page: Page;
    private cardNumberInput: Locator;
    private cardExpiryInput: Locator;
    private cardCvcInput: Locator;
    private payButton: Locator;
    private cardHolderNameInput: Locator;
    private creditCardRadio: Locator;
    private submitPaymentButton: Locator;
    public successPayment: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardNumberInput = page.getByPlaceholder('1234 1234 1234 1234');
        this.cardExpiryInput = page.getByRole('textbox', { name: 'Expiration' });
        this.cardCvcInput = page.getByRole('textbox', { name: 'CVC' });
        this.cardHolderNameInput = page.getByRole('textbox', { name: 'Cardholder name' });
        this.payButton = page.getByRole('button', { name: 'Pagar' });
        this.creditCardRadio = page.locator('.AnimatePresence-inner').first();
        this.submitPaymentButton = page.getByTestId('hosted-payment-submit-button');
        this.successPayment = page.getByText('¡Tu pago se ha completado con éxito! 🤩 Dff y R y tú ya formáis parte de Musky.');
    }

    async selectCreditCardPayment() {
        await this.creditCardRadio.click();
    }

    async fillCardDetails(cardNumber: string, expiry: string, cvc: string, cardHolderName: string) {
        await this.cardNumberInput.fill(cardNumber);
        await this.cardExpiryInput.fill(expiry);
        await this.cardCvcInput.fill(cvc);
        await this.cardHolderNameInput.fill(cardHolderName);
    }

    async clickPay() {
        await this.payButton.click();
    }

    async submitPayment() {
        await this.submitPaymentButton.click();
    }

    async verifyPaymentSuccess() {
        await this.successPayment.isVisible();
    }

    async errorMessageVisible() {
        return await this.page.getByText('El número de tarjeta no es válido.').isVisible();
    }
}