import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import NavbarLayout from "./layouts/NavbarLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NotFound from "./pages/NotFound/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<NavbarLayout />}>
              <Route path="/" element={<Home />} />

              <Route path="/not-found" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
