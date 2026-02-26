import React from "react";
import { Tag } from "../Tag/Tag";
import { FavoriteButton } from "../FavoriteButton/FavoriteButton";
import './VideoCard.css';

interface VideoCardProps {
  title: string;
  videoUrl: string;
  tags: string[];
}

export const VideoCard: React.FC<VideoCardProps> = ({
  title,
  videoUrl,
  tags,
}) => {
  const handleClick = () => {
    window.open(videoUrl, "_blank");
  };

  return (
    <div className="video-card" onClick={handleClick}>
      <div className="thumbnail-container">
        <img src={getThumbnail(videoUrl)} alt={title} className="thumbnail" />
        <div className="favorite-button">
          <FavoriteButton />
        </div>
      </div>

      <div className="content">
        <h3>{title}</h3>

        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

const getThumbnail = (videoUrl: string) => {
    const match = videoUrl.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/  
    );
    const videoId = match?.[1];
    console.log(videoId);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : undefined;
  };