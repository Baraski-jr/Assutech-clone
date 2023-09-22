const teamMemeberWrapper = document.querySelector(
  ".team-member-card-component-wrapper"
);

async function getTeamMembers() {
  const response = await fetch("../assets/db.json");
  let data = await response.json();
  let Template = "";
  for (var i = 0; i < data.TeamMembers.length; i++) {
    Template += `
              <figure class="team-member-card">
              <div class="close-toggle abs"></div>
              <img class="team-member-imgage" src="${data.TeamMembers[i].image}" alt="${data.TeamMembers[i].name}">
              <figcaption class="team-member-details">
                  <h2 class="member-name">${data.TeamMembers[i].name}</h2>
                  <p class="member-position">${data.TeamMembers[i].role}</p>
                  <button class="read-more sixth-btn">Read more</button>
                  <div class="more-detail show-detail hide">
                      <p class="text">${data.TeamMembers[i].description}</p>
                  </div>
              </figcaption>
              </figure>`;
    teamMemeberWrapper.innerHTML = Template;
  }
}
getTeamMembers();
