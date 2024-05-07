import React from "react";

const sizeClasses = {
  txtGilroyMedium16Black900: "font-gilroy font-medium",
  txtGilroySemiBold32: "font-gilroy font-semibold",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium20Bluegray400: "font-gilroy font-medium",
  txtGilroyMedium20BlueA700: "font-gilroy font-medium",
  txtGilroyMedium18Green600: "font-gilroy font-medium",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyMedium18Red700: "font-gilroy font-medium",
  txtGilroyMedium24: "font-gilroy font-medium",
  txtUrbanistItalicThin24: "font-hairline font-urbanist italic",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroyMedium24Bluegray900: "font-gilroy font-medium",
  txtGilroyMedium24Black90001: "font-gilroy font-medium",
  txtGilroyMedium18Bluegray900: "font-gilroy font-medium",
  txtChivoBold50: "font-chivo font-normal",
  txtOpenSansMedium14: "font-medium font-opensans",
  txtOpenSansMedium24: "font-medium font-opensans",
  txtOpenSansMedium16: "font-medium font-opensans",
  txtGilroyMedium18Black90002: "font-gilroy font-medium",
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
