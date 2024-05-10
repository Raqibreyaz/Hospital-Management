import React from "react";

import { Button, Img, Input, Text } from "components";

const SignUpPage = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy sm:gap-10 md:gap-10 gap-[79px] items-center justify-start mx-auto p-[35px] sm:px-5 w-full">
        <header className="flex items-center justify-center md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
            <div className="header-row my-[7px]">
              <Img
                className="h-[35px]"
                src="images/img_group10392_21.svg"
                alt="Group10392"
              />
              <div className="mobile-menu">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-6 sm:hidden items-start justify-center md:ml-[0] ml-[285px] w-[30%] md:w-full">
              <div className="flex flex-row gap-[11px] items-start justify-between w-[27%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Products
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-row gap-[9px] items-start justify-center w-[28%] sm:w-full">
                <Text
                  className="mt-[3px] text-base text-gray-900"
                  size="txtGilroyMedium16Gray900"
                >
                  Resouces
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_gray_900.svg"
                  alt="arrowdown One"
                />
              </div>
              <Text
                className="sm:mt-0 mt-1 text-base text-gray-900"
                size="txtGilroyMedium16Gray900"
              >
                Request a demo
              </Text>
            </div>
            <div className="flex md:flex-1 flex-row gap-6 sm:hidden items-center justify-between md:ml-[0] ml-[225px] rounded-md w-[18%] md:w-full">
              <a href="javascript:" className="text-base text-gray-900">
                <Text size="txtGilroyMedium16Gray900">Sign in</Text>
              </a>
              <Button
                className="cursor-pointer font-medium min-w-[148px] text-base text-center"
                shape="round"
                color="blue_A700_01"
                size="md"
                variant="fill"
              >
                Sign up for free
              </Button>
            </div>
          </div>
        </header>
        <div className="flex flex-col gap-[34px] items-center justify-start mb-[364px] md:px-5 w-[39%] md:w-full">
          <Text
            className="md:text-3xl sm:text-[28px] text-[32px] text-blue_gray-900"
            size="txtGilroySemiBold32"
          >
            Create Account
          </Text>
          <div className="flex flex-col items-center justify-end pt-[5px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row gap-4 items-center justify-between w-full">
                <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    First Name
                  </Text>
                  <Input
                    name="Group10198"
                    placeholder="jane"
                    className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
                <div className="flex sm:flex-1 flex-col gap-[7px] items-start justify-start rounded-lg w-[49%] sm:w-full">
                  <Text
                    className="text-blue_gray-900 text-lg"
                    size="txtGilroyMedium18Bluegray900"
                  >
                    Last Name
                  </Text>
                  <Input
                    name="Group10198 One"
                    placeholder="Jnson"
                    className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                    shape="round"
                    color="white_A700"
                    size="sm"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start mt-[19px] rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18Bluegray900"
                >
                  Mobile Number
                </Text>
                <Input
                  name="mobileNo"
                  placeholder="+91 1234567890"
                  className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  shape="round"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18Bluegray900"
                >
                  Email
                </Text>
                <Input
                  name="email"
                  placeholder="jane@gmail.com"
                  className="font-medium p-0 placeholder:text-blue_gray-700 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  type="email"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col gap-1.5 items-start justify-start mt-[21px] rounded-lg w-full">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroyMedium18Bluegray900"
                >
                  Set Password
                </Text>
                <Input
                  name="Group10198 Two"
                  placeholder="Set password"
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-left text-lg w-full"
                  wrapClassName="border border-blue_gray-100 border-solid rounded-lg w-full"
                  type="password"
                  shape="round"
                  color="white_A700"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
              <Button
                className="cursor-pointer font-medium min-w-[528px] sm:min-w-full mt-6 text-base text-center"
                shape="round"
                color="blue_A700_01"
                size="lg"
                variant="fill"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
