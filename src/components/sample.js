import React, { useState, useEffect } from 'react';

const [ id, setId ] = useState(initalValue);

useEffect(() => {
    setId(localStorage.getItem('id'));
}, [localStorage.getItem('id')]);

return(
    'Your code and the element that should update'
);