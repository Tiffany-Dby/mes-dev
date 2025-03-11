import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { ReactNode } from "react";

interface BaseCardProps {
  title: ReactNode;
  description?: ReactNode;
  content?: ReactNode;
  footer?: ReactNode;
}

const BaseCard = ({ title, description, content, footer }: BaseCardProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{content}</CardContent>
        <CardFooter>{footer}</CardFooter>
      </Card>
    </>
  );
};

export default BaseCard;
