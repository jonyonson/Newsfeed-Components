// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to Expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());
    // create a refereance to `.close`
    this.markReadButton = domElement.querySelector('.close');
    // set a click handler on `close` reference, calling the markAsDone method
    this.markReadButton.addEventListener('click', () => this.markAsDone());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article--open');
    this.domElement.classList.toggle('article--collapsed');
    // change the text depending on the state of the article
    this.expandButton.innerText = this.domElement.classList.contains(
      'article--open'
    )
      ? 'Click to Close'
      : 'Click to Expand';
  }

  // mark the article as read and remove it
  markAsDone() {
    this.domElement.classList.add('article--done');
    this.markReadButton.style.color = 'green';
    setTimeout(() => {
      this.domElement.style.display = 'none';
    }, 500);
  }
}

/* START HERE:

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articles = document.querySelectorAll('.article');

articles.forEach(article => new Article(article));
