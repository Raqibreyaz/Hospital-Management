import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-md" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 shadow-bs",
    blue_A700_01: "bg-blue-A700_01 text-white-A700",
  },
  outline: {
    blue_A700_01: "border border-blue-A700_01 border-solid text-blue-A700_01",
    blue_gray_400:
      "border border-blue_gray-400 border-solid text-blue_gray-400",
  },
};
const sizes = { xs: "p-0.5", sm: "p-[9px]", md: "p-3.5", lg: "p-[17px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["white_A700", "blue_A700_01", "blue_gray_400"]),
};

export { Button };
