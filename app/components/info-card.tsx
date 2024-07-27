
"use client";

import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    IconButton,
  } from "./material";
  
  interface InfoCardProps {
    icon: React.ElementType;
    title: string;
    date: string;
    children: React.ReactNode;
  }
  
  export function InfoCard({ icon: Icon, title, date, children }: InfoCardProps) {
    return (
      <Card className="dark:bg-cardColorbm">
        <CardHeader
          className="flex items-center justify-between rounded-none dark:bg-cardColorbm  overflow-visible"
          floated={false}
          shadow={false}
        >
          <div className="flex flex-col  gap-1 w-full dark:bg-cardColorbm  ">
            <Typography color="blue" className="font-bold text-xs  ">
              {date}
            </Typography>
            <Typography color="blue-gray" variant="h5" className="w-full  dark:text-white">
              {title}
            </Typography>
          </div>
          <IconButton
            className="flex-shrink-0 pointer-events-none"
            ripple={false}
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </IconButton>
        </CardHeader>
        <CardBody className="grid justify-start !px-3.5 pt-2">
          <div className="font-normal !text-gray-500">
            {children}
          </div>
        </CardBody>
      </Card>
    );
  }
  
  export default InfoCard;
  