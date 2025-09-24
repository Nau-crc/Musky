import { ContractPage } from '../pages/ContractPage';

export class ContractHelper {

  constructor(private contractPage: ContractPage) {}

  async completePetForm() {
    const contract = this.contractPage;

    await contract.selectSpecies();
    await contract.calculateInsuranceCLick();
    await contract.fillPetName('Pepito');
    await contract.clickContinue();
    
    await contract.selectGender();
    await contract.clickContinue();

    await contract.fillBirthDate('2023-12-14');
    await contract.clickContinue();

    await contract.fillRace('bull');
    await contract.clickContinue();
    await contract.clickContinue();

    await contract.fillEmail('e@mail.com');
    await contract.fillPhone('623458982');
    await contract.fillPromoCode('CHRIS20S');

    await contract.acceptTermsAndConditions();

    await contract.clickContinue();
  }
}
