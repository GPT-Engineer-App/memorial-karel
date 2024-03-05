import React from "react";
import { Button } from "@chakra-ui/react";

const SidebarButton = ({ label }) => {
  return (
    <Button width="100%" marginBottom="2" colorScheme="blue">
      {label}
    </Button>
  );
};

export default SidebarButton;
