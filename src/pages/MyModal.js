import React, { useEffect, useState } from 'react';
import Preloader from '../components/preloader/Preloader';
require("./myModal.css");
let CRIMINAL_RIDDLES_1 = require('../static/images/CRIMINAL-RIDDLES-1.jpg');
let CRIMINAL_RIDDLES_2 = require('../static/images/CRIMINAL-RIDDLES-2.jpg');
// import { useHistory } from "react-router-dom";

const MyModal = () => {
  const [ans, setAns] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  let hasAlreadyAnswered = localStorage.getItem('hasAlreadyAnswered');

  // console.log("hasAlreadyAnswered ", hasAlreadyAnswered);

  // const history = useHistory();

  const onChangeAns = (e) => {
    e.preventDefault();
    setAns(e.target.value);
  };


  const questions = [
    {
      image: CRIMINAL_RIDDLES_2,
      question: '',
      answer: 'A',
      quote: 'Crime is common. Logic is rare. Therefore it is upon the logic rather than upon the crime that you should dwell'
    },
    {
      image: CRIMINAL_RIDDLES_1,
      question: 'Decrypt the message',
      answer: '11',
      quote: 'John and Robert will be the next I am not afraid'
    },
    {
      image: '',
      question: 'On a cold winter day, there was a man standing in front of someone’s house. He didn’t move until the spring, and the owner didn’t mind. Eventually, the man left. Who was he?',
      answer: 'snowman',
      quote: 'To a great mind, nothing is little'
    },
    {
      image: '',
      question: 'Every day, a woman was seen crossing the border carrying bags of sand on a motorbike. After some time, the border police become suspicious and stop her, but found she only had sand on her, so they let her go. What was the woman smuggling across the border?',
      answer: 'Motorbikes',
      quote: 'Crime is common. Logic is rare'
    },
  ];

  const handlePreviousQuestion = (e) => {
    e.preventDefault();
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    }
  };


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [])

  if (isLoading) {
    return <Preloader />
  }


  const submitAns = (e) => {
    e.preventDefault();
    if(ans.toLowerCase() == questions[questionIndex].answer.toLowerCase()){
      setShowSuccess(true)

      // Child1 = React.forwardRef((props, ref) => {
      //     return <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
      //         <span className="sr-only">Check icon</span>
      //     </div>
      //     <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
      //     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
      //         <span className="sr-only">Close</span>
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div>
      // {/* <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //         <span className="sr-only">Error icon</span>
      //     </div>
      //     <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
      //     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
      //         <span className="sr-only">Close</span>
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div> */}
      // {/* <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //     <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
      //         <span className="sr-only">Warning icon</span>
      //     </div>
      //     <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
      //     <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
      //         <span className="sr-only">Close</span>
      //         <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //     </button>
      // </div> */}
      
      
      //       // </div>
      // });
    }else{
      setAttemptsLeft((attemptsLeft) => attemptsLeft - 1);
      // if(attemptsLeft <= 0){
      //   Child1 = React.forwardRef((props, ref) => {
      //       return  <div id="toast-danger" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //       <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //           <span className="sr-only">Error icon</span>
      //       </div>
      //       <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
      //       <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-danger" aria-label="Close">
      //           <span className="sr-only">Close</span>
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //       </button>
      //   </div> 
      //   {/* <div id="toast-warning" className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
      //       <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-orange-500 bg-orange-100 rounded-lg dark:bg-orange-700 dark:text-orange-200">
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
      //           <span className="sr-only">Warning icon</span>
      //       </div>
      //       <div className="ml-3 text-sm font-normal">Improve password difficulty.</div>
      //       <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-warning" aria-label="Close">
      //           <span className="sr-only">Close</span>
      //           <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      //       </button>
      //   </div> */}
        
        
      //         // </div>
      //   });
      // }
      alert(`Wronge Submission! Total chances Left : ${attemptsLeft - 1}`)
    }
  }


  if (attemptsLeft <= 0 || hasAlreadyAnswered != null || hasAlreadyAnswered == true) {
    localStorage.setItem('hasAlreadyAnswered', true);
    return (
      <div className="flex items-center justify-center bg-[#340404] min-w-screen min-h-screen p-10 bg-black-500 text-white text-center overflow-hidden">
        <div className="App canvas">
          <h3 className="lost">GAME OVER</h3>
          <div className="container">
            <h4 className="note">Can't Apply! </h4>
            <section>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
              <div className='blooddrop'></div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (showSuccess) {
    setTimeout(function() {
      window.location.replace('/login');
    }, 3000);
    
    return (
      <div className=" flex items-center bg-black-500 min-w-screen min-h-screen text-white text-center justify-center align-items-center">
        <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
          <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Check icon</span>
          </div>
          <div className="ml-3 text-md font-normal"> Impressive, your observation skills are noteworthy.</div>
          {/* <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </button> */}
        </div>
      </div>
    );
  }


  return (
    // <div className='min-h-screen bg-[#340404] justify-center align-items-center' >
      <div className="flex items-center justify-center min-h-screen p-5 bg-[#340404] min-w-screen">

        <div className={`relative top-1/2 left-7 disabled:opacity-75`}>
          <button className={`rounded-full px-4 py-4 bg-white disabled:bg-gray-500 disabled:opacity-100`} disabled={questionIndex == 0} onClick={handlePreviousQuestion}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
          </button>
        </div>


        <div className="max-w-xl p-8 text-center text-gray-800 bg-[#ffcfcf] shadow-xl lg:max-w-3xl rounded-3xl lg:p-12 overflow-auto">
          <h3 className="text-4xl text-red-600 mb-4 ">Solve the Riddle To Be Able to Apply!</h3>

          {questions[questionIndex].image.length > 0 ? <img src={questions[questionIndex].image} alt="img" /> : <></> }
          <p className="text-2xl my-4">Who's the culprit ?</p>
          <p className="text-2xl my-4">{questions[questionIndex].question}</p>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="text-2xl block text-white-200 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                Answer :
              </label>                                  
            </div>
            <div className="md:w-2/3">
              <input className="bg-grey-200 appearance-none border-2 border-red-500 rounded w-full py-2 px-4 text-white-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500" id="inline-full-name" type="text" placeholder="Enter answer here" value={ans} onChange={onChangeAns} />
            </div>
          </div>
          <div className="mt-4">
            <button 
            disabled={hasAlreadyAnswered != null || hasAlreadyAnswered == true || attemptsLeft <= 0} 
            className="mb-4 px-4 py-3 text-white-200 bg-[#FF0000] hover:bg-[#ff0000ad] rounded" 
            onClick={submitAns}>
              Submit Answer</button>
            {/* 
              <p className="mt-4 text-sm">If you’re having trouble clicking the "Verify Email Address" button, copy
                and
                paste
                the URL below
                into your web browser:
                <a href="" className="text-blue-600">http://localhost:8000/email/verify/3/1ab7a09a3</a>
              </p> 
            */}
            {/* <p className="text-md">“  ” - (Det.) Sherlock Holmes</p> */}
            <p className="text-md"> <q>{questions[questionIndex].quote}</q> - <cite className="text-red-500">(Det.) Sherlock Holmes</cite></p>
          </div>
        </div>


        <div className={`relative top-1/2 right-7 {questionIndex == questions.length - 1  ? disable bg-grey-700 : "" }`}>
          <button className={`rounded-full px-4 py-4 bg-white disabled:bg-gray-500 disabled:opacity-100`} disabled={questionIndex == questions.length - 1} onClick={handleNextQuestion}> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

    </div> 
  )
}

export default MyModal