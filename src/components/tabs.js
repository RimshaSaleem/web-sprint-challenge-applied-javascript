import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  const main_tab = document.createElement('div')
//    adding classlist in topic which we passed in     as argument
  main_tab.classList.add('topics')

  topics.forEach(topic => {
    let result_tab = document.createElement('div');
    result_tab.classList.add('tab')
    result_tab.textContent = topic
    main_tab.appendChild(result_tab)


  });
  return main_tab;
 }

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let task4_result = document.querySelector(selector)
 
  axios.get('http://localhost:5000/api/topics')
  .then(responsive => {
    let final_result = Tabs(responsive.data.topics)
    task4_result.appendChild(final_result)
  })
  .catch(res =>
    console.log(`ERROR FILE NOT FOUND:`,res))
  // })
  }

 export { Tabs, tabsAppender }

