import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  IPost,
  PostCommentsFetcher,
  PostListFetcher,
} from "../apis/postFetcher";
import { useMutation, useQuery } from "@tanstack/react-query";

const Post = ({ id, username, issueDate, text, avatar }: IPost) => {
  const [commentsOpen, setCommentsOpen] = useState(false);
  const comments = useMutation(() =>
    PostCommentsFetcher({ postId: id, page: 1, perPage: 5 })
  );
  useEffect(() => {
    if (commentsOpen === true) comments.mutate();
  }, [commentsOpen]);
  return (
    <>
      <ListItem
        alignItems="flex-start"
        onClick={() => setCommentsOpen(!commentsOpen)}
      >
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="src/assets/christian-buehner-DItYlc26zVI-unsplash.jpg"
          />
        </ListItemAvatar>
        <ListItemText
          primary={
            <Typography
              sx={{ fontSize: "18px" }}
              variant="h2"
              color="text.primary"
            >
              {username} &nbsp;
              <Typography
                sx={{ fontSize: "12px" }}
                component="span"
                variant="body2"
                color="text.secondary"
              >
                {issueDate}
              </Typography>
            </Typography>
          }
          secondary={
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.secondary"
            >
              {text}
            </Typography>
          }
        />
        {commentsOpen ? (
          <ExpandLess sx={{ margin: "auto" }} />
        ) : (
          <ExpandMore sx={{ margin: "auto" }} />
        )}
      </ListItem>
      {comments.isSuccess &&
        comments.data.data.data.list.map((comment) => {
          return (
            <Collapse in={commentsOpen} timeout="auto" unmountOnExit>
              <ListItem alignItems="flex-start" sx={{ marginLeft: "58px" }}>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="src/assets/christian-buehner-DItYlc26zVI-unsplash.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      sx={{ fontSize: "18px" }}
                      variant="h2"
                      color="text.primary"
                    >
                      {comment.username} &nbsp;
                      <Typography
                        sx={{ fontSize: "12px" }}
                        component="span"
                        variant="body2"
                        color="text.secondary"
                      >
                        {comment.issueDate}
                      </Typography>
                    </Typography>
                  }
                  secondary={
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.secondary"
                    >
                      {comment.text}
                    </Typography>
                  }
                />
              </ListItem>
            </Collapse>
          );
        })}

      <Divider variant="inset" component="li" />
    </>
  );
};

export default Post;
