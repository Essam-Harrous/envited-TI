import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import "../styles/event.css";

const EventPage = () => {
  return (
    <div className="bg-secondary">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-md-6 order-2 order-md-1">
            <div className="d-flex  flex-column justify-content-center align-items-start h-100">
              <div className="detail-box-con">
                <div className="mb-5 mt-3 mt-md-0">
                  <h1 className="text-primary font-weight-bold">
                    Birthday Bash
                  </h1>
                  <p className="host-by">Hosted by Elysia</p>
                </div>
                <div className="details">
                  <div className="d-flex align-items-center justify-content-between w-100 my-4">
                    <div className="icon-con">
                      <BsCalendar3 size={30} color="#8456EC" />
                    </div>
                    <div className="item-detail-con mx-4">
                      <p className="mb-0 text-primary font-weight-bold">
                        18 August 6:00PM
                      </p>
                      <p className="mb-0">
                        to{" "}
                        <span className="font-weight-bold">
                          19 August 1:00PM
                        </span>{" "}
                        UTC +10
                      </p>
                    </div>
                    <div className="">
                      <FaAngleRight size={30} color="#BDBDBD" />
                    </div>
                  </div>

                  <div className="d-flex align-items-center justify-content-between w-100 my-4">
                    <div className="icon-con">
                      <GoLocation size={30} color="#8456EC" />
                    </div>
                    <div className="item-detail-con mx-4">
                      <p className="mb-0 text-primary font-weight-bold">
                        18 August 6:00PM
                      </p>
                      <p className="mb-0">
                        to{" "}
                        <span className="font-weight-bold">
                          19 August 1:00PM
                        </span>{" "}
                        UTC +10
                      </p>
                    </div>
                    <div className="">
                      <FaAngleRight size={30} color="#BDBDBD" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <div className="d-flex justify-content-center align-items-center h-100">
              <img width={500} src="/assets/images/Birthday cake.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
