const contactFormValidations = (inputs: any) => {
  const errors: any = {};

  // Name validation
  if (
    !inputs.name ||
    typeof inputs.name !== "string" ||
    inputs.name.trim() === ""
  ) {
    errors.name = "Name is required.";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (
    !inputs.email ||
    inputs.email.length > 100 ||
    !emailRegex.test(inputs.email)
  ) {
    errors.email = "A valid email is required.";
  }

  // Phone validation
  const phoneRegex = /^[+]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  if (!inputs.phone || !phoneRegex.test(inputs.phone)) {
    errors.phone = "A valid phone number is required.";
  }

  // Contact Method validation
  if (
    !inputs.contactMethod ||
    typeof inputs.contactMethod !== "string" ||
    inputs.contactMethod.trim() === ""
  ) {
    errors.contactMethod = "Contact method is required.";
  }

  // Inquiry Type validation
  if (
    !inputs.inquiryType ||
    typeof inputs.inquiryType !== "string" ||
    inputs.inquiryType.trim() === ""
  ) {
    errors.inquiryType = "Inquiry type is required.";
  }

  // Message validation
  if (
    !inputs.message ||
    typeof inputs.message !== "string" ||
    inputs.message.trim() === ""
  ) {
    errors.message = "Message is required.";
  }

  // Contact Time validation
  if (
    !inputs.contactTime ||
    typeof inputs.contactTime !== "string" ||
    inputs.contactTime.trim() === ""
  ) {
    errors.contactTime = "Contact time is required.";
  }

  return errors;
};

export default contactFormValidations;
