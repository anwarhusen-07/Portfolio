import { useEffect, useState } from "react";
import AchievementItem from "../components/AchievementItem";
import { achievementData, categories } from "../data/achievementsData";
import { ImageList, ImageListItem } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

function Achievements() {
  const isMobile = useMediaQuery("(max-width: 900px)");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (category) => {
    setIsDropdownOpen(false);
    setActiveCategory(category);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const filteredAchievements = achievementData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <article className="blog active" data-page="blog">
      <header>
        <h2 className="h2 article-title">Achievements</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={activeCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <div className="filter-select-box">
          <button
            className={`filter-select active`}
            data-select
            onClick={handleDropdownToggle}
          >
            <div className="select-value" data-select-value>
              {activeCategory}
            </div>

            <div className="select-icon">
              {isDropdownOpen ? <KeyboardArrowDown /> : <KeyboardArrowUp />}
            </div>
          </button>

          {isDropdownOpen && (
            <ul className="select-list">
              {categories.map((category, index) => (
                <li key={index} className="select-item">
                  <button
                    onClick={() => handleCategoryClick(category)}
                    data-select-item
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <ImageList variant="masonry" cols={isMobile ? 1 : 2} gap={"1.7rem"}>
          {filteredAchievements.map((data) => (
            <ImageListItem key={data.title}>
              <AchievementItem
                images={data.images}
                title={data.title}
                date={data.date}
                desc={data.desc}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </section>
    </article>
  );
}

export default Achievements;
