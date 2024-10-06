import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="mx-[114px]">
      {/* First Section */}
      <div className="flex justify-between p-4 mt-40 rounded-lg shadow-md ">
        {/* Left Side: Profile Image */}
        <div className="flex-shrink-0 ">
          <Image
            src="/image/Container.svg"
            alt="Profile Picture"
            className="rounded-full border-2 border-gray-300"
            width={192}
            height={192}
          />
        </div>

        {/* Center: Name and Info */}
        <div className="flex-grow ml-20 ">
          <div>
            <div className="flex items-center">
              <div
                style={{
                  position: "absolute",
                  width: "16.25rem",
                  height: "16.25rem",
                  backgroundColor: "#FFB7C3",
                  opacity: 0.4,
                  borderRadius: "50%",
                  boxShadow: "0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1)",
                  filter:
                    "blur(4rem) brightness(0.3) contrast(1) grayscale(0) hue-rotate(0deg) invert(0) saturate(1) sepia(0) drop-shadow(0rem 0.25rem 0.375rem rgba(0, 0, 0, 0.1))",
                  zIndex: 0,
                  left: "10%",
                }}
              ></div>
              <p className="mr-2">Username 76464</p>
              <Image
                src="/image/status.svg"
                alt="Status Icon"
                width={24}
                height={24}
              />
            </div>
            <h2 className="text-lg font-semibold mt-6.5px">
              Devendra Chapagain
            </h2>
            <p>Hello, I am a UX/UI Designer</p>
            <div className="flex flex-nowrap mt-8 gap-20">
              <div>
                <div>300</div>
                <div>Courses Enrolled</div>
              </div>
              <div>
                <div>1.2k</div>
                <div>Hours Spent Learning</div>
              </div>
              <div>
                <div>40</div>
                <div>Courses Completed</div>
              </div>
            </div>
            <div className="flex gap-5 mt-5">
              <Image
                src="/image/fb.svg"
                alt="Facebook"
                width={37}
                height={37}
              />
              <Image
                src="/image/insta.svg"
                alt="Instagram"
                width={37}
                height={37}
              />
              <Image
                src="/image/linkedin.svg"
                alt="LinkedIn"
                width={37}
                height={37}
              />
              <Image
                src="/image/internet.svg"
                alt="Website"
                width={37}
                height={37}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Share Profile */}
        <div className="flex-shrink-0   ">
          <div className="flex items-center">
            <Image
              src="/image/share.svg"
              alt="Status Icon"
              width={24}
              height={24}
            />

            <p className="ml-2">Share Profile</p>
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="h-px bg-gray-300 my-5" />
      {/* Second Section */}

      <div className="flex flex-col p-4 mt-9 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-left    ">Course Enrolled</h2>
        <div className="flex justify-between">
          {/* Left Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div>Web Development</div>
              <div>Digital Marketing</div>
              <div>Content Writing</div>
              <div>Graphics Designing</div>
            </div>
          </div>

          {/* Center: Additional Information */}
          <div className="flex-shrink-0">
            <div className="space-y-8 mt-5">
              <div>Diploma</div>
              <div>Crash Course</div>
              <div>Diploma</div>
              <div>Crash Course</div>
            </div>
          </div>

          {/* Right Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div>2 lesson 1 hours</div>
              <div>Crash Course</div>
              <div>Diploma</div>
              <div>Crash Course</div>
            </div>
          </div>
        </div>
      </div>

      {/* third section start */}
      <div className="flex flex-col p-4 mt-8 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-left    ">
          Achievements and Certificates
        </h2>
        <div className="flex justify-between">
          {/* Left Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div className="flex items-center space-x-2 gap-8">
                <Image
                  src="/image/blank.svg"
                  alt="Facebook"
                  width={37}
                  height={37}
                />
                <div>
                  <p>Certificate of completion</p>
                  <p>issued on 2024/01/01</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 gap-8">
                <Image
                  src="/image/blank.svg"
                  alt="Facebook"
                  width={37}
                  height={37}
                />
                <div>
                  <p>Certificate of completion</p>
                  <p>issued on 2024/01/01</p>
                </div>
              </div>
              <div className="flex items-center space-x-2 gap-8">
                <Image
                  src="/image/blank.svg"
                  alt="Facebook"
                  width={37}
                  height={37}
                />
                <div>
                  <p>Certificate of completion</p>
                  <p>issued on 2024/01/01</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Additional Information */}
          <div className="flex-shrink-0">
            <div className="space-y-8 mt-5">
              <div>
                <p>Category</p>

                <p>Diploma</p>
              </div>
              <div>
                <p>Category</p>

                <p>Diploma</p>
              </div>
              <div>
                <p>Category</p>

                <p>Diploma</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="space-y-8 mt-5">
              <div>
                <p>skill</p>
                <p>
                  <span>html,</span>
                  <span>css</span>
                </p>
              </div>
              <div>
                <p>skill</p>
                <p>
                  <span>html,</span>
                  <span>css</span>
                </p>
              </div>
              <div>
                <p>skill</p>
                <p>
                  <span>html,</span>
                  <span>css</span>
                </p>
              </div>
            </div>
          </div>
          {/* Right Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div>
                <button
                  style={{
                    backgroundColor: "#232323",
                    width: "191px",
                    height: "47px",
                    borderRadius: "8px",
                  }}
                  className="text-white font-semibold transition duration-200"
                >
                  Show credentials
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#232323",
                    width: "191px",
                    height: "47px",
                    borderRadius: "8px",
                  }}
                  className="text-white font-semibold transition duration-200"
                >
                  Show credentials
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#232323",
                    width: "191px",
                    height: "47px",
                    borderRadius: "8px",
                  }}
                  className="text-white font-semibold transition duration-200"
                >
                  Show credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fourth section start footer section */}
      <div className="flex flex-col p-4 mt-8 rounded-lg shadow-md">
        {/* <h2 className="text-lg font-semibold text-left    ">
          Achievements and Certificates
        </h2> */}
        <div className="flex justify-between">
          {/* Left Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div className="flex items-center space-x-2 gap-4">
                <div>
                  <Image
                    src="/image/logo.svg"
                    alt="logo"
                    width={112.6}
                    height={25}
                  />
                  <p style={{ maxWidth: "260px" }} className="mt-4">
                    Learn from the top 1% in Nepal and level up your personal
                    and career growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Additional Information */}
          <div className="flex-shrink-0">
            <div className="space-y-6 mt-5">
              <p>Company</p>
              <div className="space-y-4 ">
                <p>About us</p>
                <p>Categories</p>
                <p>Contact us</p>
              </div>
            </div>
          </div>
          {/* third column */}
          <div className="flex-shrink-0">
            <div className="space-y-6 mt-5">
              <p>Policy</p>
              <div className="space-y-4 ">
                <p>Terms and Conditions</p>
                <p>Work policy</p>
                <p>Privacy policy</p>
              </div>
            </div>
          </div>
          {/* Right Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div>
                <button
                  style={{
                    backgroundColor: "#232323",
                    width: "191px",
                    height: "47px",
                    borderRadius: "8px",
                  }}
                  className="text-white font-semibold transition duration-200"
                >
                  Show credentials
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#232323",
                    width: "191px",
                    height: "47px",
                    borderRadius: "8px",
                  }}
                  className="text-white font-semibold transition duration-200"
                >
                  Show credentials
                </button>
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: "#232323",
                    width: "191px",
                    height: "47px",
                    borderRadius: "8px",
                  }}
                  className="text-white font-semibold transition duration-200"
                >
                  Show credentials
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
