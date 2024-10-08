import { FiGithub, FiExternalLink } from "react-icons/fi";
import "../css/projects.css";

 const CardProject = ({
  extlink="/",
  imgsrc,
  name="nombre del proyecto",
  repolink="https://github.com/",
  description="descripcion",
  techname="nombre de tecnologia",
}) => {
  return (
    <article
      className="projects_item"
      data-bg={ `url(${imgsrc})` }
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="item_info">
        <div className="item_heading">
          <h3 className="item_title">
            <a
              href={extlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {name}
            </a>
          </h3>
          <div className="item_links">
            <a
              className="repo_link"
              href={repolink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </a>
            <a
              className="external_link"
              href={extlink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
        <p className="item_description">{description}</p>
        <ul className="item_technologies">{techname}</ul>
      </div>
    </article>
  );
};

export default CardProject;