import { Card, Grid, Image, Text } from "@geist-ui/core";
import React from "react";

const dataExample = [
  {
    imagesUrl: "https://static.lightoj.com/category-icons/lightoj-logo.png",
    link: "",
    title: "LightOJ Volumes",
  },
  {
    imagesUrl: "https://static.lightoj.com/category-icons/icpc3.svg",
    link: "",
    title: "ACM ICPC",
  },
  {
    imagesUrl:
      "https://loj-static.sgp1.digitaloceanspaces.com/category-icons/dimik.svg",
    link: "",
    title: "Dimik OJ",
  },
];

export default function CategoriesViewer() {
  return (
    <div id="Categories" className="py-10">
      <Text h2>Categories</Text>
      <Grid.Container gap={5} justify="center">
        {dataExample.map((item, index) => (
          <Grid key={index} xs>
            <Card width="100%" hoverable className="">
              <Image
                src={item.imagesUrl}
                height="200px"
                width="400px"
                draggable={false}
              />
              <Text h4 mb={0} className="text-center">
                {item.title}
              </Text>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
}
