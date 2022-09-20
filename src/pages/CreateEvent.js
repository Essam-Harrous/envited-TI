import React, { useRef } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { BsFillCameraFill } from "react-icons/bs";
import "../styles/createEvent.css";

const CreateEvent = () => {
  const formSchema = yup.object().shape({
    EventName: yup.string(),
    HostName: yup.string(),
    startDate: yup.string(),
    endDate: yup.string(),
    location: yup.string(),
    photo: yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      EventName: "",
      HostName: "",
      startDate: "",
      endDate: "",
      location: "",
      photo: "",
    },
    onSubmit: (values) => {
      console.log(values, "form submitted");
    },
    validationSchema: formSchema,
  });

  const uploaderRef = useRef();
  const imgConRef = useRef();
  const handleUploadImg = () => {
    console.log(uploaderRef.current);
    uploaderRef.current.click();
  };

  const handleInputChange = (e) => {
    if (e.target.files.length) {
      console.log("process");
      let reader = new FileReader();
      reader.onload = (event) => {
        console.log(event.target.result, "resultttt");
        imgConRef.current.style.backgroundImage = `url(${event.target.result})`;
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      imgConRef.current.style.backgroundImage = "";
    }
  };

  return (
    <div className="bg-secondary">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 col-md-6 mx-auto">
            <div className="d-flex  flex-column justify-content-center align-items-center h-100">
              <div className="form-con w-100">
                <h4 className="text-primary">Create New Event</h4>
                <form>
                  <div onClick={handleUploadImg} className="form-group  my-3">
                    <div ref={imgConRef} className="img-con">
                      <BsFillCameraFill size={30} />
                      <p>upload a photo</p>
                    </div>
                    <input
                      ref={uploaderRef}
                      className="d-none"
                      id="file-uploader"
                      type="file"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group  my-3">
                    <label className="text-primary" for="eventName">
                      Event Name:
                    </label>
                    <input
                      className="form-control"
                      id="eventName"
                      placeholder="My Event is..."
                    />
                  </div>
                  <div className="form-group  my-3">
                    <label className="text-primary" for="hostName">
                      Host Name:
                    </label>
                    <input
                      className="form-control"
                      id="hostName"
                      placeholder="My name is..."
                    />
                  </div>
                  <div className="d-flex">
                    <div className="form-group w-50-important my-2">
                      <label className="text-primary" for="startDate">
                        Start Date & time:
                      </label>
                      <input
                        className="form-control w-75"
                        id="startDate"
                        type="datetime-local"
                      />
                    </div>

                    <div className="form-group w-50-important my-2">
                      <label className="text-primary" for="endDate">
                        End Date & time:
                      </label>
                      <input
                        className="form-control w-75"
                        id="endDate"
                        type="datetime-local"
                      />
                    </div>
                  </div>

                  <div className="form-group  my-3">
                    <label className="text-primary" for="hostName">
                      Location:
                    </label>
                    <input
                      className="form-control"
                      id="hostName"
                      placeholder="the Event is in..."
                    />
                  </div>
                </form>
                <Link to="/event">
                  <button className="btn next-btn">Next</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
