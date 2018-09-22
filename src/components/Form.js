import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Checkbox, Segment, Label, Button, Header } from 'semantic-ui-react'

const questions = [
  {
    text: 'Are you in pain?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Field>
          <Checkbox
            radio
            label='Yes'
            name='checkboxRadioGroup'
            value='yes'
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            radio
            label='No'
            name='checkboxRadioGroup'
            value='no'
          />
        </Form.Field>
      </Form.Field>
    )
  },
  {
    text: 'Are you diabetic or suffering from heart, lung or kidney disease?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Have you ever been admitted to a hospital for an extended period of time? ',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Has any of your family members passed away before the age of 50?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'What type of work have you done in the past?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Have you had any recent infections?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Have you had any significant traumas? (previous / current)',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Are you experiencing any current bladder or bowel problems?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Where are you currently experiencing symptoms? What symptoms have you had since your last visit?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Is your visit today for the same condition(s) you were seen for last time?',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  },
  {
    text: 'Have your symptoms changed in any way since your last visit? (better, worse or about the same)',
    component: ({ label, ...other }) => (
      <Form.Field>
        <Label ribbon>{label}</Label>
        <Form.Input {...other} />
      </Form.Field>
    ),
  }
]

let ContactForm = props => {
  const { handleSubmit } = props
  return (
    <div style={{
      marginTop: '50px',
      padding: '50px',
    }}>
      <Header as='h1'>Questionnaire</Header>
      <Form
        onSubmit={handleSubmit}>
        {questions.map((q, i) => (
          <Form.Group key={i}>
            <Segment vertical>
              <Field label={q.text} name={q.text} component={q.component} />
            </Segment>
          </Form.Group>
        ))}
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  )
}

ContactForm = reduxForm({
  // a unique name for the form
  form: 'form'
})(ContactForm)

export default ContactForm