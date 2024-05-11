import React, { useState, useContext, useEffect } from "react";
import * as Form from "@radix-ui/react-form";
import { Button, Spinner } from "reactstrap";
import Dialogue from "../../../components/Dialogue";
import { DialogContext } from "../../../components/Dialogue/DialogContext";
import MultiSelect from "../../../components/MutliSelect";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { useSelector, useDispatch } from "react-redux";
import { listDonations } from "../../../services/redux/slices/OrganizerSlice";

function EventSummary() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { openDialog } = useContext(DialogContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listDonations());
  }, [dispatch]);

  const { loading, error, data, attendeesData } = useSelector((state) => ({
    loading: state.donations.donationsLoading,
    error: state.donations.donationsError,
    data: state.donations.donationsList,
    attendeesData: state.attendees.attendeeList,
  }));

  function calculateTotal(data) {
    return data?.data?.reduce(
      (total, donation) => total + Number(donation.amount),
      0
    );
  }

  const totalDonations = calculateTotal(data);

  return (
    <>
      <div className="d-flex justify-content-center ">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          {/* <div className="mt-3 mb-5">
            <h6>Manage Events</h6>
          </div> */}
          <div className="d-flex justify-content-between gap-2 align-items">
            <div className=""></div>
            <div className="">
              {/* <Button
                style={{
                  backgroundColor: "black",
                  color: "gwhite",
                  border: "1px solid #495057",
                }}
                className="fw-lighter"
                onClick={() => {
                  openDialog();
                }}
              >
                <PlusCircledIcon /> Add Event
              </Button> */}
            </div>
          </div>
          {/* menu */}
          <div className="d-flex justify-content-center gap-2 mb-4 mt-2">
            {/* <div>
              <p>Events</p>
            </div> */}
          </div>
          {/* second */}
          <div>
            <div className="mt-2 d-flex justify-content-center gap-2 mb-4 ">
              <div
                style={{
                  backgroundColor: "#171a1d",
                  border: "1px solid #495057",
                  borderRadius: "10px",
                  cursor: "pointer",
                  flexDirection: "column",
                  width: "140px",
                }}
                className="p-2 d-flex gap-2 align-items-center "
              >
                <div>
                  <img
                    src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                    width="100%"
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #495057",
                    }}
                  ></img>
                </div>
                <div className="text-start mx-3">
                  <p
                    className="fw-lighter text-center"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Attendees
                  </p>
                  <p
                    className="fw-lighter text-center fw-bolder"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {attendeesData?.data?.length}
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#171a1d",
                  border: "1px solid #495057",
                  borderRadius: "10px",
                  cursor: "pointer",
                  flexDirection: "column",
                  width: "140px",
                }}
                className="p-2 d-flex gap-2 align-items-center "
              >
                <div>
                  <img
                    src="https://i.pinimg.com/474x/61/19/45/611945528ceb5825c22610acef27a187.jpg"
                    width="100%"
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #495057",
                    }}
                  ></img>
                </div>
                <div className="text-start mx-3">
                  <p
                    className="fw-lighter text-center"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Donations
                  </p>
                  <p
                    className="fw-lighter text-center fw-bolder"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {data?.data?.length}
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#171a1d",
                  border: "1px solid #495057",
                  borderRadius: "10px",
                  cursor: "pointer",
                  flexDirection: "column",
                  width: "140px",
                }}
                className="p-2 d-flex gap-2 align-items-center "
              >
                <div>
                  <img
                    src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                    width="100%"
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #495057",
                    }}
                  ></img>
                </div>
                <div className="text-start mx-3">
                  <p
                    className="fw-lighter text-center"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Total Donation Amount{" "}
                  </p>
                  <p
                    className="fw-lighter text-center fw-bolder"
                    style={{ fontSize: "0.8rem" }}
                  >
                    GHC {totalDonations}
                  </p>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "#171a1d",
                  border: "1px solid #495057",
                  borderRadius: "10px",
                  cursor: "pointer",
                  flexDirection: "column",
                  width: "140px",
                }}
                className="p-2 d-flex gap-2 align-items-center "
              >
                <div>
                  <img
                    src="https://i.pinimg.com/736x/90/30/4b/90304b6fdbaa4dec6fe691208692d715.jpg"
                    width="100%"
                    alt="img"
                    style={{
                      borderRadius: "10px",
                      border: "1px solid #495057",
                    }}
                  ></img>
                </div>
                <div className="text-start mx-3">
                  <p className="fw-lighter text-center">Donations</p>
                  <p
                    className="fw-lighter text-center fw-bolder"
                    style={{ fontSize: "0.8rem" }}
                  >
                    GHC 2,300.00
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* third */}
          <div className="mt-5">
            <div>
              <h6>
                <u>Dontations List</u>
              </h6>
            </div>

            <div className="mt-3">
              {loading === true ? (
                <Spinner />
              ) : (
                <div>
                  <div
                    className="mt-2 "
                    style={{
                      height: "240px",
                      overflow: "scroll",
                      width: "100%",
                    }}
                  >
                    {data?.data?.map((item, key) => {
                      return (
                        <>
                          <div
                            key={key}
                            style={{
                              backgroundColor: "#171a1d",
                              border: "1px solid #495057",
                              borderRadius: "10px",
                              cursor: "pointer",
                            }}
                            className="p-2 d-flex align-items-center justify-content-between mt-2"
                          >
                            <div>
                              <img
                                src="https://i.pinimg.com/474x/61/19/45/611945528ceb5825c22610acef27a187.jpg"
                                width="50px"
                                alt="img"
                                style={{
                                  borderRadius: "10px",
                                  border: "1px solid #495057",
                                }}
                              ></img>
                            </div>
                            <div className="text-start mx-4">{item?.name}</div>
                            <div
                              className="text-start mx-3 button"
                              style={{
                                width: "max-content",
                                border: "1px solid black",
                                backgroundColor: "#f2f2f7",
                              }}
                            >
                              <b>GHC</b> {item?.amount}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventSummary;
