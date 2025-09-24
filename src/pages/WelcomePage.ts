import { Page, Locator } from 'playwright';

export class WelcomePage {
  private page: Page;
  private catButton: Locator;
  private dogButton: Locator;
  private insuranceButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.catButton = this.page.getByText('Gato', { exact: true }).first();
    this.dogButton = this.page.getByText('Perro').nth(1);
    this.insuranceButton = this.page
      .locator('section')
      .filter({ hasText: 'El seguro veterinario que tu' })
      .getByRole('link');
  }

  async clickCatButton() {
    await this.catButton.click();
  }

  async clickDogButton() {
    await this.dogButton.click();
  }

  async clickInsuranceButton() {
    await this.insuranceButton.click();
  }
}
