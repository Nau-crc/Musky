import { Page, Locator } from '@playwright/test';

export class PaymentPage {
    private page: Page;
    private cardNumberInput: Locator;
    private cardExpiryInput: Locator;
    private cardCvcInput: Locator;
    private payButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cardNumberInput = page.getByPlaceholder('1234 1234 1234 1234');
        this.cardExpiryInput = page.getByPlaceholder('MM / AA');
        this.cardCvcInput = page.getByPlaceholder('CVC');
        this.payButton = page.getByRole('button', { name: 'Pagar' });
    }
}