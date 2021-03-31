import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  return value.replace(/:\d{2}\.\d{3}\w/, '')
}

const ScreeningForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.screening?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="date"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date
        </Label>
        <TextField
          name="date"
          defaultValue={props.screening?.date}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="date" className="rw-field-error" />

        <Label
          name="time"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Time
        </Label>
        <TextField
          name="time"
          defaultValue={props.screening?.time}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="time" className="rw-field-error" />

        <Label
          name="movieId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Movie id
        </Label>
        <NumberField
          name="movieId"
          defaultValue={props.screening?.movieId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="movieId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default ScreeningForm
