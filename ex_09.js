let type;
if (typeof input_var === 'string') {
    type = 'String';
} else if (typeof input_var === 'boolean') {
    type = 'Boolean';
} else if (typeof input_var === 'number') {
    if (Number.isInteger(input_var)) {
        type = 'Integer';
    } else {
        type = 'Float';
    }
}

displayThisText(`The variable value is' + input_var);
displayThisText(`Its type is' + type);
    if (input_var = 42) {
     displayThisText("It is the meaning of life.");
}
