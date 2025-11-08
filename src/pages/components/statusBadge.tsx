import { Badge } from "@mantine/core";

interface StatusBadgeProps {
  status: "active" | "inactive" | "pending";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  let color: string;
  let label: string;

  switch (status) {
    case "active":
      color = "green";
      label = "Active";
      break;
    case "inactive":
      color = "red";
      label = "Inactive";
      break;
    case "pending":
      color = "yellow";
      label = "Pending";
      break;
  }

  return (
    <Badge color={color} data-testid="status-badge">
      {label}
    </Badge>
  );
}


