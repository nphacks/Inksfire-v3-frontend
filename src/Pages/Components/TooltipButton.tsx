import "./Styles/TooltipButton.css";

export const TooltipButton = ({ tooltipText, onClick, children }: any) => {
  return (
    <div className="tooltip-wrapper">
      <button onClick={onClick}>{children}</button>
      <span className="tooltip">{tooltipText}</span>
    </div>
  );
};