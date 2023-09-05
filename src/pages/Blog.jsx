import React from "react";
import { Stack, Button, Table } from "react-bootstrap";
const arrayBlogs = [
  { name: "How to become a good developer", author: "Eric gacia" },
  { name: "I am a rich developer", author: "Nhat Quang" },
];

const Blog = () => {
  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Button as="a" variant="success">
          Button as link
        </Button>
      </Stack>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>author</th>
          </tr>
        </thead>
        <tbody>
          {arrayBlogs.map((item) => {
            return (
              <tr key={item.name}>
                <td>{item.name}</td>
                <td>{item.author}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Blog;
