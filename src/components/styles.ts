import { Dialog } from "@mui/material";
import styled from "styled-components";

export const StyledTopBar = styled.div`
  width: 100%;
  height: 70px;
  background-color: black;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
`;
export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 600px;
  height: 100%;
  max-height: 500px;
  align-items: center;
  width: 100%;
  overflow-x: auto;

  table {
    width: 100%;
  }
`;

export const CustomDialog = styled(Dialog)`
  h2 {
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: 20px;
  }
  .MuiDialog-paper {
    width: 400px;
    padding: 20px 24px;
  }
  .MuiDialogContent-root {
    display: flex;
    gap: 20px;
    padding: 0;
    margin-bottom: 20px;
  }
  .MuiDialogActions-root {
    .MuiButton-containedPrimary {
      background-color: black;
    }
    .MuiButton-textPrimary {
      color: black;
    }
  }
`;
export const TableHeader = styled.div`
  position: sticky;
  height: 70px;
  background-color: #fafafa;
  top: 0;
  width: 100%;
  display: flex;
  z-index: 100;
  margin-bottom: 15px;
  justify-content: space-between;

  h2 {
    font-size: 24px;
  }
`;
