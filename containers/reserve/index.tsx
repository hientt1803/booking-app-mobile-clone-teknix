import React from "react";
import { StepperProgress } from "./components/stepper-progress";
import { DetailInformation } from "./components/detail-information";
import { CheckInInformation } from "./components/check-in-information";
import { ScrollToFormButton } from "./components/scroll-to-form-button";
import { FormControlled } from "./components/form-controlled";

export const ReserveContainer = () => {
  return (
    <React.Fragment>
      <StepperProgress activeValue={2} />
      <DetailInformation />
      <CheckInInformation />

      <FormControlled />

      {/* Button scroll to */}
      <ScrollToFormButton />
    </React.Fragment>
  );
};
