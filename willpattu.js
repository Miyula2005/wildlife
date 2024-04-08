const jsonData = {
  "content": [
    {
      "center": {
        "h1": {"b": {"class": "font-12", "text": "Willpattu National Park"}}
      },
      "br": [null, null, null],
      "div": {"id": "content"},
      "p": {
        "text": "Wilpattu National Park is Sri Lanka's largest national park at 1,317 square kilometers. It is known for diverse flora like dry evergreen forests, scrublands and grasslands along with fauna including leopards, elephants, sloth bears and many bird species. While Wilpattu faced environmental challenges from Sri Lanka's civil war, it has reopened for visitors to now enjoy safari tours and sightings of unique wildlife. As the biggest park in the country, Wilpattu protects a range of ecosystems and animals for conservation. Visitors can spot local species like leopards and elephants while touring the beautiful mixed forests and terrain that make Wilpattu National Park a must-see destination."
      },
      "h1": {"b": {"class": "font-13", "text": "Highlights Of Wilpattu National Park"}},
      "br_2": [null, null],
      "ul": {
        "class": "style-9",
        "li": [
          {"text": "Diverse Wildlife: Leopards, elephants, sloth bears, deer, crocodiles, birds"},
          {"text": "Flora: Dry forests, scrublands, grasslands"},
          {"text": "Landscape: Lakes, beaches, plains, forests"},
          {"text": "Activities: Safaris, bird watching, scenic tours"},
          {"text": "Conservation: Largest park protecting species"},
          {"text": "Accessibility: Improved roads for tourists"}
        ]
      },
      "hr": [null, null, null],
      "section": {"class": "image-section-6"},
      "hr_2": [null, null, null],
      "center_2": {
        "h1": {"b": {"class": "font-14", "text": "Willpattu Bio-Diversity"}}
      },
      "br_3": [null, null, null],
      "ul_2": {
        "class": "style-10",
        "li": [
          {
            "strong": {"h4": {"text": "Flora:"}},
            "ul": {
              "li": ["Dry mixed evergreen forests", "Thorny scrublands", "Grasslands"]
            }
          },
          {
            "strong": {"h4": {"text": "Fauna:"}},
            "ul": {
              "li": ["Leopards", "Elephants", "Sloth bears", "Birds", "Reptiles, amphibians, insects"]
            }
          },
          {
            "strong": {"h4": {"text": "Conservation:"}},
            "ul": {
              "li": ["Reopened after civil war", "Resilience demonstrates potential for ecotourism.", "Faces biodiversity loss and environmental challenges."]
            }
          }
        ]
      },
      "br_4": [null, null],
      "hr_3": [null, null, null],
      "br_5": [null, null],
      "h1_2": {"b": {"class": "font-15", "text": "Visitors Guideline and conservation Efforts"}},
      "br_6": [null, null],
      "ul_3": {
        "class": "style-11",
        "li": [
          {"text": "Follow rules for waste disposal"},
          {"text": "Respect wildlife by limiting interaction"},
          {"text": "Help maintain the park's natural cleanliness"}
        ]
      },
      "footer": {
        "center": [
          {"p": "All Right Reserved."},
          {"p": "Powered by Miyulas Induwara"}
        ]
      },
      "script": {"src": "willpattu.js"}
    }
  ]
};

const contentTitle = document.getElementById('content');
contentTitle.innerHTML = `
  <h2>${jsonData.content[0].center.h1.b.text}</h2>
  <br>
  <br>
  <p>${jsonData.content[0].p.text}</p>
`;
