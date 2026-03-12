import { AuthProvider } from "./features/auth/auth.context";
import { SongProvider } from "./features/home/song.context";
import { RouterProvider } from "react-router";
import { router } from "./app.routes";
import "./features/shared/styles/global.scss";

function App() {
  return (
    <AuthProvider>
      <SongProvider>
        <RouterProvider router={router} />
      </SongProvider>
    </AuthProvider>
  );
}

export default App;
