const minlength = () => ({
  require: 'ngModel',
  link: function (scope, element, attributes,  control) {
    control.$validators.minlength = modelValue => (
      control.$isEmpty(modelValue) ||
      modelValue.length >= Number(attributes.minlength)
    );
  }
});

export default minlength;