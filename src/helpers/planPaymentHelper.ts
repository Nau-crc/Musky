import { PlanPaymentPage } from '../pages/PlanPaymentPage';

export class PlanPaymentHelper {

    constructor(private planPaymentPage: PlanPaymentPage) {}

    // async completePlanPayment() {
    //     const planPaymentPage = this.planPaymentPage;

    //     await planPaymentPage.selectMonthlyPlan();
    //     await planPaymentPage.selectCivilLiability();
    //     await planPaymentPage.selectNoOption();
    //     await planPaymentPage.clickHire();
    //     await planPaymentPage.selectFirstPlan();
    //     await planPaymentPage.selectSecondPlan();
    //     await planPaymentPage.selectThirdPlan();
    //     await planPaymentPage.clickContinue();
    //     await planPaymentPage.fillName('Chris');
    //     await planPaymentPage.fillLastName('Evans');
    //     await planPaymentPage.ownerDateOfBirth('1981-06-13');
    //     await planPaymentPage.fillId('60914375W');
    //     await planPaymentPage.fillEmail('e@gmail.com');
    //     await planPaymentPage.fillPhoneNumber('623458982');
    //     await planPaymentPage.clickContinue();
    //     await planPaymentPage.fillAddressType('Calle');
    //     await planPaymentPage.fillAddress('Falsa');
    //     await planPaymentPage.fillStreetNumber('123');
    //     await planPaymentPage.fillFloor('1');
    //     await planPaymentPage.fillDoor('A');
    //     await planPaymentPage.fillPostalCode('28080');
    //     await planPaymentPage.clickContinue();
    //     await planPaymentPage.acceptTermsAndConditions();
    //     }

    async completePlanPayment() {
    const plan = this.planPaymentPage;

    await plan.selectMonthlyPlan();
    await plan.selectCivilLiability();
    await plan.selectNoOption();
    await plan.clickHire();
    await plan.selectFirstPlan();
    await plan.selectSecondPlan();
    await plan.selectThirdPlan();
    await plan.clickContinue();

    await this.fillPersonalInformation({
        firstName: "Chris",
        lastName: "Evans",
        dob: "1981-06-13",
        id: "60914375W",
        email: "e@gmail.com",
        phone: "623458982",
    });

    await this.fillAddressInformation({
        type: "Calle",
        address: "Falsa",
        number: "123",
        floor: "1",
        door: "A",
        postalCode: "28080",
    });

    await plan.acceptTermsAndConditions();
}

private async fillPersonalInformation(data: {
    firstName: string;
    lastName: string;
    dob: string;
    id: string;
    email: string;
    phone: string;
}) {
    const plan = this.planPaymentPage;
    await plan.fillName(data.firstName);
    await plan.fillLastName(data.lastName);
    await plan.ownerDateOfBirth(data.dob);
    await plan.fillId(data.id);
    await plan.fillEmail(data.email);
    await plan.fillPhoneNumber(data.phone);
    await plan.clickContinue();
}

private async fillAddressInformation(data: {
    type: string;
    address: string;
    number: string;
    floor: string;
    door: string;
    postalCode: string;
}) {
    const plan = this.planPaymentPage;
    await plan.fillAddressType(data.type);
    await plan.fillAddress(data.address);
    await plan.fillStreetNumber(data.number);
    await plan.fillFloor(data.floor);
    await plan.fillDoor(data.door);
    await plan.fillPostalCode(data.postalCode);
    await plan.clickContinue();
}


    async addPetToPlan() {
        await this.planPaymentPage.clickAddPet();
    }
}