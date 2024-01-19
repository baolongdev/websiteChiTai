import {
  Button,
  Card,
  Drawer,
  Link,
  Page,
  Text,
  Image,
  Grid,
} from "@geist-ui/core";
// import { Container } from "postcss";
import { Fragment, useEffect, useState } from "react";
import HeaderComp from "../components/HeaderComp";
import ContentComp from "../components/ContentComp";

export default function Home() {
  const [state, setState] = useState(false);
  return (
    // <Layout>
    <Page className="section container">
      <Page.Header>
        <HeaderComp />
      </Page.Header>
      <Page.Content>
        <ContentComp />
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
}
