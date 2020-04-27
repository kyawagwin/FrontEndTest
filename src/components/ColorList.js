import React from "react";
import { List, Avatar } from "antd";

const ColorList = ({ colors }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={colors}
      renderItem={({ name, color, pantone_value, year }) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                src={`https://ui-avatars.com/api/?background=${color.substr(
                  1
                )}&color=fff`}
              />
            }
            title={<span style={{ color: `${color}` }}>{name}</span>}
            description={`pantone: ${pantone_value}, year: ${year}`}
          />
        </List.Item>
      )}
    />
  );
};

export default ColorList;
