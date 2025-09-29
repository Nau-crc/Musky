import { faker } from '@faker-js/faker';
import { ContractPage } from '../pages/ContractPage';

export class ContractHelper {
  constructor(private contractPage: ContractPage) {}

    async startContract() {
      const contract = this.contractPage;

      await contract.selectSpecies();
      await contract.calculateInsuranceClick();
    }

    async petInfoFiller({
    petName,
    birthDate,
    race}: {
    petName?: string;
    birthDate?: string;
    race?: string;})
    {
      const contract = this.contractPage;
      const data = {
      petName: petName ?? faker.person.firstName(),
      birthDate:
        birthDate ??
        faker.date
          .birthdate({ min: 1, max: 10, mode: 'age' })
          .toISOString()
          .split('T')[0],
      race: race  ?? 'Akita Inu',};

      await contract.fillPetName(data.petName);
      await contract.choosePetButton();
      await contract.clickContinue();
  
      await contract.selectGender();
      await contract.clickContinue();
  
      await contract.fillBirthDate(data.birthDate);
      await contract.clickContinue();
  
      await contract.selectRaceFromDropdown(data.race);
      await contract.clickContinue();

    }

    async contactInfoFiller({
      email,
      phone,
    }:{
      email?: string;
      phone?: string;
    }= {}) {
      const contract = this.contractPage;
      const data = {
        email: email ?? faker.internet.email(),
        phone: phone ?? '6' + faker.string.numeric(8),
      };
      await contract.clickContinue();
      await contract.fillEmail(data.email);
      await contract.fillPhone(data.phone);
    }

    async promoCodeFiller({promoCode,}: {promoCode?: string;} = {}) {
    const contract = this.contractPage;
    const data = {promoCode};
    if (data.promoCode) {
      await contract.fillPromoCode(data.promoCode);
    }
  }
  
  async finalSteps(){
    const contract = this.contractPage;

    await contract.acceptTermsAndConditions();
    await contract.clickContinue();
    }
  

  async editButton(){
    const contract = this.contractPage;

    await contract.editInfo();
  }

  }

