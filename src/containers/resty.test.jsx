import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import Resty from './resty';

describe('Resty Component', () => {
    afterEach(() => cleanup());

    it('renders main page', () => {
        render(
            <Resty />
        );
        const searchForm = screen.getByRole('form', { name: 'req-form' });
        const addressInput = screen.getByRole('textbox', { name: 'URL-input'});
        const get = screen.getByRole('radio', { name: 'GET' });
        const post = screen.getByRole('radio', { name: 'POST' });
        const put = screen.getByRole('radio', { name: 'PUT' });
        const del = screen.getByRole('radio', { name: 'DELETE' });
        const bodyInput = screen.getByRole('textbox', { name: 'req-body' });
        const resultsDisplay = screen.getByLabelText('results');

  });
})