import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import HomePage from '../HomePage'


const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('HomePage', () => {
  test('renders without crashing', () => {
    renderWithRouter(
      <HomePage />
    )
  })

  test('displays main homepage content', () => {
    renderWithRouter(
      <HomePage />
    )

    expect(screen.getByText(/why shop with us/i)).toBeInTheDocument()
  })
})
