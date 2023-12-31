console.log("Hello from neurips.ts");

chrome.runtime.onMessage.addListener((_request, _sender, respond) => {
  const title = document
    .querySelector('meta[name="citation_title"]')
    ?.getAttribute("content");
  const author = document.querySelector(
    "body > div.container-fluid > div > p:nth-child(6) > i"
  )?.textContent;
  const booktitle = "NeurIPS";
  const year = parseInt(
    document
      .querySelector('meta[name="citation_publication_date"]')
      ?.getAttribute("content")!
  );
  const pdf = document
    .querySelector('meta[name="citation_pdf_url"]')
    ?.getAttribute("content");
  const url = window.location.href;

  console.log({ title, author, booktitle, year, pdf, url });
  respond({ title, author, booktitle, year, pdf, url });

  return true;
});
