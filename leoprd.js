const data = {
    "sections": [
      {
        "title": "Yala National Park",
        "paragraphs": [
          "Yala National Park in Sri Lanka is home to a significant population of leopards, which are one of the main attractions for visitors to the park.",
          "Researchers have developed a multi-point identification approach to recognize individual leopards in the park, which takes into account changes in spot and rosette formations over time.",
          "However, the high number of visitors to the park has led to safari operators aggressively pursuing leopards to satisfy visitor expectations, which threatens the wildlife populations."
        ]
      },
      {
        "title": "Wilpattu National Park",
        "paragraphs": [
          "Wilpattu National Park is home to a small but significant population of leopards.",
          "Located in Sri Lanka's North Western and North Central provinces, the park has a unique variety of habitats including dense scrubland and forest that provide good cover for leopards to rest and ambush prey.",
          "Researchers have used camera traps to estimate there are around 20-30 leopards inhabiting the 151,400 hectare park."
        ]
      },
      {
        "title": "Horton National Park",
        "paragraphs": [
          "Horton Plains National Park, located in the central highlands of Sri Lanka, is home to a population of leopards.",
          "A study conducted in the park used remote cameras to estimate the leopard density, finding approximately 11.7 adult individuals per 100 square kilometers.",
          "The study also estimated the density of prey, with Sambar density being 178 per square kilometer within the central grasslands, which is a significant resource for leopards."
        ]
      },
      {
        "title": "Leopard Conservation in Sri Lanka",
        "paragraphs": [
          "The Leopard Project (LEOPOCON) is an organization dedicated to conserving leopards and resolving human-leopard conflicts in Sri Lanka. learn more about their conservation efforts for leopards in Sri Lanka."
        ]
      },
      {
        "title": "Threats",
        "subSections": [
          {
            "title": "Habitat Loss And Fragmentation",
            "paragraphs": [
              "Habitat loss and fragmentation in Sri Lanka have significant implications for wildlife conservation.",
              "The country's unique ecosystems, such as the Central Highlands, are home to endangered species like the Sri Lankan leopard.",
              "Research conducted in Horton Plains National Park, located in the Central Highlands, has provided important insights into the density of leopards and their prey.",
              "The study estimated a leopard density of 11.7 adult individuals per 100 square kilometers and highlighted the significance of the central grasslands as a key resource for prey, particularly Sambar, which in turn, is an important resource for leopards."
            ]
          },
          {
            "title": "Poaching And Illegal Wild Trade",
            "paragraphs": [
              "Poaching and the illicit trade of wildlife in Sri Lanka pose significant threats to the country's biodiversity and conservation efforts. Some key aspects of this issue include:",
              "Addressing poaching and the illicit trade of wildlife in Sri Lanka requires comprehensive conservation strategies, including strengthening enforcement efforts, raising public awareness, and improving the capacity of wildlife officers."
            ]
          }
        ]
      }
    ]
  };

  const contentDiv = document.getElementById('content');

  function createParagraphs(paragraphs) {
    return paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');
  }

  function createSubSections(subSections) {
    return subSections.map(subSection => `
      <div class="subsection">
        <h3>${subSection.title}</h3>
        ${createParagraphs(subSection.paragraphs)}
      </div>
    `).join('');
  }

  function createSection(section) {
    let html = `
      <div class="section">
        <h2>${section.title}</h2>
        ${createParagraphs(section.paragraphs)}
    `;
    if (section.subSections) {
      html += createSubSections(section.subSections);
    }
    html += `</div>`;
    return html;
  }

  data.sections.forEach(section => {
    contentDiv.innerHTML += createSection(section);
  });