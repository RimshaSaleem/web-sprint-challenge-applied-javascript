import axios from "axios";
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const main_card = document.createElement('div')
  const card_headline = document.createElement('div')
  const card_author = document.createElement('div')
  const card_image_container = document.createElement('div')
  const card_image = document.createElement('img')
  const card_span = document.createElement('span')

  // add classlist
  main_card.classList.add('card')
  card_headline.classList.add('headline')
  card_author.classList.add('author')
  card_image_container.classList.add('img-container')
  
  card_headline.textContent = article.headline
  card_image.src = `${article.authorPhoto}`
  card_span.textContent = article.authorName


  // appending child
  main_card.appendChild(card_headline)
  main_card.appendChild(card_author)
  card_author.appendChild(card_image_container)
  card_image_container.appendChild(card_image)
  card_author.appendChild(card_span)

  
  // adding eventlistener to perforn some functionality
  main_card.addEventListener('click', ()=>{
    console.log(article.card_headline)
  })
  return main_card
}



const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const card = document.querySelector(selector);
  axios.get(`http://localhost:5000/api/articles`)
  .then((event) => {
  const final_result = Object.keys(event.data.articles);
  card.appendChild(Card(final_result));
  console.log(final_result);
  final_result.forEach((final_result) => {
  event.data.articles[final_result].forEach((string) => {
  document.querySelector(selector).append(Card(string));
      });
    });
  });
  // return cardAppender;
};
  


export { Card, cardAppender }
