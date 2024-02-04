"use client";
import { Card, CardBody, Chip } from "@nextui-org/react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col item-center justify-center gap-4 py-8 md:py-10 h-full">
      <Card>
        <CardBody>
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              <Image
                src="/sana.png"
                width="200"
                height="200"
                alt="frey 2 fade profile picture"
                className="justify-center rounded-lg"
              />
            </div>
            <div className="flex justify-center pt-2">
              <h2 className="text-3xl font-bold">Pat</h2>
            </div>
            <div className="flex justify-center m-4">
              <Chip variant="shadow" color="warning" size="sm" className="mr-2">
                Self Learnt Barber
              </Chip>
              <Chip variant="shadow" color="warning" size="sm" className="ml-2">
                Blacktown Based
              </Chip>
            </div>

            <div className="flex justify-center max-w-sm">
              <p className="text-md text-center">
                To contact me dm my insta, and to see more of my work check my
                tiktok out.
              </p>
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <Card className="w-full" isHoverable>
                <a
                  href="https://www.instagram.com/patfreyz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardBody className="p-3">
                    <h3 className="self-center text-md">Instagram</h3>
                  </CardBody>
                </a>
              </Card>
            </div>
            <div className="flex justify-center gap-4 pt-4">
              <Card className="w-full" isHoverable>
                <a
                  href="https://www.tiktok.com/@patfreyz?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardBody className="p-3">
                    <h3 className="self-center text-md">Tiktok</h3>
                  </CardBody>
                </a>
              </Card>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
