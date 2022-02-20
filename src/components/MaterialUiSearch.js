import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import animals from "../data";

function MaterialUiSearch() {
  return (
    <Autocomplete
      id="search-input"
      options={animals}
      sx={{ width: "60vw", margin: "400px auto" }}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} label="Choose Your Animal" />
      )}
    />
  );
}

export default MaterialUiSearch;
