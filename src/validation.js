export function validationNumber(value, variable){
    if (isNaN(value)){
        return `${variable} must be a number`;
    }
    return '';
}

export function validationExists(value, variable){
    if (value.length === 0){
        return `${variable} should not be empty`;
    }
    return '';
}

export function validateDefaultForm(sku, name, price, errors){
    errors.push(validationExists(sku, 'sku'));

    errors.push(validationExists(name, 'name'));

    errors.push(validationExists(price, 'price'));
    errors.push(validationNumber(price, 'price'));

    return errors;
}

export function validateDVDForm(size, errors){
    errors.push(validationExists(size, 'size'));
    errors.push(validationNumber(size, 'size'));

    return errors;
}

export function validateBookForm(weight, errors){
    errors.push(validationExists(weight, 'weight'));
    errors.push(validationNumber(weight, 'weight'));

    return errors;
}

export function validateFurnitureForm(height, width, length, errors){
    errors.push(validationExists(height, 'height'));
    errors.push(validationNumber(height, 'height'));

    errors.push(validationExists(width, 'width'));
    errors.push(validationNumber(width, 'width'));

    errors.push(validationExists(length, 'length'));
    errors.push(validationNumber(length, 'length'));

    return errors;
}