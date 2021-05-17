import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ URL, method, body, onURLChange, onBodyChange, onMethodChange, onSubmit }) => (
    <form onSubmit={onSubmit} aria-label="req-form">
        <input 
            value={URL}
            aria-label="URL-input"
            onInput={onURLChange}
            placeholder="Url Here"
        />
        <span>
            <label>
                <input 
                    type="radio"
                    name="method"
                    value="GET"
                    checked={method === 'GET'}
                    onChange={onMethodChange}
                />
                <span>GET</span>
            </label>
            <label>
                <input 
                    type="radio"
                    name="method"
                    value="POST"
                    checked={method === 'POST'}
                    onChange={onMethodChange}
                />
                <span>POST</span>
            </label>
            <label>
                <input 
                    type="radio"
                    name="method"
                    value="PUT"
                    checked={method === 'PUT'}
                    onChange={onMethodChange}
                />
                <span>PUT</span>
            </label>
            <label>
                <input 
                    type="radio"
                    name="method"
                    value="DELETE"
                    checked={method === 'DELETE'}
                    onChange={onMethodChange}
                />
                <span>DELETE</span>
            </label>
        </span>
        <label>
			<span> Request Body</span>
			<textarea 
				value={body}
				aria-label="req-body"
				onInput={onBodyChange}
			>
			</textarea>
		</label>
        <button>Request to API</button>
    </form>
);

Form.propTypes = {
    URL: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired, 
    onURLChange: PropTypes.func.isRequired, 
    onBodyChange: PropTypes.func.isRequired, 
    onMethodChange: PropTypes.func.isRequired, 
    onSubmit: PropTypes.func.isRequired,
};

export default Form;