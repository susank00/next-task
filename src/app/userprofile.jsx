import Image from "next/image";

const ProfileCard = () => {
  return (
    <div style={{ fontFamily: "Helvetica" }} className="mx-[114px]">
      {/* First Section */}
      <div className="flex justify-between p-4 mt-16.5 rounded-lg shadow-md ">
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
              <p style={{ fontSize: "18px" }} className="mr-2">
                Username 76464
              </p>
              <Image
                src="/image/status.svg"
                alt="Status Icon"
                width={24}
                height={24}
              />
            </div>
            <h2
              style={{ fontFamily: "HelveticaBold" }}
              className="text-lg  mt-6.5px"
            >
              Devendra Chapagain
            </h2>
            <p>Hello, I am a UX/UI Designer</p>
            <div className="flex flex-nowrap mt-8 gap-20">
              <div>
                <div style={{ fontSize: "28px" }}>300</div>
                <div style={{ color: "#A3A3A3" }}>Courses Enrolled</div>
              </div>
              <div>
                <div style={{ fontSize: "28px" }}>1.2k</div>
                <div style={{ color: "#A3A3A3" }}>Hours Spent Learning</div>
              </div>
              <div>
                <div style={{ fontSize: "28px" }}>40</div>
                <div style={{ color: "#A3A3A3" }}>Courses Completed</div>
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
        <a href="" className="flex-shrink-0">
          <div className="flex items-center">
            <Image
              src="/image/share.svg"
              alt="Status Icon"
              width={24}
              height={24}
            />
            <p className="ml-2">Share Profile</p>
          </div>
        </a>
      </div>

      {/* Divider Line */}
      <div className="h-px bg-gray-300 my-5 w-full" />

      {/* Second Section */}

      <div className="flex flex-col p-4 mt-9 rounded-lg shadow-md">
        <h2
          style={{ fontFamily: "HelveticaBold", fontSize: "28px" }}
          className="text-lg  text-left    "
        >
          Course Enrolled
        </h2>
        <div style={{ fontSize: "20px" }} className="flex justify-between">
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
        <h2
          style={{ fontFamily: "HelveticaBold", fontSize: "28px" }}
          className="text-lg font-semibold text-left    "
        >
          Achievements and Certificates
        </h2>
        <div style={{ fontSize: "20px" }} className="flex justify-between">
          {/* Left Side: Additional Info */}
          <div className="flex-shrink-0 ">
            <div className="space-y-8 mt-5">
              <div className="flex items-center space-x-2 gap-8">
                <a href="/link-to-certificate-1" className="flex items-center">
                  <Image
                    src="/image/blank.svg"
                    alt="Certificate Icon"
                    width={37}
                    height={37}
                  />
                </a>
                <div>
                  <p>Certificate of completion</p>
                  <p style={{ color: "#A3A3A3" }}>issued on 2024/01/01</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 gap-8">
                <a href="/link-to-certificate-2" className="flex items-center">
                  <Image
                    src="/image/blank.svg"
                    alt="Certificate Icon"
                    width={37}
                    height={37}
                  />
                </a>
                <div>
                  <p>Certificate of completion</p>
                  <p style={{ color: "#A3A3A3" }}>issued on 2024/01/01</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 gap-8">
                <a href="/link-to-certificate-3" className="flex items-center">
                  <Image
                    src="/image/blank.svg"
                    alt="Certificate Icon"
                    width={37}
                    height={37}
                  />
                </a>
                <div>
                  <p>Certificate of completion</p>
                  <p style={{ color: "#A3A3A3" }}>issued on 2024/01/01</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center: Additional Information */}
          <div className="flex-shrink-0">
            <div className="space-y-8 mt-5">
              <div>
                <p>Category</p>

                <p style={{ color: "#A3A3A3" }}>Diploma</p>
              </div>
              <div>
                <p>Category</p>

                <p style={{ color: "#A3A3A3" }}>Diploma</p>
              </div>
              <div>
                <p>Category</p>

                <p style={{ color: "#A3A3A3" }}>Diploma</p>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="space-y-8 mt-5">
              <div>
                <p>skill</p>
                <p style={{ color: "#A3A3A3" }}>
                  <span>html,</span>
                  <span>css</span>
                </p>
              </div>
              <div>
                <p>skill</p>
                <p style={{ color: "#A3A3A3" }}>
                  <span>html,</span>
                  <span>css</span>
                </p>
              </div>
              <div>
                <p>skill</p>
                <p style={{ color: "#A3A3A3" }}>
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
    </div>
  );
};

export default ProfileCard;
