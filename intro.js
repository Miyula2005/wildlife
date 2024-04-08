const contentContainer = document.getElementById('content-container');

  const data = {
    "sections": [
      {
        "title": "Welcome to the wonders of Sri Lankan Wildlife!!",
        "content": ""
      },
      {
        "title": "Sinharaja Rain Forest",
        "description": "Sinharaja Forest Reserve, the last viable primary tropical rainforest in Sri Lanka, spans 11,000 hectares with over 60% endemic trees, many rare. Home to 50% of Sri Lanka's endemic mammals and butterflies, it hosts diverse wildlife—birds, insects, reptiles, and amphibians.  The forest, with an exceptional vegetation density of 240,000 plants per hectare, is Asia's most densely populated rainforest. Designated a World Biosphere Reserve and World Heritage Site by UNESCO, it holds cultural significance. With ten months of rain annually and temperatures averaging 20-25°C, this narrow undulating terrain, comprising ridges and valleys, sustains a unique and precious ecosystem.",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12225.105732843362!2d80.44200215541993!3d6.406990799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3e76bd109d45f%3A0x8c0ef1010649701b!2sSinharaja%20Forest%20Reserve!5e1!3m2!1sen!2slk!4v1702692776461!5m2!1sen!2slk",
        "image": "./introwild/sinharaja 1.jpeg"
      },
      {
        "title": "Udawalawa National Park",
        "description": "Established in 1972 as a haven for wildlife displaced by the Udawalawe Reservoir's construction, Udawalawe National Park spans 30,821 hectares at the Uva-Sabaragamuwa province borders in Sri Lanka. Ranking as the third most visited park, it is renowned for its vital role in water bird conservation and its significant population of around 600 Sri Lankan elephants, often seen in herds of up to 50. The park's landscape, resembling an African game park, features thorny-shrub jungles and grasslands. Alongside elephants, it hosts water buffalo, wild boar, spotted deer, sambur deer, jackals, and crocodiles, making it a popular tourist destination offering exceptional elephant safari experiences.",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3055.8691613150963!2d80.87374407360481!3d6.474628793517161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae408ff88887e79%3A0xaf12e79ffbd980d7!2sUdawalawe%20National%20Park!5e1!3m2!1sen!2slk!4v1702698400034!5m2!1sen!2slk"
      }
    ]
  };

  data.sections.forEach(section => {
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('section');

    // const sectionTitle = document.createElement('h2');
    // sectionTitle.textContent = section.title;
    // sectionElement.appendChild(sectionTitle);

    if (section.description) {
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = section.description;
      sectionElement.appendChild(descriptionElement);
    }
    

    if (section.map || section.image) {
      const mediaContainer = document.createElement('div');
      mediaContainer.classList.add('media-container');

      // if (section.map) {
      //   const mapElement = document.createElement('iframe');
      //   mapElement.src = section.map;
      //   mediaContainer.appendChild(mapElement);
      // }

      // if (section.image) {
      //   const imageElement = document.createElement('img');
      //   imageElement.src = section.image;
      //   mediaContainer.appendChild(imageElement);
      // }

      sectionElement.appendChild(mediaContainer);
    }

    contentContainer.appendChild(sectionElement);
  });