const data = {
    "header": {
      "title": "WildLife in Sri Lanka",
      "menu": [
        { "label": "Home", "link": "./index.html" },
        { "label": "Introduction", "link": "./intro.html" },
        { "label": "Department of Wildlife", "link": "./deprtofwlc.html" },
        { "label": "Sri Lankan Leopard", "link": "./slleopard.html" },
        {
          "label": "Animals in Sri Lanka",
          "link": "./Animls.html",
          "subMenu": [
            { "label": "Yala National Park", "link": "./yala.html" },
            { "label": "Wilpattu National Park", "link": "./willpattu.html" }
          ]
        }
      ]
    },
    "content": {
      "title": "Department of Wildlife Conservation",
      "description": "Department of Wildlife Conservation is a government agency in Sri Lanka responsible for the conservation and management of the country's wildlife resources. It was established in 1949 and is responsible for the implementation of wildlife conservation policies, laws, and regulations. The department manages national parks, wildlife reserves, and sanctuaries, and is also involved in research, education, and awareness-raising activities. The department works to protect and conserve Sri Lanka's rich biodiversity, including its many endemic species, and to mitigate human-wildlife conflicts."
    },
    "gallery": [
      { "image": "./deprtofwldlfe/willpattu 2.jpg", "title": "Willpattu National Park" },
      { "image": "./deprtofwldlfe/yala 2.jpg", "title": "Yala National Park" },
      { "image": "./deprtofwldlfe/minneriya.jpg", "title": "Minneriya National Park" },
      { "image": "./deprtofwldlfe/Udawalawe-National-Park-5.jpg", "title": "Udawalawa National Park" }
    ],
    "additionalContent": {
      "iframeSrc": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.945702755621!2d79.91723077348571!3d6.897098018712245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae250aa85489b1f%3A0xd8773339b6b43dbb!2sDepartment%20of%20Wildlife%20Conservation!5e0!3m2!1sen!2slk!4v1704435321280!5m2!1sen!2slk",
      "imageSrc": "./deprtofwldlfe/dprtmnt of wildlife.jpg",
      "list": [
        "The Department of Wildlife Conservation (DWC) in Sri Lanka is responsible for the protection and conservation of biodiversity, and prevention of commercial and other misuse of fauna, flora and their habitats in Sri Lanka.",
        "The main duties of field level wildlife officers with regard to protection and conservation of biodiversity in the country include wildlife crime investigation and taking legal actions against offenders. However, there are some loopholes in the existing system that affect the effective implementation of legal actions at the ground level.",
        "The DWC is also responsible for the long-term conservation and protection of biological diversity in Sri Lanka.",
        "The department provides compulsory training to staff and has facilities for researchers, and is currently being developed to become an International Training School.",
        "The department has faced challenges in undertaking wildlife disease surveillance due to obstacles such as lack of transport facilities, skilled staff, infrastructure, human resources, training, and a mandate for getting involved in wildlife disease surveillance."
      ]
    },
    "footer": {
      "copyright": "All Right Reserved.",
      "poweredBy": "Miyulas Induwara"
    }
  };

  // Rendering Header
//   const headerTitle = document.getElementById('header-title');
//   headerTitle.textContent = data.header.title;

//   const menu = document.getElementById('menu');
//   data.header.menu.forEach(item => {
//     const menuItem = document.createElement('a');
//     menuItem.textContent = item.label;
//     menuItem.href = item.link;
//     menu.appendChild(menuItem);

//     if (item.subMenu) {
//       const subMenu = document.createElement('ul');
//       item.subMenu.forEach(subItem => {
//         const subMenuItem = document.createElement('li');
//         const subMenuLink = document.createElement('a');
//         subMenuLink.textContent = subItem.label;
//         subMenuLink.href = subItem.link;
//         subMenuItem.appendChild(subMenuLink);
//         subMenu.appendChild(subMenuItem);
//       });
//       menuItem.appendChild(subMenu);
//     }
//   });

  // Rendering Content
  const contentTitle = document.getElementById('content');
  contentTitle.innerHTML = `
    <h2>${data.content.title}</h2>
    <br>
    <br>
    <p>${data.content.description}</p>
  `;

  // Rendering Gallery
  const gallery = document.getElementById('gallery');
  data.gallery.forEach(item => {
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    gallery.appendChild(image);
  });

  // Rendering Additional Content
  const additionalContent = document.getElementById('additional-content');
  additionalContent.innerHTML = `
    <iframe src="${data.additionalContent.iframeSrc}" frameborder="0"></iframe>
    <img src="${data.additionalContent.imageSrc}" alt="Department of Wildlife Conservation">
    <ul>
      ${data.additionalContent.list.map(item => `<li>${item}</li>`).join('')}
      
    </ul>
  `;

  // Rendering Footer
  const copyright = document.getElementById('copyright');
  copyright.textContent = data.footer.copyright;

  const poweredBy = document.getElementById('powered-by');
  poweredBy.textContent = `Powered by ${data.footer.poweredBy}`;