const blogComponentWrapper = document.querySelector(
  ".blogs-card-component-wrapper"
);

async function getBlog() {
  const response = await fetch("../assets/db.json");
  const data = await response.json();
  let Template = "";
  // Loop through the blogs and display
  for (var i = 0; i < data.Blogs.Cards.length; i++) {
    // Loop true the tags to display
    let TagTemplate = "";
    for (var j = 0; j < data.Blogs.Cards[j].tags.length; j++) {
      TagTemplate += `
        <li class="list-reset blog-tags">${data.Blogs.Cards[i].tags[j]}</li>
      `;
    }
    // Store blogs in this variable
    Template += `
        <figure class="blog-card bg-clr">
            <a href="${data.Blogs.Cards[i].url}" class="block">
                <img class="blog-image" src="../${data.Blogs.Cards[i].image}" alt="da">
            </a>
            <figcaption class="blog-details">
                <ul class="blog-tag-wrapper">
                ${TagTemplate}
                </ul>
                <h3 class="blog-tile">
                    <a class="blog-title" href="${data.Blogs.Cards[i].url}">${data.Blogs.Cards[i].title}</a>
                </h3>
                <h4 class="blogger-name"> By ${data.Blogs.Cards[i].bloggerName} </h4>
                <p class="blog-infor"> ${data.Blogs.Cards[i].role} · ${data.Blogs.Cards[i].postedDate} </p>
            </figcaption>
        </figure>
    `;
  }
  blogComponentWrapper.innerHTML = Template;
}

getBlog();
