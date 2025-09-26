import { Page, Locator } from '@playwright/test';

export class PaymentPage {
    private page: Page;
    private cardNumberInput: Locator;
    private cardExpiryInput: Locator;
    private cardCvcInput: Locator;
    private payButton: Locator;
    private cardHolderNameInput: Locator;
    private creditCardRadio: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardNumberInput = page.getByPlaceholder('1234 1234 1234 1234');
        this.cardExpiryInput = page.getByPlaceholder('MM / AA');
        this.cardCvcInput = page.getByPlaceholder('CVC');
        this.cardHolderNameInput = page.getByRole('textbox', { name: 'Nombre del titular de la' });
        this.payButton = page.getByRole('button', { name: 'Pagar' });
        this.creditCardRadio = page.locator("//*[@id='payment-form']//button[@aria-label='Pay with card']");
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

    
}