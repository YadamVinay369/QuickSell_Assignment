import React from "react";
import { useSelector } from "react-redux";
import { BiCompass } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import Card from "../Card/Card";

const DashBoard = () => {
  const { selectedData, user } = useSelector(
    (state) => state.SelectDataReducer
  );

  return (
    selectedData && (
      <div className="dashContainer" style={{ justifyContent: "space-evenly" }}>
        {selectedData.map((elem, index) => {
          return (
            <>
              <div key={index} className="dashCardContainer">
                <div className="dashCardHeading flex-sb">
                  <div className="leftView">
                    {!user ? (
                      <BiCompass />
                    ) : (
                      <>
                        <div
                          className="imageContainer relative"
                          style={{
                            width: "15px",
                            height: "15px",
                            display: "inline-block",
                          }}
                        >
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              borderRadius: "50%",
                            }}
                            src="https://avatar.iran.liara.run/public"
                            alt="user"
                          />
                        </div>
                      </>
                    )}
                    <span>
                      {" "}
                      {elem[index]?.title} {elem[index]?.value?.length}
                    </span>
                  </div>
                  <div className="rightView">
                    <AiOutlinePlus />{" "}
                    <span style={{ letterSpacing: "2px" }}>...</span>
                  </div>
                </div>
                <div className="dashList flex-gap-10">
                  {elem[index]?.value?.map((elem, ind) => {
                    return (
                      <Card
                        key={ind}
                        id={elem.id}
                        title={elem.title}
                        tag={elem.tag}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    )
  );
};

export default DashBoard;
