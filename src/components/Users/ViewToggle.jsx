import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

const ViewToggle = ({ viewMode, setViewMode }) => {
  const handleViewChange = (event, nextView) => {
    if (nextView !== null) {
      setViewMode(nextView);
    }
  };

  return (
    <ToggleButtonGroup
      value={viewMode}
      exclusive
      onChange={handleViewChange}
      sx={{ marginBottom: 3 }}
    >
      <ToggleButton value="list" aria-label="list view">
        <ViewListIcon />
      </ToggleButton>
      <ToggleButton value="card" aria-label="card view">
        <ViewModuleIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ViewToggle;
