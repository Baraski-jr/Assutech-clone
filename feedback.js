const feedbackContainerWrapper = document.querySelector(
  ".client-testimonial-card-continer"
);

async function getFeedback() {
  const response = await fetch("assets/db.json");
  const data = await response.json();
  let Template = "";

  for (var i = 0; i < data.FeedBacks.length; i++) {
    Template += `
            <div class="client-feeback-card">
                <figure class="client-profile">
                    <img class="client-profile-image" src="${data.FeedBacks[i].image}" alt="${data.FeedBacks[i].name}">
                    <figcaption class="client-personal-detail">
                        <h3 class="client-name">${data.FeedBacks[i].name}</h3>
                        <p class="client-more-details">${data.FeedBacks[i].company}</p>
                    </figcaption>
                </figure>
                <blockquote class="client-feedback-text">${data.FeedBacks[i].feedbackQuote}</blockquote>
            </div>
        `;
  }
  feedbackContainerWrapper.innerHTML = Template;
}
getFeedback();
