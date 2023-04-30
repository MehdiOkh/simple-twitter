import {
	Box,
	Fab,
	Dialog,
	DialogTitle,
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
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
	text: yup
		.string()
		.required("your post should contain at least 1 character"),
});
const NewPost = () => {
	const [dialogOpen, setDialogOpen] = useState(false);
	const mutation = useMutation(SubmitPostFetcher, {
		onSuccess: (res) => {
			if (res.data.status === "OK") {
				formik.values.text = "";
				toast.success("Your post was submitted successfully!");
				setDialogOpen(false);
			} else {
				toast.error("An error ocurred!");
			}
			console.log(res);
		},
	});
	const formik = useFormik({
		initialValues: {
			text: "",
		},
		validationSchema: validationSchema,
		onSubmit: (values) => {
			mutation.mutate(values);
		},
	});
	return (
		<>
			<Dialog
				maxWidth="md"
				onClose={() => setDialogOpen(false)}
				open={dialogOpen}
			>
				<form onSubmit={formik.handleSubmit}>
					<DialogTitle>Create new post:</DialogTitle>
					<DialogContent>
						<TextField
							autoFocus
							label="Post"
							fullWidth
							sx={{ width: "620px", marginTop: "5px" }}
							rows="4"
							variant="outlined"
							multiline
							name="text"
							value={formik.values.text}
							onChange={formik.handleChange}
							error={
								formik.touched.text &&
								Boolean(formik.errors.text)
							}
							helperText={
								formik.touched.text && formik.errors.text
							}
						/>
					</DialogContent>
					<DialogActions>
						<Button type="submit">Submit</Button>
					</DialogActions>
				</form>
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
