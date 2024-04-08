// data.js

const data = {
  "menu": {
    "id": "menu",
    "ul": {
      "class": "navstyle",
      "li": [
        {"a": {"href": "./index.html", "text": "Home"}},
        {"a": {"href": "./intro.html", "text": "Introduction"}},
        {"a": {"href": "./deprtofwlc.html", "text": "Department of Wildlife"}},
        {"a": {"href": "./slleopard.html", "text": "Sri Lankan Leopard"}},
        {
          "a": {"href": "./Animls.html", "text": "Animals in Sri Lanka ▾"},
          "ul": {
            "class": "dropdown",
            "li": [
              {"a": {"href": "./yala.html", "text": "Yala National Park"}},
              {"a": {"href": "./willpattu.html", "text": "Wilpattu National Park"}}
            ]
          }
        }
      ]
    }
  },
  "main-content": {
    "center": {
      "text": "Animals In Sri Lanka",
      "h1": {
        "b": {
          "u": {
            "class": "font-1",
            
          }
        }
      }
    },
    "content": {
      "ul": {
        "class": "style-6",
        "li": [
          " to a diverse range of indigenous animals, including the Sri Lankan leopard, Asian elephant, sloth bear, water buffalo, and various species of primates and birds.",
          "However, these species face significant threats due to habitat loss, fragmentation, poaching, and the illegal wildlife trade.",
          "For example, a study documented 55 cases of illegally traded elephants in Sri Lanka between January 2008 and December 2018, with nearly equal numbers of male and female elephants traded, and more than 50% of them being juveniles aged 5 years.",
          "Additionally, at least 80 wildlife officers in Sri Lanka have been killed in the line of duty since 1949, with the major causes of death being terrorist attacks, encounters with free-ranging Asian Elephants, and confrontations with wildlife criminals.",
          "Obstacles to wildlife disease surveillance in Sri Lanka, such as lack of transport facilities, skilled staff, and training, have resulted in rare or sporadic collection and testing of samples for surveillance purposes."
        ]
      }
    }
  }
};

function createMenu(menuData, parentElement) {
  const navElement = document.createElement('nav');
  navElement.id = menuData.id;

  const ulElement = document.createElement('ul');
  ulElement.className = menuData.ul.class;

  menuData.ul.li.forEach(item => {
    const liElement = document.createElement('li');
    const aElement = document.createElement('a');
    aElement.href = item.a.href;
    aElement.textContent = item.a.text;
    liElement.appendChild(aElement);

    if (item.hasOwnProperty('ul')) {
      const subUlElement = document.createElement('ul');
      subUlElement.className = item.ul.class;

      item.ul.li.forEach(subItem => {
        const subLiElement = document.createElement('li');
        const subAElement = document.createElement('a');
        subAElement.href = subItem.a.href;
        subAElement.textContent = subItem.a.text;
        subLiElement.appendChild(subAElement);
        subUlElement.appendChild(subLiElement);
      });

      liElement.appendChild(subUlElement);
    }

    ulElement.appendChild(liElement);
  });

  navElement.appendChild(ulElement);
  parentElement.appendChild(navElement);
}

// Call createMenu function with data
createMenu(data.menu, document.getElementById('menu'));

const contentTitle = document.getElementById('main-content');

// Assuming data.content has a "title" property (modify if different)
contentTitle.innerHTML = `
  <h2>${data['main-content']['center']['h1']['b']['u']['text']}</h2>
  <br>
  <br>
  <ul class="style-6">
    ${data['main-content']['content']['ul']['li'].map(item => `<li>${item}</li>`).join('')}
  </ul>
`;
