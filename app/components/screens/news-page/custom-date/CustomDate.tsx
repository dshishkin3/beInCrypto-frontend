import React from "react";

export const CustomDate: React.FC<{ dateString: string }> = ({
  dateString,
}) => {
  const date = new Date(dateString);
  const dateNow = new Date();

  const secondsPast = Math.round((dateNow.valueOf() - date.valueOf()) / 1000);

  const minutesPast = Math.round((secondsPast / 60) % 60);

  const hoursPast = Math.round((secondsPast / 60 / 60) % 60);

  const daysPast = Math.round((secondsPast / 60 / 60 / 24) % 24);

  const content = `
    ${daysPast ? daysPast + "d." : ""} 
    ${hoursPast ? hoursPast + "h." : ""} 
    ${minutesPast + "m."}
  `;

  return <p className="text-capture">{content}</p>;
};
