const lengthValidator = () => ({
  require: 'ngModel',
  link: function (scope, element, attributes,  control) {
    control.$validators.lengthValidator = modelValue => (
      control.$isEmpty(modelValue) ||
      modelValue.length >= Number(attributes.lengthValidator)
    );
  }
});

export default lengthValidator;