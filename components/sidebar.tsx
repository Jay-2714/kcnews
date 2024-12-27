import { Button } from "@mui/material";

interface SidebarProps {
  postState: boolean;
  setPostState: (state: boolean) => void;
}

export default function Sidebar({ postState, setPostState }: SidebarProps) {
    const togglePost = () => {
        setPostState(!postState);
    }
    

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
      <div className="flex flex-col p-1">
        <Button onClick={togglePost} variant="contained" color="primary">POSTS</Button>
      </div>
    </div>
  );
}