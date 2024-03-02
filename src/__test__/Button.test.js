import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
    it('Should displays a button with a number', () => {
        const value = '5'
        render(<Button className={''} onClick={()=>{}} value={value} />)
        expect(screen.getByText('5')).toBeInTheDocument()
    })
})