import { faker } from '@faker-js/faker';
import { ContractPage } from '../pages/ContractPage';

export class ContractHelper {
  constructor(private contractPage: ContractPage) {}

  async fillPetForm({
    petName,
    birthDate,
    race,
    email,
    phone,
    promoCode,
  }: {
    petName?: string;
    birthDate?: string;
    race?: string;
    email?: string;
    phone?: string;
    promoCode?: string;
  } = {}) {
    const contract = this.contractPage;

    const data = {
      petName: petName ?? faker.person.firstName(),
      birthDate:
        birthDate ??
        faker.date
          .birthdate({ min: 1, max: 10, mode: 'age' })
          .toISOString()
          .split('T')[0],
      race,
      email: email ?? faker.internet.email(),
      phone: phone ?? '6' + faker.string.numeric(8),
      promoCode, 
    };

    await contract.selectSpecies();
    await contract.calculateInsuranceCLick();
    await contract.fillPetName(data.petName);
    await contract.clickContinue();

    await contract.selectGender();
    await contract.clickContinue();

    await contract.fillBirthDate(data.birthDate);
    await contract.clickContinue();

    await contract.selectRaceFromDropdown(data.race);
    await contract.clickContinue();
    await contract.clickContinue();

    await contract.fillEmail(data.email);
    await contract.fillPhone(data.phone);

    if (data.promoCode) {
      await contract.fillPromoCode(data.promoCode);
    }

    await contract.acceptTermsAndConditions();
    await contract.clickContinue();
  }

  async editPetForm({
    petName,
    birthDate,
    race,
    email,
    phone,
    promoCode,
  }: {
    petName?: string;
    birthDate?: string;
    race?: string;
    email?: string;
    phone?: string;
    promoCode?: string;
  } = {}) {
    const contract = this.contractPage;

    await contract.editPetInfo();

    await this.fillPetForm({ petName, birthDate, race, email, phone, promoCode });
  }
}
