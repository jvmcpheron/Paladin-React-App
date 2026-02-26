import React from "react";
import './Tag.css';

interface TagProps {
  label: string;
}

export const Tag: React.FC<TagProps> = ({ label }) => {
  return <span className="tag">{label}</span>;
};