import React from 'react';
import './TextField.css';
const { useRef, useLayoutEffect } = React;

const TextField = () => {

    // Step 1: Create ref object for input group container.
    // and input field
    const inputGroupRef = useRef();
    const inputRef = useRef();
  
    // Step 2: Add useLayoutEffect and pass an empty array
    // for it to execute only on componentDidMount lifecycle
    useLayoutEffect(() => {
      const { current  } = inputRef;

      console.log('inputRef', inputRef);
      console.log('inputGroupRef', inputGroupRef);
  
      // Step 3: Create functions to handle on focus and on blur
      // event listeners.
      const handleFocus = () => inputGroupRef.current.classList.add('active');
      const handleBlur = () => {
        if (!current.value.length) {
          inputGroupRef.current.classList.remove('active')
        }
      };
  
      // Step 4: Add event listeners for focus and blur.
      current.addEventListener('focus', handleFocus);
      current.addEventListener('blur', handleBlur);
  
      // Handle removal of event listeners when
      // component is unmounting.
      return () => {
        current.removeEventListener('focus', handleFocus);
        current.removeEventListener('blur', handleBlur);
      }
    }, [])
  
  
    return (
      <div className='container'>
        <div ref={inputGroupRef} className='inputGroup'>
          <label className='label'>
            Your name
          </label>
          <input
            ref={inputRef}
            className='input'
            type='text'
            autoComplete="off"/>
          <div className='border'/>
        </div>
      </div>
    )
  }
  
  export default TextField;