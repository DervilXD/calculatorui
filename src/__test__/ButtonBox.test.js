import { render, screen } from '@testing-library/react'
import ButtonBox from '../components/ButtonBox'

describe('ButtonBox', () => {
    it('Should render a div and display its children', () => {
        render(<ButtonBox>Text</ButtonBox>)
        expect(screen.getByText('Text')).toBeInTheDocument()
    })
})