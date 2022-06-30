import { styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";

const TooltipDetails = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    color: "#293241",
    backgroundColor: "#f8f8f8",
    padding: "0px",
    borderRadius: "8px",
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
});

export default TooltipDetails;
