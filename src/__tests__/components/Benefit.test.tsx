import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Benefit from '@/scenes/benefits/Benefit';

describe('<Benefit /> Tests', () => {
  const mockSetSelectedPage = jest.fn();
  beforeEach(() => {
    render(
      <Benefit
        title="benefit title"
        description="benefit description"
        icon={<svg aria-label="benefit icon" />}
        setSelectedPage={mockSetSelectedPage}
      />,
    );
  });

  it('Checks main elements are rendered', () => {
    expect(
      screen.getByRole('heading', { name: /benefit title/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/benefit description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/benefit icon/i)).toBeInTheDocument();
  });
});
