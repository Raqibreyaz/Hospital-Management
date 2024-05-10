import React from "react";

const sizeClasses = {
  txtGilroySemiBold24: "font-gilroy font-semibold",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroySemiBold32Black900: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyRegular16Bluegray400: "font-gilroy font-normal",
  txtGilroyMedium12: "font-gilroy font-medium",
  txtGilroySemiBold18: "font-gilroy font-semibold",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray900: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtGilroySemiBold14: "font-gilroy font-semibold",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtGilroyMedium16Gray900: "font-gilroy font-medium",
  txtGilroyMedium16Bluegray800: "font-gilroy font-medium",
  txtGilroyRegular18: "font-gilroy font-normal",
  txtGilroyMedium16Bluegray400: "font-gilroy font-medium",
  txtGilroySemiBold16BlueA70001: "font-gilroy font-semibold",
  txtGilroyMedium16Bluegray40001: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
