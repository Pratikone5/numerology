import React from "react";


import Link from "next/link";


export function SubPara(props) {
    return (
      <p
        className={`${props.extra} dark:text-zinc-300 text-zinc-700 text-[15px] md:text-lg`}
      >
        {props.children}
      </p>
    );
  }

export default function ChallengeLandingPage () {

  const handleTheme = (e) => {
    const { checked } = e.target;
    if (checked) {
    
      localStorage.theme = "dark";
    } else {
  
      localStorage.theme = "light";
    }
    document.documentElement.classList.toggle("dark");
  };







  return (
    <div>
      <style jsx>
        {`
          .hero {
            position: relative;
            z-index: 1;
          }
          .hero:before {
            position: absolute;
            content: " ";
            width: 1000px;
            top: -100px;
            opacity: 0.5;
            z-index: -1;
            left: -600px;
            height: 1000px;
            background-image: url("/imgs/red_gradient.svg");
            background-size: cover;
            background-position: left;
          }
        `}
      </style>








      <div className=" fixed top-5 md:top-7 max-w-max w-full  right-5 md:right-7 z-[2]  flex justify-end">
        <label
          htmlFor="toggle-example"
          className="flex items-center cursor-pointer relative "
        >
          <input
          
            onChange={handleTheme}
            type="checkbox"
            id="toggle-example"
            className="sr-only switcher "
          />
          <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
        </label>
      </div>
      
      
      
      
      <div className="dark:bg-[#2F2F31] bg-white">
<div className=" flex pt-12 pb-20 md:py-14 max-w-7xl mx-auto items-center">
<div className="w-full flex justify-center">
<div id="birth-chart" className=" flex flex-col gap-10 md:gap-16 max-w-4xl w-full mx-auto md:px-10">
<div className="flex flex-col gap-6 px-5">
<h2 className="md:text-5xl text-4xl text-center  font-cera_bold dark:text-white dark:text-zinc-50 text-zinc-900 md:text-4xl text-3xl" >
<b className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-amber-200">{staticData.section1.title}</b>
</h2>
<div className="flex flex-col gap-6">
<p className="text-zinc-600 max-w-3xl mx-auto text-center font-semibold text-2xl leading-7 dark:text-zinc-100">{staticData.section1.subtitle}</p>
<p className="text-zinc-600 max-w-2xl mx-auto text-center text-lg leading-7 dark:text-zinc-100">{staticData.section1.subtitle2}</p>

</div>
</div>
<div className="px-5">
<form id="numerology" className="max-w-xl flex flex-col gap-8 mx-auto bg-gray-50 shadow-lg dark:shadow-zinc-900 dark:bg-zinc-800 p-6 sm:p-10 rounded-md w-full flex flex-col gap-8 md:gap-12 dark:text-zinc-100">
<div className="w-full flex relative flex-col pt-2 gap-4 ">
<input type="text" placeholder=" Enter Your Name" id="name" name="name" className="w-full py-2   st bg-transparent text-zinc-800 dark:text-zinc-100 border-b-2 border-zinc-400  focus:border-sky-500      " value=""/>
</div>
<div className="w-full flex flex-col gap-4 ">
<div className="grid grid-cols-4 gap-5 sm:items-center w-full dark:text-zinc-200">
<div className="flex col-span-2 items-center w-full gap-5">
<select name="month" className="text-gray-500 dark:text-zinc-100 dark:bg-zinc-800 py-3 border-b-2 w-full bg-transparent  focus:border-sky-500 focus:outline-none border-zinc-400">
<option value="true">Birth Month</option>
<option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
</select>
</div>
<div className="w-full flex relative flex-col mt-1  gap-4 ">
<input type="number" placeholder=" DD" min="1" max="31" id="day" name="day" className="w-full  bg-[#F9FAFB] py-2 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 border-b-2 border-zinc-400  focus:border-sky-500    " value=""/>

</div>
<div className="w-full flex relative flex-col mt-1  gap-4 ">
<input type="number" placeholder=" YYYY" min="1" max="31" id="day" name="day" className="w-full  bg-[#F9FAFB] dark:bg-zinc-800 py-2 text-zinc-800 dark:text-zinc-100 border-b-2 border-zinc-400  focus:border-sky-500    " value=""/>

</div>
</div>
</div>
<button className="w-full bg-sky-600 py-3 text-white rounded-md font-cera_bold md:text-xl text-lg hover:bg-sky-500">Calculate your Personality number</button>
</form>
</div>
</div>
</div>
</div>

<div class="bg-white overflow-hidden py-14 md:py-24 dark:bg-zinc-800 relative before:left-0 z-[2] before:z-[-1] after:z-[-1] before:top-[-200px] before:opacity-80 before:w-[600px] before:h-[650px] md:before:h-full before:bg-[url('/back5.png')] before:rotate-180 before:absolute after:right-0 after:bottom-[4] dark:after:bottom-[-130px] after:opacity-80 after:w-[500px]  after:mb-4 after:h-[500px] md:after:h-full after:bg-[url('/back5.png')] after:absolute ">
<div class="rounded-[30px] p-5 md:p-20 bg-gray-100 md:dark:bg-zinc-900/60 max-w-4xl mx-auto flex flex-col ">
<div className=" flex pt-12  md:py-4 max-w-4xl mx-auto items-center">
<div className="w-full flex justify-center">
<div className=" flex flex-col  max-w-4xl w-full mx-auto ">

<div className="flex flex-col items-center gap-6 ">
<p className="text-zinc-700 max-w-5xl mx-auto  text-xl leading-7 dark:text-zinc-100">{staticData.section1.desc[0]}</p>
<p className="text-zinc-700 max-w-5xl mx-auto  text-xl leading-7 dark:text-zinc-100">{staticData.section1.desc[1]}</p>
<p className="text-zinc-700 max-w-5xl mx-auto  text-xl leading-7 dark:text-zinc-100">{staticData.section1.desc[2]}</p>
<p className="text-zinc-700 max-w-5xl mx-auto md:mr-28 text-xl leading-7 dark:text-zinc-100">{staticData.section1.desc[3]}</p>
<a href="#birth-chart" className="bg-sky-500 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">Create Your Personality Chart</a>

</div>

</div>
</div>
</div>

</div>
</div>

<div className="max-w-4xl dark:bg-[#2F2F31] bg-white  py-16 flex flex-col gap-10 md:gap-14 w-full mx-auto">
<div className="max-w-4xl items-center  mx-auto flex flex-col gap-10">
<h3 className='text-3xl dark:text-white font-semibold'>{staticData.section2.title}</h3>
<ul className=" md:text-lg dark:text-gray-300 max-w-3xl !list-none md:ml-10 flex flex-col gap-3">
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[0]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[1]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[2]}
    </li>


</ul>
<p className="md:text-lg dark:text-white max-w-2xl"> {staticData.section2.desc}
    </p>

    <a href="#birth-chart" className="bg-sky-500 text-center max-w-max mt-5 px-12 py-2 rounded-md text-white hover:bg-sky-400 font-cera_bold text-lg">{staticData.section1.btntxt}</a>

</div>
<div className="max-w-4xl  pt-10 items-center flex flex-col gap-10 md:gap-7 w-full mx-auto">
<h2 className="md:text-3xl  dark:text-white font-semibold text-3xl " >{staticData.section3.title}

    </h2>
    <h3 className="md:text-lg max-w-3xl dark:text-zinc-300  text-zinc-800">{staticData.section3.desc}

    </h3>

<div className="max-w-4xl mx-auto items-center flex flex-col gap-10">
<h3 className='text-xl max-w-3xl dark:text-white font-semibold'>{staticData.section2.listhead}</h3>
<ul className=" md:text-lg  text-zinc-800 dark:text-zinc-300 dark:!list-none max-w-2xl md:ml-10 flex flex-col gap-3">
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section3.list[0]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.og/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section3.list[1]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section2.list[2]}
    </li>
