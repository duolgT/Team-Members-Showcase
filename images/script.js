
    const members = [
      { image: "images/alex_morgan.jpg", name: "Alex Morgan", role: "Project Manager", bio: "Alex has over 10 years of experience in project management and has led multiple successful projects in the tech industry." },
      { image: "images/jordan lee.jpg", name: "Jordan Lee", role: "UX Designer", bio: "Jordan is a passionate UX designer with a focus on creating intuitive and user-friendly interfaces." },
      { image: "images/taylor_kim.jpg", name: "Taylor Kim ", role: "Software Developer", bio: "Taylor is a skilled software developer with expertise in building scalable and maintainable applications." },
      { image: "images/amuel_chen.jfif", name: "Samuel Chen", role: "Data Analyst", bio: "Samuel specializes in data analysis and visualization, helping teams make data-driven decisions." },
      { image: "images/olivia_patel.jfif", name: "Olivia Patel", role: "Marketing Specialist", bio: "Olivia has a strong background in digital marketing and is adept at creating effective marketing strategies." },
      { image: "images/liam_wilson.jfif", name: "Liam Wilson", role: "Quality Assurance Engineer", bio: "Liam is dedicated to ensuring the highest quality standards in software development through rigorous testing and quality assurance practices." }
    ];

    const teamMembers = document.querySelector(".team-members");

    members.forEach((member) => {
      const card = document.createElement("article");
      card.className = "member-card";

      const img = document.createElement("img");
      img.src = member.image;
      img.alt = member.name;

      const details = document.createElement("div");
      details.className = "member-info";

      const name = document.createElement("h2");
      name.textContent = member.name;

      const role = document.createElement("p");
      role.className = "member-role";
      role.textContent = member.role;

      const bio = document.createElement("p");
      bio.className = "member-bio";
      bio.textContent = member.bio;

      details.append(name, role, bio);
      card.append(img, details);
      teamMembers.append(card);
    });
  