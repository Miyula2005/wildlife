const jsonData = {
  "content": [
    {
      "id": "paragraph",
      "p": "Yala National Park is a protected area in Sri Lanka known for its diverse ecosystems. In December 2004, a tsunami struck Sri Lanka's coast, damaging Yala's vegetation and coastal features like lagoons and mangroves. A 2013 study assessed the recovery of trees, shrubs, and ground vegetation in three tsunami-affected areas of the park. It also evaluated soil and water parameters like pH, conductivity, and salinity. Although the tsunami impacted Yala's ecosystems, the park is still being studied for its unique coastal features and ability to recover from environmental disasters. Researchers continue monitoring factors like vegetation growth and soil salinity to support conservation efforts in this important Sri Lankan wildlife sanctuary."
    },
    {"br": [], "id": "break1"},
    {"br": [], "id": "break2"},
    {"br": [], "id": "break3"},
    {
      "h1": {
        "id": "title",
        "b": {
          "class": "font-9",
          "text": "Highlights of Yala National Park"
        }
      }
    },
    {"br": [], "id": "break4"},
    {"br": [], "id": "break5"},
    {
      "ul": {
        "id": "list",
        "class": "style-7",
        "li": [
          {"strong": "Wildlife:"},
          "Yala National Park is home to a variety of species, such as leopards, elephants, and numerous bird species.",
          {"br": []},
          {"strong": "Ecosystems:"},
          "The park features a range of ecosystems, including lagoons, estuaries, coral reefs, sea grass beds, salt marshes, and mangroves.",
          {"br": []},
          {"strong": "Tourism:"},
          "Yala National Park is a popular destination for wildlife tourists, with visitors praising the number and diversity of animals, as well as the knowledge and skills of guides and drivers.",
          {"br": []},
          {"strong": "Recovery after the tsunami:"},
          "Despite the damage caused by the 2004 tsunami, Yala National Park has been reopened to visitors, and efforts have been made to assess the recovery of the park's vegetation and ecosystems.",
          {"br": []}
        ]
      }
    },
    {"br": [], "id": "break6"},
    {
      "p": {
        "id": "summary",
        "text": "Overall, Yala National Park offers a unique experience for visitors interested in wildlife, nature, and the recovery of ecosystems after natural disasters."
      }
    },
    {"br": [], "id": "break7"},
    {"br": [], "id": "break8"}
  ]
};

const contentElement = document.getElementById('content');

jsonData.content.forEach(item => {
  if (item.h1) {
    const title = document.createElement('h1');
    const bold = document.createElement('b');
    bold.className = item.h1.b.class;
    bold.innerText = item.h1.b.text;
    title.appendChild(bold);
    if (item.h1.id) title.id = item.h1.id;
    contentElement.appendChild(title);

    const br = document.createElement('br');
    contentElement.appendChild(br);
  } else if (item.p) {
    const paragraph = document.createElement('p');
    paragraph.innerText = item.p;
    if (item.id) paragraph.id = item.id;
    contentElement.appendChild(paragraph);

    const br = document.createElement('br');
    contentElement.appendChild(br);
  } else if (item.ul) {
    const ul = document.createElement('ul');
    ul.className = item.ul.class;
    if (item.ul.id) ul.id = item.ul.id;

    item.ul.li.forEach(liItem => {
      const li = document.createElement('li');
      if (typeof liItem === 'object' && liItem.br) {
        const br = document.createElement('br');
        li.appendChild(br);
      } else if (typeof liItem === 'object' && liItem.strong) {
        const strong = document.createElement('strong');
        strong.innerText = liItem.strong;
        li.appendChild(strong);
      } else {
        li.innerText = liItem;
      }
      ul.appendChild(li);
    });

    contentElement.appendChild(ul);
  }
});
