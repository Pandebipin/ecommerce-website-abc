import React from "react";
import ReactStars from "react-rating-stars-component";
const RatingBar = ({
  children,
  className,
  starCount = 4,
  color = "grey",
  activeColor = "red",
  isEditable = false,
  ...restProps
}) => {
  return (
    <>
      <ReactStars
        className={className}
        count={starCount}
        color={color}
        activeColor={activeColor}
        edit={isEditable}
        {...restProps}
      />
      {children}
    </>
  );
};
export { RatingBar };
