import React from 'react'
import { expect } from 'chai'
import { mount } from 'enzyme'
import Question from '../src/question'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const data = { id: 1, text: 'question', answers: [{ id: 1, text: 'Answer1' },{ id: 2, text: 'Answer2' }] }
const disabled = false

describe('Question', function() {

  const wrapper = mount(<MuiThemeProvider><Question data={data} disabled={disabled} /></MuiThemeProvider>)

  it('contains radio group', function() {
    expect(wrapper.find('RadioButtonGroup').length).to.equal(1)
  })

  it('contains proper quanity of radio buttons', function() {
    expect(wrapper.find('RadioButton').length).to.equal(data.answers.length)
  })

  it('text is visible', function() {
    expect(wrapper.find('h2').text()).to.equal(data.text)
  })

  it('answer click defines answer on the data node', function() {
    wrapper.find('input').last().simulate('change')
    expect(data.selectedAnswer).to.equal(data.answers[data.answers.length-1].id);
  })

})