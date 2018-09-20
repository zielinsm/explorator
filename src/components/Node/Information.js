import React from "react";
import { Header, Divider, Label, Tab as Switch } from "semantic-ui-react";
import filesize from "filesize";
import "./Information.css";

import Tab from "./Tab";

const Information = props => {
  const { results } = props;

  const {
    name,
    id,
    or_addr,
    dir_addr,
    details,
    country,
    as,
    weight,
    host,
    bandwidth,
    policy,
    family_alleged,
    family_effective,
    info,
    tor
  } = results;

  const basicTab = [
    { label: "OR Addresses", value: or_addr },
    { label: "Directory Address", value: dir_addr },
    { label: "Hostnames", value: host },
    { label: "Country", value: country },
    { label: "AS Name", value: as.name },
    { label: "Consensus weight", value: weight },
    { label: "Platform", value: tor },
    { label: "Contact", value: info }
  ];

  const bandwidthTab = [
    { label: "Bandwidth Rate", value: `${filesize(bandwidth.rate)}/s` },
    { label: "Bandwidth Burst", value: `${filesize(bandwidth.burst)}/s` },
    {
      label: "Observed Bandwidth",
      value: `${filesize(bandwidth.observed)}/s`
    },
    {
      label: "Advertised Bandwidth",
      value: `${filesize(bandwidth.advertised)}/s`
    }
  ];

  const policiesTab = [{ label: "Exit policy", value: policy }];

  const familyTab = [
    { label: "Alleged family", value: family_alleged },
    { label: "Effective family", value: family_effective }
  ];

  const panes = [
    {
      menuItem: "Basic",
      render: () => <Tab data={basicTab} />
    },
    {
      menuItem: "Bandwidth",
      render: () => <Tab data={bandwidthTab} />
    },
    {
      menuItem: "Policies",
      render: () => <Tab data={policiesTab} />
    },
    {
      menuItem: "Family",
      render: () => <Tab data={familyTab} />
    }
  ];

  return (
    <div>
      <Header
        as="h3"
        content={name}
        subheader={id}
        className="Information__Header"
      />
      {details.map((element, index) => (
        <Label size="tiny" key={index}>
          {element}
        </Label>
      ))}
      <Divider />
      <Switch menu={{ secondary: true }} panes={panes} />
    </div>
  );
};

export default Information;
