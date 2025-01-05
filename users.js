document.addEventListener("DOMContentLoaded", () => {
  const userListAPI = "https://api.github.com/users";
  const mainContainer = document.getElementById("allUsersContainer");
  const usersDetailsContainer = document.createElement("DIV");

  const fetchAndRenderUsers = async () => {
    console.log("API is called");
    try {
      const response = await fetch(userListAPI);
      const users = await response.json();
      renderUserList(users);
    } catch (error) {
      console.log("Failed to fetch users: ", error);
      alert("Failed to fetch users.");
    }
  };

  const renderUserList = (users) => {
    const usersList = document.getElementById("usersContainer");
    usersList.innerHTML = "";

    users.map((user) => {
      const usersSpecificList = document.createElement("div");
      usersSpecificList.classList.add("user-item");
      usersSpecificList.innerHTML = `
              <img src="${user.avatar_url}" alt="${user.login}"/>
              <h3>${user.login}</h3>
              `;
      usersSpecificList.addEventListener("click", () =>
        fetchAndRenderUsersDetails(user.login)
      );
      usersList.appendChild(usersSpecificList);
    });
  };

  const fetchAndRenderUsersDetails = async (usersLogin) => {
    try {
      const response = await fetch(`${userListAPI}/${usersLogin}`);
      const user = await response.json();
      renderUsersDetails(user);
    } catch (error) {
      console.error("Failed to fetch user details", error);
      alert("Failed to fetch product details");
    }
  };

  const renderUsersDetails = (user) => {
    usersDetailsContainer.id = "usersDetails";

    usersDetailsContainer.innerHTML = `
          <img src="${user.avatar_url || ""}" alt="${user.login || ""}">
          <h1>${user.login || ""}</h1>
          <p><b>Bio : </b>${user.bio || "N/A"}</p>
          <p><b>Location : </b>${user.location || "N/A"}</p>
          <p><b>Public Repos : </b>${user.public_repos || "N/A"}</p>
          <p><b>Followers : </b>${user.followers || "N/A"}</p>
          <p><b>Following : </b>${user.following || "N/A"}</p>
          <a href="${user.html_url}">View on GitHub</a>
      `;

    mainContainer.append(usersDetailsContainer);
  };

  fetchAndRenderUsers();
});
