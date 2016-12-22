import Validator from 'validator'
import isEmpty from 'lodash/isEmpty'

export default function validateInput(data) {
  let errors = {}

  if (Validator.isNull(data.name)) {
    errors.name = 'This field is required'
  }
  if (Validator.isNull(data.sets)) {
    errors.sets = 'This field is required'
  }
  if (Validator.isNull(data.reps)) {
    errors.reps = 'This field is required'
  }
  if (Validator.isNull(data.weight)) {
    errors.weight = 'This field is required'
  }
    return {
      errors,
      isValid: isEmpty(errors)
    }
}
