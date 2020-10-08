import React, {useState} from 'react';

function SignUp(props) {

    const[name] = useState('');
    const[gender] = useState(1);

    const handleChange = (event) => {
        props.setState({
            [event.target.name] : event.target.value
        });
    }

        return (
            <form onSubmit = {props.handleSubmit}>
                <label>
                    Name
                    <input 
                        type = 'text'
                        name = {'name'}
                        value = {props.name}
                        onChange = {props.handleChange}/>
            </label>
            <br />
            <label>
                Gender
                <select
                    name = {'gender'}
                    value = {props.gender}
                    onChange = {props.handleChange}>
                        <option value = {1}>Man</option>
                        <option value = {0}>Woman</option>
                    </select>
            </label>
            <br />
            <input type = 'submit' value = 'Submit' />
        </form>
    )
}


export default SignUp;