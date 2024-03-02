import { render, screen } from '@testing-library/react'
import Screen from '../components/Screen'

describe('ButtonBox', () => {
    it('Should render a div and display its children', () => {
        render(<Screen value={'0'} />)
        expect(screen.getByText('0')).toBeInTheDocument()
    })
})