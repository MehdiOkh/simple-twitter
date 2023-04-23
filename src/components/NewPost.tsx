import {
  Box,
  Fab,
  CircularProgress,
  Avatar,
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Button,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useMutation } from "@tanstack/react-query";
import { SubmitPostFetcher } from "../apis/postFetcher";
import { toast } from "react-toastify";

const NewPost = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const mutation = useMutation(SubmitPostFetcher, {
    onSuccess: () => toast.success("Your post was submitted successfully"),
  });
  return (
    <>
      <Dialog
        maxWidth="md"
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
      >
        <DialogTitle>Write your post:</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Post"
            fullWidth
            sx={{ width: "620px", marginTop: "5px" }}
            rows="4"
            variant="outlined"
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setDialogOpen(false);
              mutation.mutate({ text: "text" });
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Box sx={{ bottom: "20px", right: "20px", position: "fixed" }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={{ padding: "25px" }}
          onClick={() => setDialogOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
};
export default NewPost;
