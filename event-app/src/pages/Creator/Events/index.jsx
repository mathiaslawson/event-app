import React, { useState, useContext } from "react";
import * as Ariakit from "@ariakit/react";
import "./styles.css";
import AddEvents from "./AddEvents";
import EventSummary from "./EventSummary";
import Attendes from "./Attendes";

function Index() {
  const defaultSelectedId = "default-selected-tab";

  return (
    <>
      {" "}
      {/* <div className="wrapper">
        <Ariakit.TabProvider defaultSelectedId={defaultSelectedId}>
          <Ariakit.TabList className="tab-list" aria-label="Groceries">
            <Ariakit.Tab className="tab">Fruits</Ariakit.Tab>
            <Ariakit.Tab className="tab" id={defaultSelectedId}>
              Vegetables
            </Ariakit.Tab>
            <Ariakit.Tab className="tab">Meat</Ariakit.Tab>
          </Ariakit.TabList>
          <div className="panels">
            <Ariakit.TabPanel>
              <ul>
                <li>🍎 Apple</li>
                <li>🍇 Grape</li>
                <li>🍊 Orange</li>
              </ul>
            </Ariakit.TabPanel>
            <Ariakit.TabPanel tabId={defaultSelectedId}>
              <ul>
                <li>🥕 Carrot</li>
                <li>🧅 Onion</li>
                <li>🥔 Potato</li>
              </ul>
            </Ariakit.TabPanel>
            <Ariakit.TabPanel>
              <ul>
                <li>🥩 Beef</li>
                <li>🍗 Chicken</li>
                <li>🥓 Pork</li>
              </ul>
            </Ariakit.TabPanel>
          </div>
        </Ariakit.TabProvider>
      </div> */}
      <div className="d-flex justify-content-center mt-5">
        <div
          style={{ backgroundColor: "#212529", borderRadius: "10px" }}
          className="p-5"
        >
          <div className="">
            <Ariakit.TabProvider defaultSelectedId={defaultSelectedId}>
              <Ariakit.TabList className="tab-list" aria-label="Groceries">
                <Ariakit.Tab className="tab" id={defaultSelectedId}>
                  Events
                </Ariakit.Tab>
                <Ariakit.Tab className="tab">Summary</Ariakit.Tab>
                <Ariakit.Tab className="tab">Attendees</Ariakit.Tab>
              </Ariakit.TabList>

              <div className="panels">
                <Ariakit.TabPanel tabId={defaultSelectedId}>
                  <AddEvents />
                </Ariakit.TabPanel>

                <Ariakit.TabPanel>
                  <EventSummary />
                </Ariakit.TabPanel>
                <Ariakit.TabPanel>
                  <Attendes />
                </Ariakit.TabPanel>
              </div>
            </Ariakit.TabProvider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
