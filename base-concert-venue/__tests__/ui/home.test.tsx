import {render, screen} from '@testing-library/react'
import Home from '@/pages/index'

test('Page has correct heading and image',()=>{
    render(<Home />)

    const Heading = screen.getAllByRole('heading', {name: 'Welcome to Popular ConcertVenue'})
     expect(Heading).toBeInTheDocument()
})