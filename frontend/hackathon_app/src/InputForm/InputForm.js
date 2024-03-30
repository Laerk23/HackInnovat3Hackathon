// InputForm.js

import React from 'react';
import './InputForm.scss'; // Import SCSS file for styling

const InputForm = () => {
    return (
        <div className="input-form">
            <header>
                <h1>Input Form</h1>
            </header>
            <main>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" />
                    <button type="submit">Submit</button>
                </form>
            </main>
            <footer>
                <p>&copy; 2024 Your Company</p>
            </footer>
        </div>
    );
};

export default InputForm;
