export const requiredValidation = (fieldName) => {
  return {
    required: {
      value: true,
      message: `${fieldName ?? 'This field'} is required.`,
    },
  }
}
