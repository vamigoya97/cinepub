import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  return value.replace(/:\d{2}\.\d{3}\w/, '')
}

const MovieForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.movie?.id)
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
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.movie?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="director"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Director
        </Label>
        <TextField
          name="director"
          defaultValue={props.movie?.director}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="director" className="rw-field-error" />

        <Label
          name="poster_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Poster url
        </Label>
        <TextField
          name="poster_url"
          defaultValue={props.movie?.poster_url}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="poster_url" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MovieForm
