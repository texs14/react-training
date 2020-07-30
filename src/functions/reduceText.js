const reduceText = ( text = '', lengthText = 100 ) => {
    if (text.length > lengthText)  {
        text = text.split('', lengthText);
        text.push('...');
        return text.join('');
    } else return text;
}

export default reduceText;