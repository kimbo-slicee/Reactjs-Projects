const regexPatterns = {
    text: {
        pattern:/^[a-zA-Z\s]+$/,
        message: 'Only letters and spaces are allowed'
    },
    email: {
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Please enter a valid email address'
        },
    password: {
            pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
            message: 'Password must be at least 8 characters long and contain letters and numbers'
        },
    number: {
            pattern: /^\d+$/,
            message: 'Only numbers are allowed'
        },
    phone: {
            pattern: /^\+?[1-9]\d{1,14}$/,
            message: 'Please enter a valid phone number'
        },

}
export const inputValidation = ({input})=>{
    const {value, type} = input;
    let message = '';
    // Check for empty value
    if(!value || value.trim() === '' || !value.length){
        message = 'This field is required';
        console.log('Validation failed: empty value');
        return {valid: false, message};
    // Check for specific type patterns
    }else if (type in regexPatterns) {
        const {pattern, message: patternMessage} = regexPatterns[type];
        if (!pattern.test(value)) {
            console.log(`Validation failed: ${patternMessage}`);
            return {valid: false, message: patternMessage};
        }
    }else {
        message = 'Unknown input type';
        console.log(`Validation failed: ${message}`);
        return {valid: false, message};
    }
    // If all checks pass

    return {valid: true, message: 'Valid input'};
}

export const validateForm = (formInputs)=>{
    const validationResults = {};
    let formIsValid = true;

    for (const inputName in formInputs) {
        const input = formInputs[inputName];
        const {valid, message} = inputValidation({input});
        validationResults[inputName] = {valid, message};
        if (!valid) {
            formIsValid = false;
        }
    }

    return {formIsValid, validationResults};
}