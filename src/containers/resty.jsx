import React, { Component } from 'react'
import Form from '../components/controls/form'
import Results from '../components/displays/results'
import { apiCall } from '../services/apiUtils'



export default class Resty extends Component {
    state = {
        apiUrl: '',
        method: 'GET',
        body: '',
        results: '',
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const { apiUrl, method, body } = this.state;
        try {
            results = await apiCall(apiUrl, method, body);
        }		
        catch (error) {
			results = `Something went wrong: ${error}`
		}

        this.setState({ results });
    }

    handleURLChange = () => {
		this.setState({ apiUrl: target.value });
	}
    handleMethodChange = () => {
		this.setState({ method: target.value });
	}
    handleBodyChange = () => {
		this.setState({ body: target.value });
	}

    render() {
        const { apiUrl, method, body, results } = this.state;
        return (
            <div>
                <header>
                    RestyTesty
                </header>
                <Form 
                    URL={apiUrl} 
                    method={method} 
                    body={body} 
                    onURLChange={this.handleURLChange}
                    onBodyChange={this.handleBodyChange}
                    onMethodChange={this.handleMethodChange}
                    onSubmit={this.handleSubmit}
                />
                <Results results={results} />
            </div>
        )
    }
}
