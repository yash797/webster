import React, { useState } from 'react';
import "./Sherlock.css";

const Sherlock_Dashboard = () => {
    const [seach, setSeach] = useState("");
    
    const onSearch = (e) => {
        setSeach(e.target.value);
    }  

  return (
    <div>

        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2">
                    <li>
                        <a href="#Profile" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-white-500 transition duration-75 dark:text-white-400 group-hover:text-white-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">See all Profiles</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#status" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                            <span className="ml-3">Statuswise</span>
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="#tech_details" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Technical Details</span>
                        </a>
                    </li> */}
                    {/* <li>
                        <a href="#exp" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Experience</span>
                        </a>
                    </li> */}

                    <li>
                        <a href="#acc_sett" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Account Settings</span>
                        </a>
                    </li>
                    {/* <li>
                        
                        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" type="button">
                            <svg aria-hidden="true" className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                            <span className="flex-1 ml-3 whitespace-nowrap">Delete Application/Account</span>
                        </button>

                        <div id="popup-modal" tabindex="-1" className="fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                            <div className="relative w-full h-full max-w-md md:h-auto">
                                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                        <span className="sr-only">Close modal</span>
                                    </button>
                                    <div className="p-6 text-center">
                                        <svg aria-hidden="true" className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                        <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                            Yes, I'm sure
                                        </button>
                                        <button data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </li> */}
                </ul>
            </div>
        </aside>

        <div className="p-4 sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            
                <div className="flex justify-center align-center max-h-50 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-white" id="Profile">
                        <span className="text-4xl underline" >Profiles</span>
                        <br />
                        
                        <form className="w-full max-w-sm">
                            <div className="flex items-center border-b border-teal-500 py-2">
                                <input className="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" />
                                <button className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                                    Search a user
                                </button>
                                {/* <button className="flex-shrink-0 border-transparent border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button">
                                Cancel
                                </button> */}

                            </div>   

                            <div className="my-4 flex items-center border-b border-teal-500 py-2">
                                <label for="underline_select" className="block mb-2 mx-3 text-sm font-medium text-gray-900 dark:text-white">Choose application status</label>
                                <select id="underline_select" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    {/* <option selected>Choose application status</option> */}
                                    <option value="DE">Hired! </option>
                                    <option value="US">Selected for interview</option>
                                    <option value="FR">Application Sent</option>
                                    <option value="CA">Rejected</option>
                                </select>
                            </div>
                                
                        </form>
    

                    </p>
                </div>


                <div className="flex justify-center mb-3">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="data:image/jpeg;base64,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" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 char_name">John Watson (age: 42)</h5>
                        <h5 className="text-gray-900 text-xl font-medium mb-2 char_name">Status: 
                            <button type="button"  className="mx-2 inline-block h-min text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <span className="inline-block">Selected for Interview: on 03/02/2022</span>

                            </button> 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                            
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                            <b>Skills: </b> Analytically strong, Militarily trained
                            <br />
                            <b>Strengths: </b> Brave, Honest, Patient
                            <br />
                            <b>Weaknesses: </b> weak-Observation, PTSD 
                            <br />
                            <b>Previous cases solved/assisted: </b> 1. Helped westwood police find a Kidnapper, 2. Solved a murder in Kandahar, 3. Part of some Military operations, etc 
                            <br />
                            <b>Why should Sherlock hire you?: </b> Military background, No training needed
                            <br />
                            <b>Resume Link: </b> www.aws.south-us.com/john2736/resume
                            <br />
                            <b>Email: </b> johnwatson@gmail.com
                            <br />
                            <b>Phone Number?: </b> +918364849374
                            <br />
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mb-3">
                    <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="data:image/jpeg;base64,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" alt="" />
                        <div className="p-6 flex flex-col justify-start">
                        <h5 className="text-gray-900 text-xl font-medium mb-2 char_name">Mary Watson (age: 42)</h5>
                        <h5 className="text-gray-900 text-xl font-medium mb-2 char_name">Status: 
                            <button type="button"  className="mx-2 inline-block h-min text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                <span className="inline-block">Hired
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg></span>
                            </button> 
                        </h5>
                        <p className="text-gray-700 text-base mb-4">
                            <b>Skills: </b> Strong-minded, 
                            <br />
                            <b>Strengths: </b>  Risk-taker, Brave,
                            <br />
                            <b>Weaknesses: </b> Physically weak, mentally-scarred 
                            <br />
                            <b>Previous cases solved/assisted: </b> 1. Part of rough organisation operated to eliminate internal threats from UK
                            <br />
                            <b>Why should Sherlock hire you?: </b> Women (equality and diversity) in the team
                            <br />
                            <b>Resume Link: </b> www.aws.south-us.com/mary23543/resume
                            <br />
                            <b>Email: </b> marywat1son@gmail.com
                            <br />
                            <b>Phone Number: </b> +9193648363284
                            <br />
                        </p>
                        <p className="text-gray-600 text-xs">Last updated 3 mins ago</p>
                        </div>
                    </div>

                    <br />
                    
                </div>

                <div className="flex justify-center mt-4">
                    <nav aria-label="flex items-center border-b border-teal-500 py-2 Page navigation example">
                    <ul className="inline-flex items-center -space-x-px">
                        <li>
                        <a href="#" className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Previous</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                        <a href="#" aria-current="page" className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                        </li>
                        <li>
                        <a href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                        </li>
                        <li>
                        <a href="#" className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span className="sr-only">Next</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </a>
                        </li>
                    </ul>
                    </nav>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Sherlock_Dashboard