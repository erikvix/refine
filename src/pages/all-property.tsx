import React from "react";
import { Add } from "@mui/icons-material";
import { useList } from "@refinedev/core";
import { Box, Stack, Typography } from "@mui/material";
import { useNavigation } from "@refinedev/core";
import CustomButtonfrom from "../components/common/CustomButton";
import PropertyCardfrom from "../components/common/PropertyCard";
export default function allProperty() {
  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="#11142d">
        Dashboard
      </Typography>
    </Box>
  );
}
