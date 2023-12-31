console.log("options.ts loaded");

const updateCredential = () => {
  console.log("button clicked");

  const APIToken = document.getElementById("APIToken") as HTMLInputElement;
  const databaseID = document.getElementById("databaseID") as HTMLInputElement;

  chrome.storage.local
    .set({ APIToken: APIToken.value, databaseID: databaseID.value })
    .then(() => {
      // Update status to let user know options were saved.
      const button = document.querySelector("button");
      button!.textContent = "done";
      setTimeout(() => {
        button!.textContent = "Update";
      }, 1500);
    });

  // (async () => {
  //   const localStrage = await chrome.storage.local.get(["APIToken", "databaseID"]);
  //   console.log(localStrage.APIToken, localStrage.databaseID);
  // })();
};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button")?.addEventListener("click", (e) => {
    e.preventDefault();
    updateCredential();
  });
});
