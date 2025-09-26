import { Page, Locator } from '@playwright/test';

export class PlanPaymentPage {
    private page: Page;
    private monthlyButton: Locator;
    private civilLiabilityButton: Locator;
    private noButton: Locator;
    private hireButton: Locator;
    private firstPlanButton: Locator;
    private secondPlanButton: Locator;
    private thirdPlanButton: Locator;
    private continueButton: Locator;
    private nameInput: Locator;
    private lastNameInput: Locator;
    private idInput: Locator;
    private ownerDateOfBithInput: Locator;
    private emailInput: Locator;
    private phoneNumberInput: Locator;
    private addressTypeInput: Locator;
    private addressInput: Locator;
    private streetNumberInput: Locator;
    private floorInput: Locator;
    private doorInput: Locator;
    private postalCodeInput: Locator;
    private cityInput: Locator;
    private termsAndConditionsCheck: Locator;
    private addPetButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.monthlyButton = page.getByText('Mensual');
        this.civilLiabilityButton = page.locator('label').filter({ hasText: 'Agregar Responsabilidad Civil' }).getByRole('img');
        this.noButton = page.locator('label').filter({ hasText: 'No' });
        this.hireButton = page.getByRole('button', { name: 'Contratar' });
        this.firstPlanButton = page.locator('.relative.flex.justify-center.items-center.z-0.group-hover\\:text-system-info-600 > .flex-shrink-0').first();
        this.secondPlanButton = page.locator('div:nth-child(2) > .group > .relative.flex.justify-center.items-center.z-0.group-hover\\:text-system-info-600 > .flex-shrink-0');
        this.thirdPlanButton = page.locator('div:nth-child(3) > .group > .relative.flex.justify-center.items-center.z-0.group-hover\\:text-system-info-600 > .flex-shrink-0');
        this.continueButton = page.getByRole('button', { name: 'Continuar' });
        this.nameInput = page.getByRole('textbox', { name: 'Nombre Apellidos Fecha de' });
        this.lastNameInput = page.locator('input[name="family-name"]');
        this.idInput = page.locator('input[type="text"]').nth(2);
        this.ownerDateOfBithInput = page.locator('input[name="bday"]');
        this.emailInput = page.locator('input[name="email"]');
        this.phoneNumberInput = page.locator('input[name="tel"]');
        this.continueButton = page.getByRole('button', { name: 'Continuar' });
        this.addressTypeInput = page.getByRole('textbox', { name: 'Tipo de vía Dirección Nº Piso' });
        this.addressInput = page.locator('input[name="address-line1"]');
        this.streetNumberInput = page.locator('.flex.flex-col.gap-2.w-full.col-span-full.md\\:col-span-1 > .relative > #input');
        this.floorInput = page.locator('.relative.h-max > .relative > #input').first();
        this.doorInput = page.locator('.relative.h-max > .relative > #input').nth(1);
        this.postalCodeInput = page.locator('input[name="postal-code"]');
        this.cityInput = page.locator('div:nth-child(8) > .relative > #input')
        this.termsAndConditionsCheck = page.getByText('He leído y acepto la Póliza');
        this.addPetButton = page.getByRole('button', { name: 'Añadir otro peludo' });
    }

    async selectMonthlyPlan() {
        await this.monthlyButton.click();
    }

    async selectCivilLiability() {
        await this.civilLiabilityButton.click();
    }

    async selectNoOption() {
        await this.noButton.click();
    }
    
    async clickHire() {
        await this.hireButton.click();
    }

    async selectFirstPlan() {
        await this.firstPlanButton.click();
    }

    async selectSecondPlan() {
        await this.secondPlanButton.click();
    }

    async selectThirdPlan() {
        await this.thirdPlanButton.click();
    }

    async fillName(name: string) {
        await this.nameInput.fill(name);
    }

    async fillLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async fillId(id: string) {
        await this.idInput.fill(id);
    }

    async ownerDateOfBirth(ownerDateOfBithInput: string) {
        await this.ownerDateOfBithInput.fill(ownerDateOfBithInput);
    }

    async fillEmail(email: string) {
        await this.emailInput.fill(email);
    }

    async fillPhoneNumber(phoneNumber: string) {
        await this.phoneNumberInput.fill(phoneNumber);
    }

    async fillAddressType(addressType: string) {
        await this.addressTypeInput.fill(addressType);
        await this.addressTypeInput.press('ArrowDown');
        await this.addressTypeInput.press('Enter');
    }

    async fillAddress(address: string) {
        await this.addressInput.fill(address);
    }

    async fillStreetNumber(streetNumber: string) {
        await this.streetNumberInput.fill(streetNumber);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async fillFloor(floor: string) {
        await this.floorInput.fill(floor);
    }

    async fillDoor(door: string) {
        await this.doorInput.fill(door);
    }

    async fillPostalCode(postalCode: string) {
        await this.postalCodeInput.fill(postalCode);
        await this.page.click('html');
    }

    async acceptTermsAndConditions() {
        await this.termsAndConditionsCheck.click();
    }

    async clickAddPet() {
        await this.addPetButton.click();
    }
}