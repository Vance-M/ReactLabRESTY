import React, { Component } from 'react'
import Form from '../components/controls/form'
import Results from '../components/displays/results'
import { apiCall } from '../services/apiUtils'
import style from './resty.css';


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
        let results;
        try {
            results = await apiCall(apiUrl, method, body);
        }		
        catch (error) {
			results = `Something went wrong: ${error}`
		}

        this.setState({ results });
    }

    handleURLChange = (e) => {
		this.setState({ apiUrl: e.target.value });
	}
    handleMethodChange = (e) => {
		this.setState({ method: e.target.value });
	}
    handleBodyChange = (e) => {
		this.setState({ body: e.target.value });
	}

    render() {
        const { apiUrl, method, body, results } = this.state;
        return (
            <div className={style.main}>
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
