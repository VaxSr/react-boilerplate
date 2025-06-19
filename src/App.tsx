import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import NavbarLayout from "./layouts/NavbarLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound/NotFound";
// import AuthProvider from "./context/AuthProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <AuthProvider> */}
        <BrowserRouter>
          <Routes>
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<Home />} />

              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* </AuthProvider> */}
      </QueryClientProvider>
    </>
  );
}

export default App;
