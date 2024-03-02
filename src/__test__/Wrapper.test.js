import { render, screen } from '@testing-library/react'
import Wrapper from '../components/Wrapper'

describe('ButtonBox', () => {
    it('Should render a div and display its children', () => {
        render(<Wrapper>Text</Wrapper>)
        expect(screen.getByText('Text')).toBeInTheDocument()
    })
})