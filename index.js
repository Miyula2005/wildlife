var jsonData = {
    "content": {
      "header1": {
        "id": "header1",
        "center": {
          "style": "color: rgb(0, 0, 0);",
          "h3": {
            "class": "para-1",
            "text": "Sri Lanka's wildlife is as varied as the island itself, ranging from elephants and leopards to marine life and a vast number of different birds, and Sri Lanka is now one of the best places in the world to see whales, including the mighty blue whale. With 12% of the country designated for wildlife protection, it is easy to get a taste of Sri Lankan wildlife.safari parks and sanctuaries, particularly in the southern and central zones, offer the easiest way to see animals in their natural habitat.<br> Stay alert for a sighting of the endangered leopard.<br> take your time as you watch the elephants feeding and washing in a tank or lagoon, or walk quietly along the beaches of the west and south coast near to marine turtles as they lay their eggs.so'"
          },
          "b": {
            "h2": {
              "class": "font-3",
              "text": "Welcome to the wildlife of Sri Lanka!"
            }
          }
        }
      },
      "sub-para-1": {
        "class": "sub-para-1",
        "text": "Sri Lanka's 2.14% lowland rainforests, exemplified by the UNESCO Sinharaja Forest Reserve, are vital ecosystems boasting rich biodiversity. With an annual rainfall of 2,500-1,800mm, Sinharaja preserves over 60% endemic trees, supporting 50% of the country's endemic mammals and butterflies.<br><br> Beyond borders, the reserve acts as a sanctuary for 70% of Sri Lanka's endemic species, serving essential ecosystem functions like watershed regulation. Dominated by Dipterocarpaceae trees, Sinharaja stands as a global ecological hotspot. Despite its compact size, the reserve underscores the delicate balance needed for biodiversity, emphasizing a global responsibility to preserve these natural treasures for present and future generations."
      },
      "sub-para-2": {
        "class": "sub-para-2",
        "text": "The Dry Zone in Sri Lanka, housing the Sri Lanka dry-zone dry evergreen forests, features flat topography and an annual 2,000 mm rainfall during the northeast monsoon. Stretching across the northern, eastern, and southeastern regions, it's crucial for agriculture, relying on rivers for irrigation.<br><br> Characterized by evergreen trees, distinct from deciduous ones, it defines the ecoregion. Development programs, like the Mahaweli Development Program, enhance crop production through farmer-managed irrigation. The Sri Lanka Dry-Zone Dry Evergreen Forests host over 6,000 Asian elephants, despite remaining mostly dry. With vital rivers for irrigation, the Dry Zone supports aquaculture development, contributing to sustainable agricultural practices and maintaining its dual identity as an agricultural hub and wildlife haven."
      },
      "sub-para-3": {
        "class": "sub-para-3",
        "text": "Sri Lanka's Tropical Lower Montane Forests, situated above 1,000 m in the Central Highlands and Knuckles mountains, cover 1.1% of the land area, exhibiting optimal development above 1,500 m. Characterized by unique floristic composition and simpler structures with canopies reaching around 30 feet, approximately 50% of species here are exclusive to Sri Lanka. Cooler than lowland forests, these montane forests foster ideal conditions for cloud forest growth.<br><br> Covering 0.05% of Sri Lanka's total area, the montane rainforests on mountain tops like Pidurutalagala and Hakgala host half of the nation's endemic flowering plants and 51% of endemic vertebrates. At lower elevations (1,000–1,500 m), sub-montane forests cover 1.04% of the nation's area. Recognized as a super-hotspot within global endemic hotspots, the Sri Lanka montane rainforests are of immense ecological significance due to their rich biodiversity."
      },
      "wild-sec-1": {
        "class": "wild-sec-1",
        "text": "Sri Lanka is a wildlife haven, boasting a rich array of flora and fauna. Renowned for its exceptional national parks, the country offers the chance to encounter diverse species such as the elusive leopard, majestic elephants, blue whales, and an abundance of exotic birds. These highlights encapsulate the remarkable biodiversity of Sri Lanka, making it a paradise for wildlife enthusiasts."
      },
      "wild-hotspot": {
        "type": "disc",
        "items": [
          {"class": "wild-hotspot-1", "text": "Yala National Park: for its population of leopards, Yala National Park is one of the best places in the world for observing and photographing these majestic big cats."},
          {"class": "wild-hotspot-2", "text": "Sinharaja Forest Reserve: UNESCO World Heritage Site is a biodiversity hotspot, home to a rich variety of flora and fauna, including many endemic species"},
          {"class": "wild-hotspot-3", "text": "Udawalawe National Park: for its large population of wild elephants, Udawalawe offers a guaranteed opportunity to see these magnificent creatures in their natural habitat."}
        ]
      },
      "wild-experiences": {
        "items": [
          {"class": "wild-heading-1", "text": "The Gathering of Elephants: Witness the largest seasonally recurring concentration of wild elephants at Minneriya and Kaudulla National Parks, where over 300 elephants may gather on the seasonally drying lake bed."},
          {"class": "wild-heading-2", "text": "Blue and Sperm Whales: Lanka offers exceptional opportunities for whale watching, with Mirissa and Trincomalee being among the best locations for observing blue whales, the largest animals on earth, and sperm whales."}
        ]
      },
      "conservation-biodiversity": {
        "items": [
          "Sri Lanka boasts a high rate of biological endemism, with approximately 16% of its flora and fauna being unique to the island",
          "The country's montane and sub-montane wet forests, such as the Sri Lanka Montane Rainforests, are home to a wealth of endemic species, including flora and fauna that have evolved in isolation over millions of years."
        ]
      }
    }
  };


// Assuming `contentContainer` is the container where you want to append the sections
const contentContainer = document.getElementById('content-container');

Object.values(jsonData.content).forEach(content => {
    const sectionElement = document.createElement('section');
    sectionElement.classList.add(content.class); // Add class if needed

    if (content.text) {
        const paragraphElement = document.createElement('p');
        paragraphElement.innerHTML = content.text; // Use innerHTML to render HTML tags
        sectionElement.appendChild(paragraphElement);
    }

    if (content.type === 'disc' && content.items) {
        const listElement = document.createElement('ul');
        content.items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add(item.class); // Add class if needed
            listItem.innerHTML = item.text; // Use innerHTML to render HTML tags
            listElement.appendChild(listItem);
        });
        sectionElement.appendChild(listElement);
    }

    contentContainer.appendChild(sectionElement);
});
