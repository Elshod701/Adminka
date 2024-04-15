import { Route, Routes } from "react-router-dom";
import { nanoid } from "nanoid";
import { routes } from "./routes/route";
import Login from "./components/login-form/login";
import MainLayout from "./layout/main-layout";
import UseCheckToken from "./hooks/use-check-token";
import UseScrollTop from "./hooks/use-scroll-top";

const App = () => {
  return (
    <>
      <UseCheckToken />
      <UseScrollTop />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          {routes.map((e) => (
            <Route path={e.path} element={e.element} key={nanoid()} />
          ))}
        </Route>
        <Route path="*" element={<h1>Page Not Found 404</h1>} />
      </Routes>
    </>
  );
};

export default App;