<li className=" flex gap-2 items-start">
<span className="mt-1.5">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
<path fill-rule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clip-rule="evenodd">
</path>
</svg>
</span>{staticData.section3.list[3]}
    </li>

</ul>
<p className="md:text-xl max-w-3xl text-zinc-800 dark:text-zinc-200"> {staticData.section3.desc2}
    </p>
</div>

</div>

</div>



</div>




      


    </div>
  );
}

const staticData = {
  section1: {
    title: "Challenge Numbers Calculator  ",
    subtitle: "Calculate your Challenge Number Here",
    subtitle2:"Find the secrets of your life journey with Challenge Number Calculator — a FREE online tool designed to assist you in exploring your numerology challenges  and revealing the possibilities that reside within.",

    desc : [
"Challenge numbers are a fascinating aspect of numerology that reveal the potential obstacles you may face throughout your life. By understanding your challenge numbers, you can gain insight into how to overcome these obstacles and achieve your goals.",
"Our calculator is simple to use and completely free. Just enter your full name and birthdate, and we'll calculate your challenge numbers for you.",
"At the end of the process, take a deep breath and remember that you have the power to shape your destiny. The challenge numbers are just a guide, and with determination and perseverance, you can overcome any obstacle that comes your way. ",
"So why not give it a try and discover what insights your challenge numbers hold? "
    ],
    btntxt: 
    "Calculate Your Challenge Numbers Here!"
 
  },
  section2: {
    title:
      "Benefits of using our Challenge Number Calculator\n",
    desc: 
    "Don't miss out on this opportunity to learn more about yourself and your life path. Try our free Challenge Number Calculator today!",
    
      list: [
      "Gain insight into potential obstacles you may face in your life",
      "Learn how to overcome these obstacles and achieve your goals",
      "Understand the deeper meanings behind your life path",
   
    ],

    title2:
    "How to Use the Personality Number Calculator 🧙",
    subtitle2:
    "Unveil your true essence in three simple steps:",
    desc2: [
      "Enter your full name",
      "Click 'Calculate My Personality Number'",
      "Rejoice as your amazing Personality Number is revealed! 💃"
    ], 
  },

  section3 : {
    title: 
    "Ways to Calculate Challenge Numbers",
desc:[
  "Challenge Numbers are derived from the digits of a person's birth date and are said to represent the obstacles, challenges, and lessons one might face throughout their life. They can provide insights into a person's character, helping them gain a better understanding of themselves and their life path. "
],
listhead: "To calculate your Challenge Numbers, you need to follow these steps based on your birth date (day, month, and year) -",
list: [
  "First Challenge Number - Subtract your birth day from the birth month. Reduce the result to a single digit (if necessary).",
  "Second Challenge Number - Subtract your birth day from the birth year. Reduce the result to a single digit (if necessary).",
  "Third Challenge Number - Subtract the First Challenge Number from the Second Challenge Number.",
  "Fourth (Main) Challenge Number - Subtract your birth month from the birth year. Reduce the result to a single digit (if necessary)."
],
desc2: "There are 4 Challenge Numbers in total, and each one is relevant during different periods within one's life. By understanding the nature of these numbers, one can foresee potential difficulties and be more prepared to navigate them effectively."
  
  },

  section4: {
    title: "Why Choose Our Personality Number Calculator? 🏆",

    desc: 
    "Our spellbinding Personality Number Calculator guarantees an unforgettable adventure into the world of numerology that will leave you feeling inspired and enlightened. It's fun, easy, and insightful – designed to let your true colours shine!    ",
   
  
  },
  section5: {
    
    title: "Discover Your Personality Number 🎯\n",
    subtitle: "It's easy-peasy! Follow these simple steps:",
    desc: [
      "It's time for your inner star to take centre stage. Click the link below and let yourself embrace your authentic nature!"
    
    ],
    desc: [
      "Love is only a few clicks away. Tap into the mystical power of numbers, and transform your relationship into a joyous adventure"
    ],
  },
  section6: {
    desc:[
      "Dive into the gorgeous world of numerology with a copywriter who loves astrology and has 5 years of experience making dreams come true. Our Numerology Compatibility Calculator is not just any other calculator – it's a vibrant journey of fun, love, and self-discovery!",
      "What are you waiting for? Get started now, and let the playful world of astrology redefine your love story!"
    ],
    title2:
      "Embrace the opportunity to shape your destiny with the most precise Biorhythm Calculator at your fingertips",
    button_text2: "Discover Your Biorhythm",
  },
  section7: {
    title:
      "The Meaning of Master Number",
    desc: [
      "Master numbers are powerful numbers that are not reduced to a single digit like other numbers. The master numbers are 11, 22, and 33. These numbers are believed to have heightened spiritual vibrations and symbolize spiritual growth and enlightenment.",
      "People with master numbers in their numerology charts are considered to have special gifts and abilities and are often seen as leaders and visionaries. These numbers can be challenging to handle, but they also offer great potential for personal growth and spiritual development.",
      
    ],
    button_text: "Reveal Your Biorhythm Secret Now",
  },
};
