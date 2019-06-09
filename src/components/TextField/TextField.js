import React from 'react';
import './TextField.css';
const { useRef, useLayoutEffect, useState } = React;

const TextField = () => {

    // Create ref object for input group container.
    // and input field
    const inputGroupRef = useRef();
    const inputRef = useRef();
  
    // Add useLayoutEffect and pass an empty array
    // for it to execute only on componentDidMount lifecycle
    useLayoutEffect(() => {
      const { current  } = inputRef;

      console.log('inputRef', inputRef);
      console.log('inputGroupRef', inputGroupRef);
  
      // Create functions to handle on focus and on blur
      // event listeners.
      const handleFocus = () => inputGroupRef.current.classList.add('active');
      const handleBlur = () => {
        if (!current.value.length) {
          inputGroupRef.current.classList.remove('active')
        }
      };
  
      // Add event listeners for focus and blur.
      current.addEventListener('focus', handleFocus);
      current.addEventListener('blur', handleBlur);
  
      // Handle removal of event listeners when
      // component is unmounting.
      return () => {
        current.removeEventListener('focus', handleFocus);
        current.removeEventListener('blur', handleBlur);
      }
    }, [])

    const [ isInputValid, setIsInputValid ] = useState(false);
    const inputValidation = event => {
      !event.target.value.length ? setIsInputValid(false) : setIsInputValid(true);
    }
  
    return (
      <div className='container'>
        <div ref={inputGroupRef} className='inputGroup'>
          <label className='label'>
            Your name
          </label>
          <input
            style = {
              { backgroundColor: isInputValid ? 'red' : 'transparent'}
            }
            onChange={inputValidation}
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