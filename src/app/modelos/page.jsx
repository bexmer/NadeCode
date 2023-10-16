import React from "react";
import CardIA from "@/components/CardIA";
import datos from "@/api/ia.json";

export default function Modelos() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <CardIA data={datos} />
      <CardIA data={datos} />
      <CardIA data={datos} />
      <CardIA data={datos} />
      <CardIA data={datos} />
      <CardIA data={datos} />
    </div>
  );
}
