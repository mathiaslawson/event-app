import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";
import "@radix-ui/themes/styles.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NeutralLayout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};

const CreatorLayout = ({ children }) => {
  // const navigate = useNavigate();

  // const { isloggedIn } = useSelector((state) => ({
  //   isloggedIn: state.login.isloggedIn,
  // }));

  // useEffect(() => {
  //   if (isloggedIn === false) {
  //     navigate("/creator-auth-login");
  //   }
  // }, [navigate]);
  return (
    <>
      <div>
       
        {children}
      </div>
    </>
  );
};

const AttendeeLayout = ({ children }) => {
  return (
    <>
      <div>{children} </div>
    </>
  );
};

function LayoutWrapper({ allroutes }) {
  return (
    <>
      <Routes>
        {allroutes?.map((route, index) => {
          return (
            <>
              {
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <>
                      {route.routeId === 0 ? (
                        <NeutralLayout>{route.element}</NeutralLayout>
                      ) : route.routeId === 1 ? (
                        <CreatorLayout>{route.element}</CreatorLayout>
                      ) : route.routeId === 2 ? (
                        <AttendeeLayout>{route.element}</AttendeeLayout>
                      ) : (
                        <>Not Found</>
                      )}
                    </>
                  }
                />
              }
            </>
          );
        })}
      </Routes>
    </>
  );
}

LayoutWrapper.propTypes = {
  allroutes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      element: PropTypes.elementType.isRequired,
    })
  ).isRequired,
};

NeutralLayout.propTypes = {
  children: PropTypes.node,
};
AttendeeLayout.propTypes = {
  children: PropTypes.node,
};
CreatorLayout.propTypes = {
  children: PropTypes.node,
};

export default LayoutWrapper;
