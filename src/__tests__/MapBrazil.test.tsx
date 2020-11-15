import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import MapBrazil from '../components/MapBrazil/index'

describe('Render MapBrazil', () => {
  test('Render the component MapBrazil', () => {
    render(<MapBrazil />)
  })
})
describe('Check values MapBrazil', () => {
  const districts = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO'
  ]
  test('Render the component MapBrazil and check values has ben received', () => {
    const handleClick = jest.fn()
    const element = render(<MapBrazil onChange={handleClick} />)
    districts.forEach((district) => {
      fireEvent.click(element.container.querySelector(`#${district}`))
      expect(handleClick).toHaveBeenCalledWith(district)
    })
  })
})
