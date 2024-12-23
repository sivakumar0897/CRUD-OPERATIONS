import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserCardView = ({ users, onEdit, onDelete }) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: 3,
        padding: 3,
      }}
    >
      {users.map((user) => (
        <Card
          key={user.id}
          sx={{
            maxWidth: 350,
            borderRadius: 3,
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
            },
          }}
        >
          {/* User Avatar */}
          <CardMedia
            sx={{
              height: 250,
              position: "relative",
              backgroundColor: "#f5f5f5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              sx={{
                width: 120,
                height: 120,
                border: "3px solid white",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              }}
            />
          </CardMedia>

          {/* User Info */}
          <CardContent
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {user.first_name} {user.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.email}
            </Typography>
          </CardContent>

          {/* Action Buttons */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              paddingBottom: 2,
            }}
          >
            <IconButton
              color="primary"
              onClick={() => onEdit(user)}
              sx={{
                backgroundColor: "#e3f2fd",
                "&:hover": { backgroundColor: "#bbdefb" },
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => onDelete(user.id)}
              sx={{
                backgroundColor: "#ffebee",
                "&:hover": { backgroundColor: "#ffcdd2" },
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Card>
      ))}
    </Box>
  );
};

export default UserCardView;
