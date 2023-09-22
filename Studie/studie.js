const Card_2_Compnent = document.querySelector(".client-card-2-component");

async function getCard2() {
  const response = await fetch("../assets/db.json");
  const data = await response.json();

  let Template = "";
  for (var i = 0; i < data.CaseStdies.length; i++) {
    // Loop true the tags to display
    let TagTemplate = "";
    for (var j = 0; j < data.CaseStdies[i].tags.length; j++) {
      TagTemplate += `
          <li class="blog-tags list-reset red-bg">${data.CaseStdies[i].tags[j]}</li>
        `;
    }
    Template += `
        <a href="${data.CaseStdies[i].url}" class="block">
            <figure class="case-study-card">
                <img class="case-study-card-image" src="${data.CaseStdies[i].image}" alt="${data.CaseStdies[i].name}">
                <figcaption class="case-study-details">
                    <div class="case-study-main-detail">
                        <h2 class="case-study-title">${data.CaseStdies[i].name}</h2>
                        <p class="client-discibs">${data.CaseStdies[i].subName}</p>
                    </div>
                    <ul class="case-study-tags-wrapper">
                    ${TagTemplate}
                    </ul>
                </figcaption>
            </figure>
        </a>
        `;
  }
  Card_2_Compnent.innerHTML = Template;
}

getCard2();
