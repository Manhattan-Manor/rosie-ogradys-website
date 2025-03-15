import i18next from 'i18next';

const StepperButtons = ({ currentStep, handleNextStep, handlePrevStep }: any) => (
    <div className="horizontal-stepper-buttons mb-4">
      {currentStep == 3 ? null : <button
        type="button"
        id="horizontal-prev-step"
        className="btn btn-secondary"
        onClick={handlePrevStep}
        disabled={currentStep === 0}
      >
        {i18next.t('tickets.navigation.back')}
      </button>}
  
      {currentStep >= 2 ? null :
        <button
          type="button"
          id="horizontal-next-step"
          className="btn btn-primary"
          onClick={handleNextStep}
        >
          {
            i18next.t('tickets.navigation.next')}
        </button>
      }
  
    </div>
  );

  

  export default StepperButtons;