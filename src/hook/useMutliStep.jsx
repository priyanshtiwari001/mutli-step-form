import { useState } from "react";

const useMutliStep = (steps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [pending, setPending] = useState(false);
  function toggle() {
    if (!pending) {
      setPending(true);
    } else {
      setPending(false);
    }
  }

  function next() {
    setCurrentStep((prevIndex) => {
      if (prevIndex >= currentStep.length - 1) return prevIndex;
      return prevIndex + 1;
    });
  }

  function previous() {
    setCurrentStep((prevIndex) => {
      if (prevIndex <= 0) return prevIndex;
      return prevIndex - 1;
    });
  }

  function goTo(index) {
    setCurrentStep(index);
  }

  return {
    currentStep,
    step: steps[currentStep],
    goTo,
    next,
    previous,
    steps,
    toggle,
  };
};
export default useMutliStep;
