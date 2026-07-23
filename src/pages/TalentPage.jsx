import React, { useState } from "react";
import {
  FiSearch,
  FiCode,
  FiBriefcase,
  FiMapPin,
  FiExternalLink,
  FiFilter,
} from "react-icons/fi";
import "./TalentPage.css";

const CATEGORIES = [
  "All",
  "Full-Stack",
  "Front-End",
  "UI/UX Design",
  "Backend & DevOps",
];

const TALENT_DATA = [
  {
    id: 1,
    name: "Erastus Wainaina",
    role: "Full-Stack Engineer & Web Designer",
    location: "Nairobi, Kenya",
    category: "Full-Stack",
    experience: "3+ Years Exp.",
    bio: "Specializes in building modern web applications with React, Tailwind CSS, and Express. js.",
    skills: ["React", "Tailwind CSS", "Node.js", "Express", "Photoshop"],
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    availability: "Available Now",
  },
  {
    id: 2,
    name: "Amina Hassan",
    role: "Senior UI/UX & Brand Designer",
    location: "Nairobi, Kenya",
    category: "UI/UX Design",
    experience: "5+ Years Exp.",
    bio: "Crafts design systems, high-fidelity prototypes, and brand identities for scale.",
    skills: ["Figma", "Affinity Designer", "Design Systems", "Prototyping"],
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    availability: "Available Now",
  },
  {
    id: 3,
    name: "Kevin Ochieng",
    role: "Backend & Cloud Engineer",
    location: "Nairobi, Kenya",
    category: "Backend & DevOps",
    experience: "4+ Years Exp.",
    bio: "Focuses on scalable microservices, API architecture, and cloud deployment pipelines.",
    skills: ["Node.js", "PostgreSQL", "Docker", "AWS", "REST APIs"],
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    availability: "In Contract",
  },
  {
    id: 4,
    name: "Brenda Wanjiku",
    role: "Front-End React Specialist",
    location: "Nairobi, Kenya",
    category: "Front-End",
    experience: "3+ Years Exp.",
    bio: "Passionate about responsive web performance, animations, and clean UI components.",
    skills: ["React", "JavaScript", "CSS3 / Sass", "Framer Motion"],
    avatar:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    availability: "Available Now",
  },
  {
    id: 5,
    name: "Dennis Mwangi",
    role: "Brand Mockups & Graphics Specialist",
    location: "Nairobi, Kenya",
    category: "Graphic Design",
    experience: "2+ Years Exp.",
    bio: "Creates high-impact brand identities, print layouts, and digital mockups.",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "InDesign",
      "Framer Motion",
    ],
    avatar:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600",
    availability: "Available Now",
  },
  {
    id: 6,
    name: "Faith Kamau",
    role: "Customer Support & Virtual Assistant",
    location: "Nairobi, Kenya",
    category: "Virtual Support",
    experience: "3+ Years Exp.",
    bio: "Provides proactive customer support, inbox management, administrative workflows, and client ticketing resolution.",
    skills: ["Zendesk", "Intercom", "Freshdesk", "Google Workspace", "Notion"],
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    availability: "Available Now",
  },
  {
    id: 7,
    name: "Brian Kiprop",
    role: "Community & Chat Moderator",
    location: "Nairobi, Kenya",
    category: "Chat Moderation",
    experience: "2+ Years Exp.",
    bio: "Manages live web chats, Discord communities, and Telegram groups with active engagement and strict spam safety moderation.",
    skills: [
      "Discord Bots",
      "Telegram Admin",
      "Live Chat",
      "Crisp",
      "Community Management",
    ],
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    availability: "Available Now",
  },
];

export default function TalentPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTalent = TALENT_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === "All" || item.category === activeCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="talent-page">
      <div className="talent-container">
        <header className="talent-hero">
          <span className="talent-badge">Vetted Digital Professionals</span>
          <h1 className="talent-title">
            Work with Kenya's Top Digital Craftsmen
          </h1>
          <p className="talent-subtitle">
            Explore world-class web developers, UI/UX strategists, and software
            engineers ready to integrate directly into your production team.
          </p>

          <div className="talent-filter-bar">
            <div className="talent-search-box">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search by name, role, or technology..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="talent-categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className={`category-btn ${activeCategory === cat ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="talent-grid-container">
          {filteredTalent.length > 0 ? (
            <div className="talent-grid">
              {filteredTalent.map((member) => (
                <article key={member.id} className="talent-card">
                 
                  <div className="card-top">
                    <div className="avatar-wrapper">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="talent-avatar"
                      />
                      <span
                        className={`status-indicator ${
                          member.availability === "Available Now"
                            ? "status-online"
                            : "status-busy"
                        }`}
                        title={member.availability}
                      />
                    </div>
                    <div className="talent-meta">
                      <span className="availability-tag">
                        {member.availability}
                      </span>
                      <span className="experience-tag">
                        <FiBriefcase size={13} /> {member.experience}
                      </span>
                    </div>
                  </div>

                  {/* BODY INFO */}
                  <div className="card-body">
                    <h3 className="talent-name">{member.name}</h3>
                    <p className="talent-role">{member.role}</p>

                    <div className="talent-location">
                      <FiMapPin size={14} />
                      <span>{member.location}</span>
                    </div>

                    <p className="talent-bio">{member.bio}</p>

                    <div className="skills-container">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="skill-chip">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-footer">
                    <button className="btn-sec">View Profile</button>
                    <button className="btn-talent">
                      Hire Talent <FiExternalLink size={14} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <FiFilter size={36} />
              <h3>No matching talent found</h3>
              <p>
                Try resetting your search query or selecting a different skill
                category.
              </p>
              <button
                className="btn-primary"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
