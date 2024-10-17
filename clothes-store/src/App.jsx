import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { publicRouter } from "./route/routes";
import NotFound from "./page/NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public Routes */}
          {publicRouter.map((item, index) => {
            const Page = item.element;
            return item.layout ? (
              <Route
                key={index + "publicRoute"}
                path={item.path}
                element={
                  <item.layout type={item?.type}>
                    <Page />
                  </item.layout>
                }
              />
            ) : (
              <Route
                key={item?.path + index}
                path={item?.path}
                element={<Page />}
              />
            );
          })}

          {/* Admin Routes */}
          {/* {adminRouter.map((item, index) => {
              const Page = item.element;
              return item.layout ? (
                <Route
                  key={index + "adminRoute"}
                  path={item.path}
                  element={
                    userRole === "admin" ? (
                      <item.layout type={item?.type}>
                        <Page />
                      </item.layout>
                    ) : (
                      <Navigate to="/login" /> // Redirect to login if not admin
                    )
                  }
                />
              ) : (
                <Route
                  key={item?.path + index}
                  path={item?.path}
                  element={<Page />}
                />
              );
            })} */}

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
