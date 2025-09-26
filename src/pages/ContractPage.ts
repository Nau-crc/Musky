import { Page, Locator } from '@playwright/test';

export class ContractPage {
  private page: Page;

  private nameInput: Locator;
  private speciesButton: Locator;
  private genderButton: Locator;
  private birthDateInput: Locator;
  private raceInput: Locator;
  private raceOption: Locator;
  private emailInput: Locator;
  private phoneInput: Locator;
  private promoCodeInput: Locator;
  private acceptTermsAndConditionscheck: Locator;
  private continueButton: Locator;
  private backDateButton: Locator;
  private calculateInsuranceButton: Locator;
  private editPetInfoButton: Locator;
  private applyDiscountCodeButton: Locator;
  private discountCodeMessage: Locator;
  private discountCodeErrorMessage: Locator;
  private raceDropdown: Locator;

  constructor(page: Page) {
    this.page = page;

    this.calculateInsuranceButton = page.locator('section').filter({ hasText: 'El seguro veterinario que tu' }).getByRole('link');
    this.nameInput = page.getByRole('textbox', { name: 'Mi mascota se llama...' });
    this.speciesButton = page.locator('section').filter({ hasText: 'El seguro veterinario que tu' }).getByLabel('Perro');
    this.genderButton = page.getByText('Macho', { exact: true });
    this.birthDateInput = page.getByRole('textbox', { name: 'Fecha de nacimiento' });
    this.raceInput = page.getByRole('textbox', { name: 'Su raza es:' });
    this.raceOption = page.getByText('Akita Inu', { exact: true });
    this.emailInput = page.getByRole('textbox', { name: 'Mi correo electrónico es...' });
    this.phoneInput = page.locator('input[name="tel"]');
    this.promoCodeInput = page.locator('input[type="text"]');
    this.acceptTermsAndConditionscheck = page.getByRole('group', { name: '¡Estamos preparando tu oferta!' }).getByRole('img');
    this.continueButton = page.getByRole('button', { name: 'Continuar' });
    this.backDateButton = page.getByRole('button', { name: 'Me equivoqué de fecha, volver' });
    this.editPetInfoButton = page.locator('div').filter({ hasText: /^Datos personales$/ }).getByRole('img');
    this.applyDiscountCodeButton = page.getByRole('button', { name: 'Aplicar' });
    this.discountCodeMessage = page.getByText('¡Código de descuento aplicado!');
    this.discountCodeErrorMessage = page.getByText('El código de descuento no es válido');
    this.raceDropdown = page.getByRole('textbox', { name: 'Su raza es:' });
  }

  async calculateInsuranceClick () {
    await this.calculateInsuranceButton.click();
  }

  async fillPetName(name: string) {
    await this.nameInput.click();
    await this.nameInput.fill(name);
  }

  async selectSpecies() {
    await this.speciesButton.check();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async selectGender() {
    await this.genderButton.click();
  }

  async fillBirthDate(date: string) {
    await this.birthDateInput.fill(date);
  }

  async clickBackToEditDate() {
    await this.backDateButton.click();
  }

  async fillRace(breed: string) {
    await this.raceInput.click();
    await this.raceInput.fill(breed);
    await this.raceOption.click();
  }

  async selectRaceFromDropdown(breed: string) {
      // await this.raceDropdown.click();

      // const options = await this.raceOption.all();

      // if (options.length === 0) {
      //   throw new Error('No race options found in dropdown');
      // }

      // const randomIndex = Math.floor(Math.random() * options.length);
      // const randomOption = options[randomIndex];

      // await randomOption.scrollIntoViewIfNeeded();
      // await randomOption.click();

    await this.raceDropdown.click();
    await this.raceInput.fill('Akita Inu');
    await this.raceOption.click();
  }

  async fillEmail(email: string) {
    await this.emailInput.click();
    await this.emailInput.fill(email);
  }

  async fillPhone(phone: string) {
    await this.phoneInput.click();
    await this.phoneInput.fill(phone);
  }

  async fillPromoCode(code: string) {
    await this.promoCodeInput.click();
    await this.promoCodeInput.fill(code);
    await this.applyDiscountCodeButton.click();
  }

  async acceptTermsAndConditions() {
    await this.acceptTermsAndConditionscheck.check();
  }

  async editPetInfo() {
    await this.editPetInfoButton.click();
  }

}
