const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const main_header= document.createElement('div')
  const date_newspaper = document.createElement('span')
  const h1_header = document.createElement('h1')
  const temperature = document.createElement('span')
 
  // adding classes which passed in argument
  main_header.classList.add('header')
  date_newspaper.classList.add('date')
  temperature.classList.add('temp')

  // appending child into main_header
  main_header.appendChild(date_newspaper)
  main_header.appendChild(temperature)
  main_header.appendChild(h1_header)

}
const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
